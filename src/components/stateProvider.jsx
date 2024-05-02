import React, { createContext, useContext, useReducer, useRender } from "react";

//prepares the data layer
export const StateContext = createContext();

// wrap our app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull info from the data layer
export const UseStatevalue = () => useContext(StateContext);
