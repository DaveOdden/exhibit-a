import { Action } from '@ngrx/store'
import { ngRxStore } from '../../app.interfaces'
import * as StateActions from '../state.actions'

const storeObj: ngRxStore = {
	header: {
		leftButtonType: "menu"
	},
	other: {
		name: 'Initial Tutorial',
		url: 'http://google.com'
	}
}

export function reducer(state: ngRxStore[] = [storeObj], action: StateActions.Actions) {
	switch(action.type) {
		case StateActions.ADD_TUTORIAL:
			return [...state, action.payload];
		case StateActions.CHANGE_HEADER:
			//let index = state.map(d => d.header).indexOf( { leftButtonType: action.payload } );
			state.map( (d) => {
				d.header.leftButtonType = action.payload;
			});
			// return [
			// 	...state.slice(0, index),
			// 	Object.assign({}, state[index], action.payload),
			// 	...state.slice(index + 1)
			// ];
			return [...state];
		default:
			return state;
	}
}