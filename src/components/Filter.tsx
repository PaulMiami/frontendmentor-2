"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { UseFilters } from "src/contexts/FilterContext";

export default function Filter() {
  const context = UseFilters();

  const deletefilter = (filter: string) => {
    context.dispatch({ type: "REMOVE", payload: { filter } });
  };

  const onClear = () => {
    context.dispatch({ type: "CLEAR" });
  };

  return (
    <AnimatePresence>
      {context.filters.length > 0 && (
        <motion.div
          initial={{ scale: 0, y: "50%" }}
          animate={{ scale: 1, y: "-50%" }}
          exit={{ scale: 0, y: "-50%" }}
          className="flex flex-1 bg-white rounded-md mx-5 shadow-xl shadow-darkGrayishCyan -translate-y-2/4"
        >
          <ul className="flex flex-3">
            <div className="flex flex-1 flex-wrap mt-4 ml-4">
              {context.filters.map((f) => (
                <li
                  key={f}
                  className="flex mb-4 mr-4 pl-2 bg-lightGrayishCyan text-desaturatedDarkCyan font-bold rounded-md"
                >
                  <div className="pr-2 pt-1">{f}</div>
                  <button
                    className="hover:bg-black bg-desaturatedDarkCyan rounded-r-md"
                    onClick={() => deletefilter(f)}
                  >
                    <img className="p-2" src="/images/icon-remove.svg"></img>
                  </button>
                </li>
              ))}
            </div>
          </ul>
          <div className="flex flex-1 justify-end items-center mr-4  font-bold">
            <button
              onClick={onClear}
              className="text-darkGrayishCyan hover:text-desaturatedDarkCyan hover:underline"
            >
              Clear
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
