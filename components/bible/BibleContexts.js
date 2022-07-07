import React, { useContext, useState, createContext } from "react";
import Reference from "biblejs/lib/reference";

const ReferenceContext = createContext(Reference);
const ReferenceUpdate = createContext(Reference);

export const useReferenceContext = () => useContext(ReferenceContext);
export const useReferenceUpdate = () => useContext(ReferenceUpdate);

const BibleContexts = ({ children }) => {
  const [currentReference, setReference] = useState(
    new Reference("Genesis 1:1")
  );
  return (
    <ReferenceContext.Provider value={currentReference}>
      <ReferenceUpdate.Provider value={setReference}>
        {children}
      </ReferenceUpdate.Provider>
    </ReferenceContext.Provider>
  );
};

export default BibleContexts;
