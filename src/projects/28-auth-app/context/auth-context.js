import React, { useContext } from "react";

export const AuthContext = React.createContext({
  status: null,
  login: () => {},
  logout: () => {},
});
