const initialState = {
  input: "",
  result: 0,
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT":
      return {
        ...state,
        input: state.input + action.value,
      };
    case "EQUAL":
      return {
        ...state,
        result: eval(state.input),
        input: "",
      };
    case "CLEAR":
      return {
        ...state,
        input: "",
        result: 0,
      };
    default:
      return state;
  }
};

export default calculatorReducer;
