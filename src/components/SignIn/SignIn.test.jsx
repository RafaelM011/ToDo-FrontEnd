import { describe, test, expect, beforeAll, beforeEach, vi} from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'

import { SignIn } from "./SignIn"
import { BrowserRouter } from "react-router-dom"

describe("<SignIn/>", () => {
    beforeAll(() => {
        render(
            <BrowserRouter>
                <SignIn/>
            </BrowserRouter>
        )
    })

    test("The signin component is being rendered", () => {
        let element = screen.getByText("To-Do App")

        expect(element).toBeDefined()
    })

    test("The route is changing properly", async () => {
        let userInput = screen.getByPlaceholderText("username")
        let passwordInput = screen.getByPlaceholderText("password")
        let signInButton = screen.getByText("Sign In")

        await userEvent.type(userInput, "Rafael")
        await userEvent.type(passwordInput, "Rafael011")
        await userEvent.click(signInButton)


    })
})