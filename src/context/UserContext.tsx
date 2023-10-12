"use client";
import React, { createContext, useContext, ReactNode, useState } from "react";

interface UserContextType {
  user: {
    email: string;
    name: string;
    surname: string;
    gender: number;
  } | null;
  login: (email: string, name: string, surname: string, gender: number) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserContextType["user"] | null>(null);

  const login = (email: string, name: string, surname: string, gender: number) => {
    setUser({ email, name, surname, gender });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
}
