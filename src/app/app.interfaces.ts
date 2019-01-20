import { SocialUser } from 'angular-6-social-login';
import * as auth from './__state/reducers/auth.reducer';

export const reducers = {
	auth: auth.reducer
};

export interface AppState {
	readonly appState: NgRxStore[];
}

export interface NgRxStore {
	auth: SocialUser;
	header: HeaderState;
	other: NameUrl;
}

export interface HeaderState {
	leftButtonType: string;
}

export interface NameUrl {
	name: string;
	url: string;
}
