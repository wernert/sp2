import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeTrackingService } from './time-tracking.service';
import { DialogIdleComponent } from './dialog-idle/dialog-idle.component';
import { IdleService } from './idle.service';
import { UiModule } from '../ui/ui.module';
import { FormsModule } from '@angular/forms';
import { TasksModule } from '../tasks/tasks.module';
import { TakeABreakModule } from './take-a-break/take-a-break.module';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    FormsModule,
    TasksModule,
    TakeABreakModule,
  ],
  declarations: [
    DialogIdleComponent
  ],
  providers: [
    TimeTrackingService,
    IdleService,
  ],
  entryComponents: [
    DialogIdleComponent,
  ],
  exports: [
    TakeABreakModule,
  ]
})
export class TimeTrackingModule {
  constructor(
    private readonly _timeTrackingService: TimeTrackingService,
    private readonly _idleService: IdleService,
  ) {
    this._idleService.init();
  }
}
