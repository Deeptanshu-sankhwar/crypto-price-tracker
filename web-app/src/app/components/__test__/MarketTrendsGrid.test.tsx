import { render, screen, fireEvent } from "@testing-library/react";
import MarketTrendsGrid from "../../components/MarketTrendsGrid";
import { CryptoProvider } from "@/context/CryptoContext";

describe("MarketTrendsGrid", () => {
  it("renders correctly", () => {
    render(
      <CryptoProvider>
        <MarketTrendsGrid />
      </CryptoProvider>
    );

    expect(screen.getByText(/Price Trends/i)).toBeInTheDocument();
  });

  it("switches timeframes", () => {
    render(
      <CryptoProvider>
        <MarketTrendsGrid />
      </CryptoProvider>
    );

    const dailyButton = screen.getByText(/Daily/i);
    fireEvent.click(dailyButton);
  });

  it("switches cryptocurrencies", () => {
    render(
      <CryptoProvider>
        <MarketTrendsGrid />
      </CryptoProvider>
    );

    const polygonButton = screen.getByText(/Polygon/i);
    fireEvent.click(polygonButton);
  });
});
