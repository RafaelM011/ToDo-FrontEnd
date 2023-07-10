import { describe, test, expect, beforeAll, beforeEach, vi} from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'

import { ProfileBar } from "./ProfileBar"
import { BrowserRouter } from "react-router-dom"

const mockUser = {
    name: "Rafael",
    todos: [
        {
            state: "completed",
            description: "Brush my teeth"
        },
        {
            state: "pending",
            description: "Hack sister's wifi"
        },
        {
            state: "completed",
            description: "Visit grandma"
        }
    ]
}

const mockFn = vi.fn()

describe("<ProfileBar/>", () => {
    beforeAll(() => {
        render(
            <BrowserRouter>
                <ProfileBar username={mockUser.name} todos={mockUser.todos} todoStatusFilter="Pending" setTodoStatusFilter={mockFn}/>
            </BrowserRouter>
        )
    }) 
    
    test("ProfileBar component is being rendered", () => {
        expect(screen.getByText(mockUser.name))
    })

    test("Todo status toogle", async () => {
        let toggleButton = screen.getByRole("toggle-button")

        await userEvent.click(toggleButton);
        expect(mockFn.mock.calls.length).toBe(1)
    })

    test("Sign out option is working", async () => {
        let signOutButton = screen.getByText("Sign Out");
        await userEvent.click(signOutButton);
    })
})