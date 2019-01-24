import { SocialUser } from 'angular-6-social-login';
import * as auth from './__state/reducers/auth.reducer';
import { createFeatureSelector } from '@ngrx/store';

export const reducers = {
	auth: auth.reducer
};

export interface AppState {
	readonly appState: NgRxStore[];
}

export interface SimpleAuthState {
  authState: auth.State;
}

export interface NgRxStore {
	auth: SocialUser;
	header: HeaderState;
	other: NameUrl;
}

export interface HeaderState {
	leftButtonType: string;
	title: string;
}

export interface NameUrl {
	name: string;
	url: string;
}

export class User {
  id?: string;
  email?: string;
  password?: string;
  token?: string;
}

export const selectAuthState = createFeatureSelector<SimpleAuthState>('auth');
