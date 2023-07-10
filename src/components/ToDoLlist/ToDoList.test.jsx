import { describe, test, expect, beforeAll} from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'

import { ToDoList } from "./ToDolist"

const mockTodos = [
    {
        status: "Completed",
        description: "Nothing"
    },
    {
        status: "Pending",
        description: "All"
    },
]

describe("<ToDoList/>", () => {
    beforeAll(() => {
        render(<ToDoList todos={mockTodos}/>)
    })
    
    test("The todo list is being rendered", () => {
        let element = screen.getByText("To-Do List")
        expect(element).toBeDefined();
    })
})