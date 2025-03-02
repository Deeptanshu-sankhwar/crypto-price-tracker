import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../../components/SearchBar";
import "@testing-library/jest-dom";

describe("SearchBar", () => {
  it("renders search input correctly", () => {
    render(<SearchBar setSearchTerm={jest.fn()} />);
    expect(screen.getByPlaceholderText(/Search cryptocurrency.../i)).toBeInTheDocument();
  });

  it("calls setSearchTerm on user input", () => {
    const mockSetSearchTerm = jest.fn();
    render(<SearchBar setSearchTerm={mockSetSearchTerm} />);

    const searchInput = screen.getByPlaceholderText(/Search cryptocurrency.../i);
    fireEvent.change(searchInput, { target: { value: "Bitcoin" } });

    expect(mockSetSearchTerm).toHaveBeenCalledWith("Bitcoin");
  });
});
