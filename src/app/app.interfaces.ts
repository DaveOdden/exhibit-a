import { SocialUser } from 'angular-6-social-login';


export interface AppState {
  readonly appState: ngRxStore[];
}

export interface ngRxStore {
	auth: SocialUser;
	header: HeaderState;
	other: nameUrl
}

	// export interface SocialUser {
	// 	id: number;
	// 	name: string;
	// 	email: string;
	// 	image: string;
	// 	token: string;
	// 	idToken: string;
	// 	provider: string;
	// }

		export interface HeaderState {
			leftButtonType: string;
		}

		export interface nameUrl {
			name: string;
			url: string;
		}