import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isAuthenticated = ref(false)

  const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD

  const login = async (email, password) => {
    await new Promise(resolve => setTimeout(resolve, 1000))  

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      user.value = { email }
      isAuthenticated.value = true
      return true  
    }

    return false  
  }

  const logout = () => {
    user.value = null
    isAuthenticated.value = false
  }

  return {
    user,
    isAuthenticated,
    login,
    logout
  }
})
