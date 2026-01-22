import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface NameContextType {
  nome: string;
  setNome: (nome: string) => void;
}

const NameContext = createContext<NameContextType | undefined>(undefined);

export function NameProvider({ children }: { children: ReactNode }) {
  const [nome, setNome] = useState<string>("");

  return (
    <NameContext.Provider value={{ nome, setNome }}>
      {children}
    </NameContext.Provider>
  );
}

export function useName() {
  const context = useContext(NameContext);
  if (context === undefined) {
    throw new Error("useName must be used within a NameProvider");
  }
  return context;
}
