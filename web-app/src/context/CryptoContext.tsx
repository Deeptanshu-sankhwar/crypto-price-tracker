import { createContext, useContext, ReactNode } from "react";
import { useCryptoData } from "@/hooks/useCryptoData";
import { CryptoContextType } from "@/types";

const cryptos = ["litecoin", "chainlink", "polygon", "cosmos", "stellar"];

const CryptoContext = createContext<CryptoContextType | undefined>(undefined);

// Provider Component
export function CryptoProvider({ children }: { children: ReactNode }) {
  const { data, loading, error, refresh } = useCryptoData(cryptos);

  return (
    <CryptoContext.Provider value={{ data, loading, error, refresh }}>
      {children}
    </CryptoContext.Provider>
  );
}

// Custom Hook to Access Context
export function useCrypto() {
  const context = useContext(CryptoContext);
  if (!context) {
    throw new Error("useCrypto must be used within a CryptoProvider");
  }
  return context;
}
