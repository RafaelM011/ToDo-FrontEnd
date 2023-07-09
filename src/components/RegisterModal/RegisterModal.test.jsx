import { describe, test, expect, beforeAll, beforeEach} from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event';

import { RegisterModal } from "./RegisterModal"
import { BrowserRouter } from "react-router-dom";

describe("<RegisterModal/>", () => {
    beforeAll(() => {
        render(
            <BrowserRouter>
                <RegisterModal />
            </BrowserRouter>
        )
    })

    beforeEach(async () => {
        let userInputElement = screen.getByPlaceholderText('username')
        let emailInputElement = screen.getByPlaceholderText('email@domain.com')
        let passwordInputElement = screen.getByPlaceholderText('password')
        let repPasswordInputElement = screen.getByPlaceholderText('repeat password')
    
        await userEvent.clear(userInputElement)
        await userEvent.clear(emailInputElement)
        await userEvent.clear(passwordInputElement)
        await userEvent.clear(repPasswordInputElement)
    })

    test("The register modal is rendering", () => {
        let element = screen.getByText("Register")
        expect(element).toBeDefined();
    })

    test("The register form email input is being validated", async () => {
        let userInputElement = screen.getByPlaceholderText('username')
        let emailInputElement = screen.getByPlaceholderText('email@domain.com')
        let passwordInputElement = screen.getByPlaceholderText('password')
        let repPasswordInputElement = screen.getByPlaceholderText('repeat password')
        let registerButton = screen.getByText("Create new account")
    
        await userEvent.clear(userInputElement, "Rafael")
        await userEvent.type(emailInputElement, "Rafael@gmail")
        await userEvent.type(passwordInputElement, "Rafael011")
        await userEvent.type(repPasswordInputElement, "Rafael011")

        await userEvent.click(registerButton)
        
        expect(screen.queryByText("Email is incorrect")).toBeDefined();
        
        await userEvent.clear(emailInputElement)
        await userEvent.type(emailInputElement, "Rafael@gmail.com")
        
        await userEvent.click(registerButton)
        
        expect(screen.queryByText("Email is incorrect")).toBeNull();
    })

    test("The register form password input is being validated", async () => {
        let userInputElement = screen.getByPlaceholderText('username')
        let emailInputElement = screen.getByPlaceholderText('email@domain.com')
        let passwordInputElement = screen.getByPlaceholderText('password')
        let repPasswordInputElement = screen.getByPlaceholderText('repeat password')
        let registerButton = screen.getByText("Create new account")
    
        await userEvent.type(userInputElement, "Rafael")
        await userEvent.type(emailInputElement, "Rafael@gmail.com")
        await userEvent.type(passwordInputElement, "Rafael")
        await userEvent.type(repPasswordInputElement, "Rafael")

        await userEvent.click(registerButton)

        expect(screen.getByText("Password doesn't match the criteria")).toBeDefined();

        await userEvent.clear(passwordInputElement)
        await userEvent.type(passwordInputElement, "Rafael011")

        await userEvent.click(registerButton)

        expect(screen.queryByText("Password doesn't match the criteria")).toBeNull();
    })

    test("The register form repeat password input is being validated", async () => {
        let userInputElement = screen.getByPlaceholderText('username')
        let emailInputElement = screen.getByPlaceholderText('email@domain.com')
        let passwordInputElement = screen.getByPlaceholderText('password')
        let repPasswordInputElement = screen.getByPlaceholderText('repeat password')
        let registerButton = screen.getByText("Create new account")
    
        await userEvent.type(userInputElement, "Rafael")
        await userEvent.type(emailInputElement, "Rafael@gmail.com")
        await userEvent.type(passwordInputElement, "Rafael011")
        await userEvent.type(repPasswordInputElement, "Rafael012")

        await userEvent.click(registerButton)

        expect(screen.getByText("Passwords are not equal")).toBeDefined();

        await userEvent.clear(repPasswordInputElement)
        await userEvent.type(repPasswordInputElement, "Rafael011")

        await userEvent.click(registerButton)

        expect(screen.queryByText("Passwords are not equal")).toBeNull();
    })
})