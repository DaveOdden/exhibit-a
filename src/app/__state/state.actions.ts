import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { NgRxStore, NameUrl } from '../app.interfaces';
import { SocialUser } from 'angular-6-social-login';

// export const SET_AUTH           = '[AUTH] Set';
// export const CHANGE_HEADER_BUTTON_TYPE = '[HEADER] Change Button Type';
// export const CHANGE_HEADER_TITLE = '[HEADER] Change Title';
// export const CHANGE_HEADER_ATTRIBUTES = '[HEADER] Change Attributes';
// export const ADD_TUTORIAL       = '[TUTORIAL] Add';
// export const REMOVE_TUTORIAL    = '[TUTORIAL] Remove';

export enum StateActionTypes {
	LOGIN = '[AUTH] Login User with Social Service',
	LOGIN_SUCCESS = '[Auth] Login Success',
	LOGIN_FAILURE = '[Auth] Login Failure',
	LOGOUT = '[AUTH] Logout User with Social Service',
	LOGOUT_SUCCESS = '[Auth] Logout Success',
  LOGOUT_FAILURE = '[Auth] Logout Failure',
  SET_AUTH = '[AUTH] Set',
  CHANGE_HEADER_BUTTON_TYPE = '[HEADER] Change Button Type',
  CHANGE_HEADER_TITLE = '[HEADER] Change Title',
  CHANGE_HEADER_ATTRIBUTES = '[HEADER] Change Attributes',
  ADD_TUTORIAL = '[TUTORIAL] Add',
  REMOVE_TUTORIAL = '[TUTORIAL] Remove'
}

export class LogIn implements Action {
	readonly type = StateActionTypes.LOGIN;
	constructor(public payload: string) {
		console.log('2. Login Action constructor');
	}
}

export class LogInSuccess implements Action {
  readonly type = StateActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {
		console.log('5. Login Success Action constructor');
	}
}

export class LogInFailure implements Action {
  readonly type = StateActionTypes.LOGIN_FAILURE;
  constructor(public payload: any) {
		console.log('in login failure');
	}
}

export class LogOut implements Action {
	readonly type = StateActionTypes.LOGOUT;
	constructor(public payload: string) {
		console.log('2. Login Action constructor');
	}
}

export class LogOutSuccess implements Action {
  readonly type = StateActionTypes.LOGOUT_SUCCESS;
  constructor(public payload: any) {
		console.log('5. Login Success Action constructor');
	}
}

export class LogOutFailure implements Action {
  readonly type = StateActionTypes.LOGOUT_FAILURE;
  constructor(public payload: any) {
		console.log('in login failure');
	}
}

export class SetAuthState implements Action {
	readonly type = StateActionTypes.SET_AUTH;
	constructor(public payload: SocialUser) {}
}

export class ChangeHeaderButtonType implements Action {
	readonly type = StateActionTypes.CHANGE_HEADER_BUTTON_TYPE;
	constructor(public payload: string) {}
}

export class ChangeHeaderTitle implements Action {
	readonly type = StateActionTypes.CHANGE_HEADER_TITLE;
	constructor(public payload: string) {}
}

export class ChangeHeaderAttributes implements Action {
	readonly type = StateActionTypes.CHANGE_HEADER_ATTRIBUTES;
	constructor(public payload: any) {}
}

export class AddTutorial implements Action {
	readonly type = StateActionTypes.ADD_TUTORIAL;
	constructor(public payload: NameUrl) {}
}

export class RemoveTutorial implements Action {
	readonly type = StateActionTypes.REMOVE_TUTORIAL;
	constructor(public payload: number) {}
}

export type StateActions =
	| LogIn
	| LogInSuccess
	| LogInFailure
	| LogOut
	| LogOutSuccess
	| LogOutFailure
	| RemoveTutorial
	| ChangeHeaderTitle
	| ChangeHeaderButtonType
	| ChangeHeaderAttributes
	| SetAuthState;
