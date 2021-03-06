import { Action } from '@ngrx/store';
import { NgRxStore } from '../../app.interfaces';
import { SocialUser } from 'angular-6-social-login';
import { StateActionTypes, StateActions, LogIn } from '../state.actions';
import * as _ from 'lodash';

const authInitialState = {
	id: '',
	name: '',
	email: '',
	image: '',
	token: '',
	idToken: '',
	provider: 'google'
};

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
		title: 'Exhibit-A',
		hideButtons: false
	},
	other: {
		name: 'Initial Tutorial',
		url: 'http://google.com'
	}
};

export function reducer(state: NgRxStore[] = [storeObj], action: StateActions) {
	switch (action.type) {
		case StateActionTypes.LOGIN:
			console.log('3. LOGIN Reducer');
			return state;
		case StateActionTypes.LOGOUT:
			const returnLogOut: NgRxStore[] = _.cloneDeep(state);
			returnLogOut[0].auth = authInitialState;
			return returnLogOut;
		case StateActionTypes.LOGIN_SUCCESS:
			const returnLoginSuccessState: NgRxStore[] = _.cloneDeep(state);
			if (action.payload != null) {
				returnLoginSuccessState[0].auth = action.payload;
				console.log(returnLoginSuccessState);
				return returnLoginSuccessState;
			} else {
				let auth = authInitialState;
				returnLoginSuccessState[0].auth = auth;
				return returnLoginSuccessState;
			}
		case StateActionTypes.SET_AUTH:
			const returnSetAuthState: NgRxStore[] = _.cloneDeep(state);
			if (action.payload != null) {
				returnSetAuthState[0].auth = action.payload;
				return returnSetAuthState;
			} else {
				let auth = authInitialState;
				returnSetAuthState[0].auth = auth;
				return returnSetAuthState;
			}
		case StateActionTypes.CHANGE_HEADER_BUTTON_TYPE:
			const  newObj: NgRxStore[] = _.cloneDeep(state);
			newObj[0].header.leftButtonType = action.payload;
			return newObj;
		case StateActionTypes.CHANGE_HEADER_TITLE:
			const  newObjectAA: NgRxStore[] = _.cloneDeep(state);
			newObjectAA[0].header.title = action.payload;
			return newObjectAA;
		case StateActionTypes.CHANGE_HEADER_ATTRIBUTES:
			const  newHeaderAtts: NgRxStore[] = _.cloneDeep(state);
			for( let keyName in action.payload ) {
				newHeaderAtts[0].header[keyName] = action.payload[keyName];
			}
			return newHeaderAtts;
		default:
			return state;
	}
}
