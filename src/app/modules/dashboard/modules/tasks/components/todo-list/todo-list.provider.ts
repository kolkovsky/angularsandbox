import { InjectionToken, Provider } from "@angular/core";
import { Observable, of } from "rxjs";
import { TaskFacade } from "../../store/task.facade";


const taskFactory = (taskFacade: TaskFacade) => {
    console.log('hI');
    taskFacade.getTasks();
    return taskFacade.tasks$
};

export const TASK_INFO: InjectionToken<Observable<{}>> = new InjectionToken<Observable<{}>>("Stream getting tasks");

export const TODO_LIST_PROVIDERS: Provider[] = [
  {
    provide: TASK_INFO,
    deps: [TaskFacade],
    useFactory: taskFactory,
  },
];
