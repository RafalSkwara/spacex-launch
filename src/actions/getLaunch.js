import { GET_LAUNCH } from "action-types";

export const getLaunch = (launch) => ({ type: GET_LAUNCH, payload: launch });