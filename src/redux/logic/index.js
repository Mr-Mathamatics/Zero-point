import { createLogic } from "redux-logic";
import { push } from "react-router-redux";
export const redirectToLogic = createLogic({
    type: "REDIRECT_TO",
    async process(data, dispatch, done) {
      const action = data.action;
      dispatch(push(action.payload.path));
      done();
    },
  });
  
  export const AllLogics = [
    redirectToLogic,
  ];