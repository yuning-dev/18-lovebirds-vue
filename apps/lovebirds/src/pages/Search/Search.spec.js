import { describe, beforeEach, vi, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Search from './Search.vue'

/* when either sex and/or age information are not provided, clicking submit 
button 
- doesn't take the user to another page
- displays an error message
- highlights the fields from which the info is missing

    when the required information is provided, the error message goes away
and clicking the submit button takes the user to the profile page

*/

describe('search page', () => {
    let router
    let mountOptions

    beforeEach(() => {
        router = {
            push: vi.fn()
        }

        mountOptions = {
            global: {
                mocks: {
                    $router: router
                }
            }
        }
    })

    test('it does not go to another url when required information is missing and the submit button is clicked', async () => {
        const wrapper = mount(Search, mountOptions)

        const sexSelect = wrapper.find('[data-testid="sexSelect"]')
        expect(sexSelect.element.value).toBeFalsy()

        const ageCheckbox = wrapper.findAll('[data-testid="ageCheckbox"]')
        for (let i = 0; i < ageCheckbox.length; i++) {
            expect(ageCheckbox[i].element.checked).toBeFalsy()
        }

        const submitBtn = wrapper.find('[data-testid="submitBtn"]')
        await submitBtn.trigger('click')
        expect(router.push).not.toHaveBeenCalled()

        await ageCheckbox[0].trigger('click')
        expect(ageCheckbox[0].element.checked).toBeTruthy()
        await submitBtn.trigger('click')
        expect(router.push).not.toHaveBeenCalled()

        await ageCheckbox[0].trigger('click')
        expect(ageCheckbox[0].element.checked).toBeFalsy()
        await sexSelect.setValue('Female')
        expect(sexSelect.element.value).toEqual('Female')
        await submitBtn.trigger('click')
        expect(router.push).not.toHaveBeenCalled()
    })
    test('an error message displays when required information is missing and the submit button is clicked', async () => {
        const wrapper = mount(Search)

        const sexSelect = wrapper.find('[data-testid="sexSelect"]')
        const ageCheckbox = wrapper.findAll('[data-testid="ageCheckbox"]')
        const submitBtn = wrapper.find('[data-testid="submitBtn"]')

        await submitBtn.trigger('click')
        expect(wrapper.text()).includes('Please provide the required information')

        await ageCheckbox[0].trigger('click')
        expect(ageCheckbox[0].element.checked).toBeTruthy()
        expect(wrapper.text()).includes('Please provide the required information')

        await ageCheckbox[0].trigger('click')
        expect(ageCheckbox[0].element.checked).toBeFalsy()
        await sexSelect.setValue('Female')
        expect(sexSelect.element.value).toEqual('Female')
        expect(wrapper.text()).includes('Please provide the required information')
    }),
    test('it highlights the inputs where information is missing when the submit button is clicked', async () => {
        const wrapper = mount(Search, {
            attachToDocument: true
        })

        const submitBtn = wrapper.find('[data-testid="submitBtn"]')
        const sexSelect = wrapper.find('[data-testid="sexSelect"]')
        // await submitBtn.trigger('click')
        // expect(sexSelect).toBe(document.activeElement)
        // TODO - find out how to check if the select is in focus

        const ageRedBox = wrapper.find('[data-testid="ageRedBox"]')
        expect(ageRedBox.classes()).not.toContain('missingAge')
        await submitBtn.trigger('click')
        expect(ageRedBox.classes()).toContain('missingAge')
    }),
    test('when all required info is provided, clicking submit takes user to the profile page', async () => {
        const wrapper = mount(Search, mountOptions)

        const sexSelect = wrapper.find('[data-testid="sexSelect"]')
        const ageCheckbox = wrapper.findAll('[data-testid="ageCheckbox"]')
        const submitBtn = wrapper.find('[data-testid="submitBtn"]')
        await sexSelect.setValue('Female')
        await ageCheckbox[0].trigger('click')
        await submitBtn.trigger('click')

        expect(router.push).toHaveBeenCalledOnce()

        // TODO - fix test
    })
})