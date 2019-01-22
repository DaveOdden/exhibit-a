import { User } from '../../models/user';
import { AuthActionTypes, All } from '../auth.actions';

export interface State {
  isAuthenticated: boolean;
  user: User | null;
  errorMessage: string | null;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case AuthActionTypes.LOGIN_FAILURE: {
      console.log('LOGIN_FAILURE');
      const ret = {
        ...state,
        errorMessage: 'Incorrect email and/or password.'
      };
      console.log(ret);
      return ret;
    }
    case AuthActionTypes.LOGIN_SUCCESS: {
      console.log('LOGIN_SUCCESS');
      return {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload.token,
          email: action.payload.email
        },
        errorMessage: null
      };
    }
    case AuthActionTypes.SIGNUP_SUCCESS: {
      console.log('SIGNUP_SUCCESS');
      return {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload.token,
          email: action.payload.email
        },
        errorMessage: null
      };
    }
    case AuthActionTypes.SIGNUP_FAILURE: {
      console.log('SIGNUP_FAILURE');
      return {
        ...state,
        errorMessage: 'That email is already in use.'
      };
    }
    case AuthActionTypes.LOGOUT: {
      return initialState;
    }
    default: {
      console.log('Default');
      return state;
    }
  }
}
