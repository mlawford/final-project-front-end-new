
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

export const addSocketToLobby = (socket,lobbyName) => {
  return {
    type: 'ADD_SOCKET',
    payload: socket,
    lobby: lobbyName
  };
};

export const getLobbies = (lobby) => {
  return {
    type: 'UPDATE_LOBBIES',
    payload: lobby
  };
};

export const pushSocket = (socket,lobbyName) => {
  return {
    type: 'ADD_SOCKET',
    payload: socket,
    lobby: lobbyName
  };
};

export const storeChallenges = (challenges) => {
  return {
    type: 'STORE_CHALLENGES',
    payload: challenges,
  };
};

export const updateUser = (user) => {
  return {
    type: 'UPDATE_USER',
    payload: user,
  };
};

export const passChallenge = (pass) => {
  return {
    type: 'PASS_CHALLENGE',
    payload: pass,
  };
};
