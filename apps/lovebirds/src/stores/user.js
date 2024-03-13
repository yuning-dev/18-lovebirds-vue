import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
    }),
    actions: {
        signUp(data) {
            axios.post('http://localhost:5173/api/user', data)
        },
        logIn(data) {
            axios.post('http://localhost:5173/api/auth/log-in', data)
        }
    }
})
