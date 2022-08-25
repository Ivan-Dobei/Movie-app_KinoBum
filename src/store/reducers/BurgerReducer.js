const initialState = {
   btnState: false
}

const GET_BTN_STATE = 'GET_BTN_STATE';

export const BurgerReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_BTN_STATE:
         return { ...state, btnState: !state.btnState }
      default:
         return state;
   }
}

export const getBtnStateAction = payload => ({ type: GET_BTN_STATE, payload })