export const initialState = [];

export const textReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TEXT':
      return [...state, action.payload];
    case 'DELETE_TEXT':
      return state.filter((_, index) => index !== action.index);
    default:
      return state;
  }
};
