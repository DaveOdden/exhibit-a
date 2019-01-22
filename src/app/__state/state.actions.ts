import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { NgRxStore, NameUrl } from '../app.interfaces';
import { SocialUser } from 'angular-6-social-login';

export const SET_AUTH           = '[AUTH] Set';
export const CHANGE_HEADER_BUTTON_TYPE = '[HEADER] Change Button Type';
export const CHANGE_HEADER_TITLE = '[HEADER] Change Title';
export const ADD_TUTORIAL       = '[TUTORIAL] Add';
export const REMOVE_TUTORIAL    = '[TUTORIAL] Remove';

export class SetAuthState implements Action {
    readonly type = SET_AUTH;
    constructor(public payload: SocialUser) {}
}

export class ChangeHeaderButtonType implements Action {
    readonly type = CHANGE_HEADER_BUTTON_TYPE;
    constructor(public payload: string) {}
}

export class ChangeHeaderTitle implements Action {
    readonly type = CHANGE_HEADER_TITLE;
    constructor(public payload: string) { console.log('passing through action') }
}

export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL;
    constructor(public payload: NameUrl) {}
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL;
    constructor(public payload: number) {}
}

export type Actions = AddTutorial | RemoveTutorial | ChangeHeaderTitle | ChangeHeaderButtonType | SetAuthState;
