import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
    }),
    actions: {
        async signUp(data) {
            const result = await axios.post('http://localhost:5173/api/user', data)

            this.user = result.data
            return this.user
        },
        logIn(data) {
            axios.post('http://localhost:5173/api/auth/log-in', data)
        }
    }
})
