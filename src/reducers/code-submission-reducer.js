
export default function manageCodEditor(state = {
  currentCode: "//Start writing code here!", partnerCode: "//Your partners code will appear on this side!", submittedCode: "", mode: "monokai", currentChallengeContent: "", currentChallengeAnswer: "",
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
        currentChallengeAnswer: action.payload.answer,
        currentChallengeSample: action.payload.sample
      })
    default:
      return state;
  }
};
