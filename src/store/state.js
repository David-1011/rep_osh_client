export const getDefaultState = () => {
  return {
    status: '',
    validation: {
      injuredValid1: 0,
      injuredValid2: 0,
      witnessValid1: 0,
      datetimeValid1: 0,
      mainAreaValid: 0,
      subAreaValid: 0,
      descriptionValid: 0,
      spotsValid: 0,
      typesValid: 0,
    },
  };
};

export const state = getDefaultState();
