import { Action } from '@ngrx/store'
import { ngRxStore } from '../../app.interfaces'
import { SocialUser } from 'angular-6-social-login';
import * as StateActions from '../state.actions'
import * as _ from "lodash";

const storeObj: ngRxStore = {
	auth: {
		id: '',
		name: '',
		email: '',
		image: '',
		token: '',
		idToken: '',
		provider: 'google'
	},
	header: {
		leftButtonType: "menu"
	},
	other: {
		name: 'Initial Tutorial',
		url: 'http://google.com'
	}
}

export function reducer(state: ngRxStore[] = [storeObj], action: StateActions.Actions) {
	console.log( action );
	switch(action.type) {
		case StateActions.SET_AUTH:
			if(action.payload != null) {
				let returnSetAuthState: ngRxStore[] = _.cloneDeep(state);
				returnSetAuthState[0].auth = action.payload;
				return returnSetAuthState;
			}
		case StateActions.ADD_TUTORIAL:
			return [...state, action.payload];
		case StateActions.CHANGE_HEADER:
			let newObj: ngRxStore[] = _.cloneDeep(state);
			newObj[0].header.leftButtonType = action.payload;
			return newObj;
		default:
			return state;
	}
}