import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import DashboardGrid from "../../components/DashboardGrid";
import { CryptoProvider } from "@/context/CryptoContext";
import "@testing-library/jest-dom";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          data: {
            id: "litecoin",
            name: "Litecoin",
            symbol: "LTC",
            priceUsd: "85.2",
            changePercent24Hr: "-2.5",
          },
        }),
    })
  ) as jest.Mock;
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("DashboardGrid", () => {
  it("renders correctly", () => {
    render(
      <CryptoProvider>
        <DashboardGrid searchTerm="" />
      </CryptoProvider>
    );

    expect(screen.getByText(/Refresh Prices/i)).toBeInTheDocument();
  });

  it("updates search results", async () => {
    render(
      <CryptoProvider>
        <DashboardGrid searchTerm="Litecoin" />
      </CryptoProvider>
    );

    await waitFor(() => expect(screen.getByText(/Litecoin/i)).toBeInTheDocument());
  });

  it("calls refresh function on button click", async () => {
    render(
      <CryptoProvider>
        <DashboardGrid searchTerm="" />
      </CryptoProvider>
    );

    const refreshButton = screen.getByText(/Refresh Prices/i);
    fireEvent.click(refreshButton);

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(10));
  });
});
