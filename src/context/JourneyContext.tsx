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
  currentJourney: Journey;
  bookedSeatCount: number; // New property for booked seat count
  updateBookedSeatCount: (count: number) => void;
  updateCurrentJourney: (journey: Journey | null) => void;
}

const JourneyContext = createContext<JourneyContextType | undefined>(undefined);
export function JourneyContextProvider({ children }: { children: ReactNode }) {
  const [journeyData, setJourneyData] = useState<Journey[]>([]);
  const [currentJourney, setCurrentJourney] = useState<Journey | null>(null);
  const [bookedSeatCount, setBookedSeatCount] = useState(0);

  const updateBookedSeatCount = (count: number) => {
    setBookedSeatCount(count);
  };
  const updateCurrentJourney = (journey: Journey | null) => {
    setCurrentJourney(journey);
  };

  return (
    <JourneyContext.Provider
      value={{
        journeyData,
        currentJourney,
        setJourneyData,
        bookedSeatCount,
        updateBookedSeatCount,
        updateCurrentJourney,
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
