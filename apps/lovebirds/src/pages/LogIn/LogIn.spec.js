import { describe, beforeEach, vi, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import LogIn from './LogIn.vue'

/* If either email or password are missing, clicking log in doesn't do anything
Otherwise, it takes user to the home page.
Clicking Create one here takes user to the sign-up page. 
Clicking log in causes any empty inputs to be highlighted
Entering something in those inputs causes the highlight to go away; emptying the inputs causes them to be highlighted again
*/

describe('log in page', () => {
    let router
    let mountOptions
    
    beforeEach(() => {
        router = {
            push: vi.fn()
        }

        mountOptions = {
            global: {
                plugins: [createTestingPinia({
                    createSpy: vi.fn
                })],
                mocks: {
                    $router: router
                }
            }
        }
    })

    test('if email and/or password are missing, clicking the log in button does not do anything; otherwise takes user to home page', async () => {
        const wrapper = mount(LogIn, mountOptions)

        const email = wrapper.find('[data-testid="email"]')
        const password = wrapper.find('[data-testid="password"]')

        expect(email.element.value).toBe('')
        expect(password.element.value).toBe('')

        const logInBtn = wrapper.find('[data-testid="logInBtn"]')
        await logInBtn.trigger('click')

        expect(router.push).not.toHaveBeenCalled()

        email.setValue('bigJoe@hotmail.com')
        await logInBtn.trigger('click')
        expect(router.push).not.toHaveBeenCalled()

        email.setValue('')
        password.setValue('123bigJoesGotToWee')
        await logInBtn.trigger('click')
        expect(router.push).not.toHaveBeenCalled()

        email.setValue('bigJoe@hotmail.com')
        password.setValue('123bigJoesGotToWee')
        await logInBtn.trigger('click')
        expect(router.push).toHaveBeenCalledWith({ name: 'home' })
    })

    test('clicking the link to create an account takes the user to the sign-up page', async () => {
        const wrapper = mount(LogIn, mountOptions)

        const signUpLink = wrapper.find('[data-testid="signUpLink"]')
        await signUpLink.trigger('click')
        expect(router.push).toHaveBeenCalledOnce()

        // TODO - figure out how to trigger the link that's between RouterLink tags
    })

    test('Clicking log in causes any empty inputs to be highlighted; entering text gets rid of highlight, emptying input highlights it again', async () => {
        const wrapper = mount(LogIn)

        const email = wrapper.find('[data-testid="email"]')
        const password = wrapper.find('[data-testid="password"]')
        const logInBtn = wrapper.find('[data-testid="logInBtn"]')

        await logInBtn.trigger('click')

        expect(email.classes()).toContain('redBorder')
        expect(password.classes()).toContain('redBorder')

        await email.setValue('absudoibdf')
        expect(email.classes()).not.toContain('redBorder')
        expect(password.classes()).toContain('redBorder')

        await email.setValue('')
        expect(email.classes()).toContain('redBorder')
        expect(password.classes()).toContain('redBorder')

        await password.setValue('absudoibdf')
        expect(email.classes()).toContain('redBorder')
        expect(password.classes()).not.toContain('redBorder')

        await password.setValue('')
        expect(email.classes()).toContain('redBorder')
        expect(password.classes()).toContain('redBorder')

        await email.setValue('absudoibdf')
        await password.setValue('absudoibdf')
        expect(email.classes()).not.toContain('redBorder')
        expect(password.classes()).not.toContain('redBorder')
    })
})