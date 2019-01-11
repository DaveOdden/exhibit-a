import { Action } from '@ngrx/store'
import { Tutorial } from '../../app.interfaces'
import * as TutorialActions from '../state.actions'

// Section 1
const initialState: Tutorial = {
	name: 'Initial Tutorial',
	url: 'http://google.com'
}

// Section 2
export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {

	// Section 3
	switch(action.type) {
		case TutorialActions.ADD_TUTORIAL:
			return [...state, action.payload];
		default:
			return state;
	}
}