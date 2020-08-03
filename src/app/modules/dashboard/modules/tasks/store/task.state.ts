import {Task} from '../../../../../models/task';

export interface TaskState {
  tasks: Task[];
  addedTask: Task;
  deletedTask: Task;
  completedTasksIds: number[];
  uncompletedTasksIds: number[];
}

export const initialTaskState: TaskState = {
  tasks: [],
  addedTask: null,
  deletedTask: null,
  completedTasksIds: [],
  uncompletedTasksIds: []
};
