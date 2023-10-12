"use client";
import React, { createContext, useContext, ReactNode, useState } from "react";

interface Journey {
  id: number;
  from: string;
  to: string;
  date: string;
  time: string;
  emptySeatCount: number;
  price: number;
}

interface JourneyContextType {
  journeyData: Journey[];
  bookedSeatCount: number; // New property for booked seat count
  updateBookedSeatCount: (count: number) => void;
}

const JourneyContext = createContext<JourneyContextType | undefined>(undefined);
export function JourneyContextProvider({ children }: { children: ReactNode }) {
  const [journeyData, setJourneyData] = useState<Journey[]>([]);
  const [bookedSeatCount, setBookedSeatCount] = useState(0);

  const updateBookedSeatCount = (count: number) => {
    setBookedSeatCount(count);
  };

  return (
    <JourneyContext.Provider
      value={{
        journeyData,
        setJourneyData,
        bookedSeatCount,
        updateBookedSeatCount,
      }}
    >
      {children}
    </JourneyContext.Provider>
  );
}
export function useJourneyContext() {
  const context = useContext(JourneyContext);
  if (!context) {
    throw new Error(
      "useJourneyContext must be used within a JourneyContextProvider"
    );
  }
  return context;
}
