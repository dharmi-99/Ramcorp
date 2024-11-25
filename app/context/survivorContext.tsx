"use client"
import React, { createContext, useState, ReactNode, FC, useContext, useEffect,  } from "react";

// Survivor type (adjust according to your data structure)
interface Survivor {
  id: number;
  name: string;
  infected: boolean;
}

// Define the context type
interface SurvivorContextType {
  survivors: Survivor[];
  addSurvivor: (survivor: Survivor) => void;
}

// Create the context, initialized with undefined
const SurvivorContext = createContext<SurvivorContextType | undefined>(undefined);

// SurvivorProvider component
export const SurvivorProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [survivors, setSurvivors] = useState<Survivor[]>([]);
  // useEffect(() => {
  //   console.log("Initializing survivors...");
  //   const initialSurvivors = [
  //     { id: 1, name: "Alice", infected: false },
  //     { id: 2, name: "Bob", infected: true },
  //   ];
  //   setSurvivors(initialSurvivors); // Set initial survivors after mount
  // }, []);
  const addSurvivor = (survivor: Survivor) => {
    setSurvivors((prev) => [...prev, survivor]);
  };
 
  return (
    <SurvivorContext.Provider value={{ survivors, addSurvivor }}>
      {children}
    </SurvivorContext.Provider>
  );
};

// Custom hook to safely use the SurvivorContext
export const useSurvivorContext = (): SurvivorContextType => {
  const context = useContext(SurvivorContext);
  if (!context) {
    throw new Error("useSurvivorContext must be used within a SurvivorProvider");
  }
  return context;
};
