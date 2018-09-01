import { TaskActions } from './task.actions';


export interface State {
  [index: number]: any;
}

export const INITIAL_TASK_STATE: State = [];

export function reducer(state = INITIAL_TASK_STATE, action: TaskActions): State {
  console.log(state, action);

  switch (action.type) {

    // case TaskActionTypes.ReloadFromLs:
    //   const TASKS_FROM_LS = JSON.parse(localStorage.getItem(LS_TASKS));
    //
    //   // TODO should be done somewhere else
    //   // create local storage if not done already
    //   if (!TASKS_FROM_LS || !Array.isArray(TASKS_FROM_LS)) {
    //     localStorage.setItem(LS_TASKS, JSON.stringify(INITIAL_TASK_STATE));
    //   }
    //
    //   const lsTasks: [Task] = parseFromLs(LS_TASKS);
    //   return [...lsTasks];
    //
    // case TaskActionTypes.AddTask:
    //   const newTask: Task = Object.assign(action.payload, {id: shortid()});
    //   return [newTask, ...state];
    //
    // case TaskActionTypes.DeleteTask:
    //   return state
    //     .filter((item) => item.id !== action.payload)
    //     .map((item) => {
    //       if (item.subTasks) {
    //         let taskCopy: Task;
    //         item.subTasks.forEach((subItem, index) => {
    //           if (subItem.id === action.payload) {
    //             taskCopy = Object.assign({}, item);
    //             taskCopy.subTasks.splice(index, 1);
    //           }
    //         });
    //         return taskCopy || item;
    //       } else {
    //         return item;
    //       }
    //     });
    //
    // case TaskActionTypes.UpdateTask:
    //   return state.map((item) => {
    //     // add total time spent
    //     if (action.payload.changedFields.timeSpentOnDay) {
    //       action.payload.changedFields.timeSpent = calcTotalTimeSpent(action.payload.changedFields.timeSpentOnDay);
    //     }
    //
    //     if (item.id === action.payload.id) {
    //       return Object.assign({}, item, action.payload.changedFields);
    //     } else if (item.subTasks) {
    //       let taskCopy: Task;
    //
    //       item.subTasks.forEach((subItem, index) => {
    //         if (subItem.id === action.payload.id) {
    //           taskCopy = Object.assign({}, item);
    //           taskCopy.subTasks[index] = Object.assign({}, subItem, action.payload.changedFields);
    //         }
    //       });
    //       return taskCopy || item;
    //     } else {
    //       return item;
    //     }
    //   });
    //
    // case TaskActionTypes.SetTaskDone:
    //   return state.map((item) => {
    //     if (item.id === action.payload) {
    //       return Object.assign({}, item, {isDone: true});
    //     } else if (item.subTasks) {
    //       let taskCopy: Task;
    //
    //       item.subTasks.forEach((subItem, index) => {
    //         if (subItem.id === action.payload) {
    //           taskCopy = Object.assign({}, item);
    //           taskCopy.subTasks[index] = Object.assign({}, subItem, {isDone: true});
    //         }
    //       });
    //       return taskCopy || item;
    //     } else {
    //       return item;
    //     }
    //   });
    //
    // case TaskActionTypes.SetTaskUndone:
    //   return state.map((item) => {
    //     if (item.id === action.payload) {
    //       return Object.assign({}, item, {isDone: false});
    //     } else if (item.subTasks) {
    //       let taskCopy: Task;
    //
    //       item.subTasks.forEach((subItem, index) => {
    //         if (subItem.id === action.payload) {
    //           taskCopy = Object.assign({}, item);
    //           taskCopy.subTasks[index] = Object.assign({}, subItem, {isDone: false});
    //         }
    //       });
    //       return taskCopy || item;
    //     } else {
    //       return item;
    //     }
    //   });
    //
    // case TaskActionTypes.AddSubTask:
    //   return state.map((item) => {
    //     if (item.id === action.payload.id) {
    //       const updatedTask: Task = Object.assign({}, item);
    //       const newTask: Task = {
    //         id: shortid(),
    //         parentId: item.id,
    //         title: '',
    //         isDone: false
    //       };
    //
    //
    //       if (!updatedTask.subTasks) {
    //         updatedTask.subTasks = [newTask];
    //       } else {
    //         updatedTask.subTasks.push(newTask);
    //       }
    //
    //       return updatedTask;
    //     } else {
    //       return item;
    //     }
    //   });

    default:
      return state;
  }
}