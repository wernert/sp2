import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Task } from '../task.model';
import { map, startWith, takeUntil, withLatestFrom } from 'rxjs/operators';
import { TaskService } from '../task.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'select-task',
  templateUrl: './select-task.component.html',
  styleUrls: ['./select-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectTaskComponent implements OnInit, OnDestroy {
  taskSelectCtrl: FormControl = new FormControl();
  filteredTasks: Task[];
  isCreate = false;

  @Input() set initialTask(task: Task) {
    if (task && !this.taskSelectCtrl.value || this.taskSelectCtrl.value === '') {
      this.isCreate = false;
      this.taskSelectCtrl.setValue(task);
    }
  }

  @Output() taskChange = new EventEmitter<Task | string>();

  private _destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private _taskService: TaskService) {
  }

  ngOnInit() {
    this.taskSelectCtrl.valueChanges.pipe(
      startWith(''),
      withLatestFrom(this._taskService.startableTasks$),
      map(([str, tasks]) =>
        typeof str === 'string'
          ? tasks.filter(task => task.title.toLowerCase().includes(str.toLowerCase()))
          : tasks
      ),
      takeUntil(this._destroy$)
    )
      .subscribe((filteredTasks) => {
        const taskOrTitle = this.taskSelectCtrl.value;
        this.isCreate = (typeof taskOrTitle === 'string');
        this.filteredTasks = this.isCreate ? filteredTasks : [];
        this.taskChange.emit(taskOrTitle);
      });
  }

  ngOnDestroy() {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

  displayWith(task: Task) {
    return task && task.title;
  }
}
