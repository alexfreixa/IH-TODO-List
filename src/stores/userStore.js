import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchActualUser, createNewUser, logIn, logOut } from '@/api/userApi'

export const useUserStore = defineStore('user', () => {
  // State
  const user = ref(undefined)
  const errorLogin = ref('');
  // Getters

  // Actions
  async function fetchUser() {
    try {
      user.value = await fetchActualUser()
    } catch (error) {
      if (error.code === '401') {
        user.value = null
        return
      }
    }
  }
  
  async function signUp(email, password) {
    try {
      await createNewUser(email, password)
    } catch (error) {
      console.error(error)
    }
  }

  async function signIn(email, password) {
    try {
      user.value = await logIn(email, password)      
    } catch (error) {
      console.error(error);
      errorLogin.value = 'User or password incorrect.';
    }
  }

  async function signOut() {
    try {
      user.value = await logOut()
    } catch (error) {
      console.error(error)
    }
  }

  function resetErrorLogin() {
    errorLogin.value = '';
  }

  return {
    // State
    user,
    errorLogin,
    // Getters
    // Actions
    resetErrorLogin,
    fetchUser,
    signIn,
    signUp,
    signOut,
  }
})
