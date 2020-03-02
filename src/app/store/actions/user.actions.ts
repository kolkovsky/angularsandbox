import {Action} from '@ngrx/store';
import {User} from 'src/app/models/user';

export enum UserActions {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get User Success'
}

export class GetUsers implements Action {
  public readonly type: string = UserActions.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type: string = UserActions.GetUsersSuccess;
  constructor(public payload: User[]) {
  }
}

export class GetUser implements Action {
  public readonly type: string = UserActions.GetUser;
  constructor(public payload: number) {
  }
}

export class GetUserSuccess implements Action {
  public readonly type: string = UserActions.GetUserSuccess;
  constructor(public payload: User) {
  }
}

export type UserActionsType = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess;
