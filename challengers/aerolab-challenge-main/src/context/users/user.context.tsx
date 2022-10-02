import React from "react";
import {Center, CircularProgress} from "@chakra-ui/react";

import {IUser} from "~/models";

import servicePerson from "@/services/service.person";

export interface Context {
  state: {
    user: IUser;
  };
  actions: {
    addPoints: (amount: number) => Promise<void>;
  };
}

const UserContext = React.createContext({} as Context);

const UserProvider: React.FC = ({children}) => {
  const [user, setUser] = React.useState<IUser>();
  const [status, setStatus] = React.useState<"pending" | "resolved" | "rejected">("pending");

  React.useEffect(() => {
    servicePerson.fetch().then((user: IUser) => {
      setUser(user);
      setStatus("resolved");
    });
  }, []);

  if (!user || status === "pending") {
    return (
      <Center padding={12}>
        <CircularProgress isIndeterminate color="primary.500" />
      </Center>
    );
  }

  async function handleAddPoints(amount: number) {
    if (!user) return;

    return servicePerson.points.add(amount).then(() => {
      setUser({...user, points: user.points + amount});
    });
  }

  const state: Context["state"] = {
    user,
  };
  const actions = {
    addPoints: handleAddPoints,
  };

  return <UserContext.Provider value={{state, actions}}>{children}</UserContext.Provider>;
};

export {UserContext as default, UserProvider as Provider};
