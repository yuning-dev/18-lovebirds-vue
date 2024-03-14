import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
        id: null
    }),
    actions: {
        async signUp(data) {
            const result = await axios.post('http://localhost:5173/api/user', data)

            this.user = result.data
            return this.user
        },
        async logIn(data) {
            const result = await axios.post('http://localhost:5173/api/auth/log-in', data)

            if (result.status >= 400) {
                return undefined
            }

            this.id = result.data.id
            return this.id
        }
    }
})
