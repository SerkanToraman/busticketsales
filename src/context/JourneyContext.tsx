"use client";
import React, { createContext, useContext, ReactNode, useState } from "react";

interface Journey {
  id: number;
  from: string;
  to: string;
  date: string;
  time: string;
  emptySeatCount:number;
  price:number;
}

interface JourneyContextType {
  journeyData: Journey[];
}

const JourneyContext = createContext<JourneyContextType | undefined>(undefined);
export function JourneyContextProvider({ children }: { children: ReactNode }) {
  const [journeyData, setJourneyData] = useState<Journey[]>([]);

  return (
    <JourneyContext.Provider value={{ journeyData }}>
      {children}
    </JourneyContext.Provider>
  );
}
export function useJourneyContext() {
  const context = useContext(JourneyContext);
  if (!context) {
    throw new Error("useJourneyContext must be used within a JourneyContextProvider");
  }
  return context;
}
