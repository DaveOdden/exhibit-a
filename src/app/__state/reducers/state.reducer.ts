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
		isOffTop: false,
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
		const returnSetAuthState: NgRxStore[] = _.cloneDeep(state);
		if (action.payload != null) {
				returnSetAuthState[0].auth = action.payload;
				return returnSetAuthState;
			} else {
				let auth = {
					id: '',
					name: '',
					email: '',
					image: '',
					token: '',
					idToken: '',
					provider: 'google'
				}
				returnSetAuthState[0].auth = auth;
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
			newObjectAA[0].header.title = action.payload;
			return newObjectAA;
		case StateActions.CHANGE_HEADER_ATTRIBUTES:
			const  newHeaderAtts: NgRxStore[] = _.cloneDeep(state);
			for( let keyName in action.payload ) {
				newHeaderAtts[0].header[keyName] = action.payload[keyName];
			}
			return newHeaderAtts;
		default:
			return state;
	}
}
