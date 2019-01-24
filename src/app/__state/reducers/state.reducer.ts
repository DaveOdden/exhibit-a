import { Action } from '@ngrx/store';
import { NgRxStore } from '../../app.interfaces';
import { SocialUser } from 'angular-6-social-login';
import * as StateActions from '../state.actions';
import * as _ from 'lodash';

const storeObj: NgRxStore = {
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
		leftButtonType: 'menu',
		title: 'Exhibit-A'
	},
	other: {
		name: 'Initial Tutorial',
		url: 'http://google.com'
	}
};

export function reducer(state: NgRxStore[] = [storeObj], action: StateActions.Actions) {
	switch (action.type) {
		case StateActions.SET_AUTH:
			if (action.payload != null) {
				const returnSetAuthState: NgRxStore[] = _.cloneDeep(state);
				console.log(action.payload);
				returnSetAuthState[0].auth = action.payload;
				return returnSetAuthState;
			}
			break;
		case StateActions.ADD_TUTORIAL:
			return [...state, action.payload];
		case StateActions.CHANGE_HEADER_BUTTON_TYPE:
			const  newObj: NgRxStore[] = _.cloneDeep(state);
			newObj[0].header.leftButtonType = action.payload;
			return newObj;
		case StateActions.CHANGE_HEADER_TITLE:
			const  newObjectAA: NgRxStore[] = _.cloneDeep(state);
			console.log('funnel through reducer');
			console.log(newObjectAA);
			newObjectAA[0].header.title = action.payload;
			return newObjectAA;
		default:
			return state;
	}
}
