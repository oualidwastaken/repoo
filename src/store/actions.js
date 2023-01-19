export const input = (value) => {
  return {
    type: "INPUT",
    value,
  };
};

export const equal = () => {
  return {
    type: "EQUAL",
  };
};

export const clear = () => {
  return {
    type: "CLEAR",
  };
};
