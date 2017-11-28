
export const updateCode = (code) => {
  return {
    type: 'UPDATE_CODE',
    payload: code
  };
};


export const updatePartnerCode = (code) => {
  return {
    type: 'UPDATE_PARTNER_CODE',
    payload: code
  };
};

export const updateEvaluatedCode = (code) => {
  return {
    type: 'EVALUATE_CODE',
    payload: code
  };
};

export const changeCodeMode = (language) => {
  return {
    type: 'CHANGE_CODE_MODE',
    payload: language
  };
};

export const updateCodeChallenge = (challenge) => {
  return {
    type: 'UPDATE_CHALLENGE',
    payload: challenge
  };
};
