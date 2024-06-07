const initialState = {
  data: [],
  editFormData: {},
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_SUBMIT":
      return {
        ...state,
        data: action.payload,
      };
    case "USER_DELETE":
      const filterData = state.data.filter(
        (ele, index) => index !== action.payload
      );
      return {
        ...state,
        data: [...filterData],
      };

    case "USER_EDIT":
      return {
        ...state,
        editFormData: action.payload,
      };
    default:
      break;
  }
};

export default UserReducer;
