import { render, screen } from "@testing-library/react";
import CryptoCard from "../../components/CryptoCard";
import { CryptoData } from "@/types";
import "@testing-library/jest-dom";

const mockCrypto: CryptoData = {
  name: "Litecoin",
  symbol: "LTC",
  priceUsd: "85.2",
  changePercent24Hr: "-2.5",
};

describe("CryptoCard", () => {
  it("renders cryptocurrency details correctly", () => {
    render(<CryptoCard crypto={mockCrypto} />);

    expect(screen.getByText(/Litecoin/i)).toBeInTheDocument();
    expect(screen.getByText(/LTC/i)).toBeInTheDocument();
    expect(screen.getByText(/\$85.20/i)).toBeInTheDocument();
    expect(screen.getByText(/-2.50%/i)).toBeInTheDocument();
  });

  it("displays positive percentage change in green", () => {
    render(
      <CryptoCard crypto={{ ...mockCrypto, changePercent24Hr: "3.5" }} />
    );

    expect(screen.getByText(/3.50%/i)).toHaveClass("text-green-400");
  });

  it("displays negative percentage change in red", () => {
    render(
      <CryptoCard crypto={{ ...mockCrypto, changePercent24Hr: "-2.5" }} />
    );

    expect(screen.getByText(/-2.50%/i)).toHaveClass("text-red-400");
  });
});
