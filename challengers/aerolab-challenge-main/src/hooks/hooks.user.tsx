import React, {useContext} from "react";

import userContext, {Context} from "../context/users/user.context";

export function usePoints(): [Context["state"]["user"]["points"], Context["actions"]] {
  const {
    state: {user},
    actions: {addPoints},
  } = React.useContext(userContext);

  return [user.points, addPoints];
}

export function useUser(): Context["state"]["user"] {
  const {
    state: {user},
  } = React.useContext(userContext);

  return user;
}
