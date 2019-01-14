import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { ngRxStore, nameUrl } from '../app.interfaces'

export const CHANGE_HEADER      = '[HEADER] Change'
export const ADD_TUTORIAL       = '[TUTORIAL] Add'
export const REMOVE_TUTORIAL    = '[TUTORIAL] Remove'

export class ChangeHeaderButtonType implements Action {
    readonly type = CHANGE_HEADER
    constructor(public payload: string) { 
        console.log("in ChangeHeaderButtonType");
    }
}

export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL
    constructor(public payload: nameUrl) {}
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL
    constructor(public payload: number) {}
}

export type Actions = AddTutorial | RemoveTutorial | ChangeHeaderButtonType