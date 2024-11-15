import HomePage from "./HomePage"
import { screen } from "@testing-library/react"
import { renderWithProviders } from "../../utils/test-utils"
import { MemoryRouter, Route, Routes } from "react-router-dom";

test("App should have correct initial render", () => {
    renderWithProviders(
        <MemoryRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </MemoryRouter>
    )
    
    // screen.debug()
    expect(screen).toMatchSnapshot()

    // The app should be rendered correctly
    expect(screen.getByText(/home page/i)).toBeInTheDocument()
    expect(screen.getByText(/sign up page/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveTextContent(/Show input and focus it/i)

    // Initial state: count should be 0, incrementValue should be 2
    //   expect(screen.getByLabelText("Count")).toHaveTextContent("0")
    //   expect(screen.getByLabelText("Set increment amount")).toHaveValue(2)
})