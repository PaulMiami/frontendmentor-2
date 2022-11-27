"use client";

import React, { useContext, useReducer } from "react";

export type ACTIONS =
  | { type: "ADD"; payload: { filter: string } }
  | { type: "REMOVE"; payload: { filter: string } }
  | { type: "CLEAR" };

export const FilterReducer = (state: string[], action: ACTIONS) => {
  switch (action.type) {
    case "ADD":
      if (state.includes(action.payload.filter)) {
        return state;
      }
      return [...state, action.payload.filter];
    case "REMOVE":
      return state.filter((f: string) => f !== action.payload.filter);
    case "CLEAR":
      return [];
    default:
      return state;
  }
};

const FilterContext = React.createContext<{
  filters: string[];
  dispatch: React.Dispatch<ACTIONS>;
}>({
  filters: [],
  dispatch: () => undefined,
});

export function UseFilters() {
  return useContext(FilterContext);
}

export default function FilterContextProvider({
  children,
}: React.PropsWithChildren) {
  const [filters, dispatch] = useReducer(FilterReducer, []);

  return (
    <FilterContext.Provider value={{ filters, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
}
