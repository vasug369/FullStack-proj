import React, { createContext, useContext, useReducer } from "react";

// Create the context
export const StateContext = createContext();

// Build a provider component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Custom hook to use the context
export const useStateValue = () => useContext(StateContext);
