import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "../../components/Sidebar";
import "@testing-library/jest-dom";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    pathname: "/",
  })),
}));

describe("Sidebar", () => {
  it("renders sidebar links correctly", () => {
    render(<Sidebar activePath="/" />);

    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Market Trends/i)).toBeInTheDocument();
  });

  it("highlights the active link", () => {
    render(<Sidebar activePath="/market-trends" />);

    const marketTrendsLink = screen.getByText(/Market Trends/i);
    expect(marketTrendsLink.closest("a")).toHaveClass("bg-gray-700 text-white");
  });

  it("opens and closes sidebar on mobile", () => {
    render(<Sidebar activePath="/" />);

    // Open sidebar
    const openButton = screen.getByRole("button");
    fireEvent.click(openButton);
    expect(screen.getByText(/CryptoTracker/i)).toBeInTheDocument();

    // Close sidebar
    fireEvent.click(openButton);
    expect(screen.getByText(/CryptoTracker/i)).toBeInTheDocument();
  });
});
