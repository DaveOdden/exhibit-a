import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { ngRxStore, nameUrl } from '../app.interfaces'
import { SocialUser } from 'angular-6-social-login';

export const SET_AUTH           = '[AUTH] Set'
export const CHANGE_HEADER      = '[HEADER] Change'
export const ADD_TUTORIAL       = '[TUTORIAL] Add'
export const REMOVE_TUTORIAL    = '[TUTORIAL] Remove'

export class setAuthState implements Action {
    readonly type = SET_AUTH
    constructor(public payload: SocialUser) {}
}



export class ChangeHeaderButtonType implements Action {
    readonly type = CHANGE_HEADER
    constructor(public payload: string) {}
}



export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL
    constructor(public payload: nameUrl) {}
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL
    constructor(public payload: number) {}
}

export type Actions = AddTutorial | RemoveTutorial | ChangeHeaderButtonType | setAuthState