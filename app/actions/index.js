export const LOGIN = "LOGIN";
export const EXAMPLE = "EXAMPLE";

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

/*
 * action creators
 */

export function userLoggedInSucessfully(user) {
  return { type: LOGIN, user };
}

export function exampleFunctionOfApp(ex) {
  return { type: EXAMPLE, ex };
}
