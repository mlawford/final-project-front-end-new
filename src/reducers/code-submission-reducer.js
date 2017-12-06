
export default function manageCodEditor(state = {
  currentCode: "//Start writing code here!", partnerCode: "//Your partners code will appear on this side!", submittedCode: "", mode: "monokai", currentChallengeContent: "//Hi! Welcome to Print, you can start by choosing a challenge to work on and if someone else joins, you can work on problems together! Down there is your code editor, you can change it to a color scheme that you like. On the right is where your partners code will appear. Good luck and thanks for using my app! \n \n -Matt Lawford, Flatiron School Grim Repos 2017", currentChallengeAnswer: "", currentChallengeSample: "", lobbies: [], challenges: [], currentUser: "",
}, action) {
  switch (action.type) {
    case 'UPDATE_CODE':
      return Object.assign({}, state, {
        currentCode: action.payload
      });
    case 'UPDATE_PARTNER_CODE':
      return Object.assign({}, state, {
        partnerCode: action.payload
      })
    case 'EVALUATE_CODE':
      return Object.assign({}, state, {
        submittedCode: action.payload
      })
    case 'CHANGE_CODE_MODE':
      return Object.assign({}, state, {
        mode: action.payload
      })
    case 'UPDATE_CHALLENGE':
      return Object.assign({}, state, {
        currentChallengeContent: action.payload.content,
        currentChallengeAnswer: action.payload.answer
      })
    case 'UPDATE_LOBBIES':
      return Object.assign({}, state, {
        lobbies: state.lobbies.concat([action.payload])
      })
    case 'STORE_CHALLENGES':
      return Object.assign({}, state, {
        challenges: action.payload
      })
    case 'UPDATE_USER':
      return Object.assign({}, state, {
        currentUser: action.payload
      })
    case 'ADD_SOCKET':
      const newLobby = state.lobbies.find(lobby => {
        return lobby.title === action.lobby
      })
      newLobby.participants.push(action.payload)
      let filteredLobbies = state.lobbies.filter(lobby => {
        lobby.title !== action.lobby
      })

      return Object.assign({}, state,{
        lobbies: filteredLobbies.concat(newLobby)
      })

    default:
      return state;
  }
};
