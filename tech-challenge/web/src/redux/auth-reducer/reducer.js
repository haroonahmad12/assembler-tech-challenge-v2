import * as AuthTypes from "./types";

export const AuthInitialState = {
  isSigningUp: false,
  signUpError: null,
  isSigningOut: false,
  signOutError: null,
  isAuthenticated: false,
  isSendingPasswordReset: false,
  passwordResetError: null,
  passwordResetSent: false,
  currentUser: {
    email: null,
    uid: null,
  },
  imageList: [],
  isLoadingImageList: false,
};

const AuthReducer = (state = AuthInitialState, action) => {
  switch (action.type) {
    case AuthTypes.SIGN_UP_REQUEST: {
      return {
        ...state,
        isSigningUp: true,
        signUpError: null,
      };
    }
    case AuthTypes.SIGN_UP_ERROR: {
      return {
        ...state,
        isSigningUp: false,
        signUpError: action.payload,
      };
    }
    case AuthTypes.SIGN_UP_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        isSigningUp: false,
        signUpError: null,
        currentUser: {
          email: action.payload.email,
          id: action.payload._id,
        },
      };
    }
    case AuthTypes.SIGN_OUT_REQUEST: {
      return {
        ...state,
        isSigningOut: true,
        signOutError: null,
      };
    }
    case AuthTypes.SIGN_OUT_ERROR: {
      return {
        ...state,
        isSigningOut: false,
        signOutError: action.payload,
      };
    }
    case AuthTypes.SIGN_OUT_SUCCESS: {
      return {
        ...state,
        isSigningOut: false,
        signOutError: null,
        isAuthenticated: false,
        currentUser: {
          email: null,
        },
      };
    }
    case AuthTypes.SEND_PASSWORD_RESET_EMAIL_REQUEST: {
      return {
        ...state,
        isSendingPasswordReset: true,
        passwordResetError: null,
        passwordResetSent: false,
      };
    }
    case AuthTypes.SEND_PASSWORD_RESET_EMAIL_ERROR: {
      return {
        ...state,
        isSendingPasswordReset: false,
        passwordResetError: action.payload,
        passwordResetSent: false,
      };
    }
    case AuthTypes.SEND_PASSWORD_RESET_EMAIL_SUCCESS: {
      return {
        ...state,
        isSendingPasswordReset: false,
        passwordResetError: null,
        passwordResetSent: true,
      };
    }
    case AuthTypes.RESET_AUTH_STATE: {
      return {
        ...state,
        isSigningUp: false,
        signUpError: null,
        isSigningOut: false,
        signOutError: null,
        isSendingPasswordReset: false,
        passwordResetError: null,
        passwordResetSent: false,
      };
    }
    case AuthTypes.UPDATE_IMAGES_ARRAY: {
      return {
        ...state,
        imageList: [...action.payload],
      };
    }

    case AuthTypes.LOADING_IMAGE_LIST: {
      return {
        ...state,
        isLoadingImageList: action.payload,
      };
    }

    case AuthTypes.ADD_IMAGE: {
      return {
        ...state,
        imageList: [...state.imageList, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};

export default AuthReducer;
