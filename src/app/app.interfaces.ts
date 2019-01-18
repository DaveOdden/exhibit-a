export interface AppState {
  readonly appState: ngRxStore[];
}

export interface ngRxStore {
	header: HeaderState;
	other: nameUrl
}

export interface HeaderState {
	leftButtonType: string;
}

export interface nameUrl {
	name: string;
	url: string;
}