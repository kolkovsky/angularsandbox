import {Priority} from './priority';

export interface Task {
  id?: number;
  name: string;
  isDone: boolean;
  priority: string;
}
