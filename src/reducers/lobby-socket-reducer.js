
export default function manageLobbySockets(state = {
  lobbies: [{name: "", participants: []}]
}, action) {
  switch (action.type) {
    case 'ADD_LOBBY':
      return Object.assign({}, state, {
        lobbies: state.lobbies.push(action.payload)
      });
    default:
      return state;
  }
};
