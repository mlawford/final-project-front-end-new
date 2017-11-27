
export default function manageCodEditor(state = {
  currentCode: "//Start writing code here!", partnerCode: "//Your partners code will appear on this side!", submittedCode: ""
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
    default:
      return state;
  }
};
