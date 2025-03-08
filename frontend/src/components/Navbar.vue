
<template>
  <nav class="bg-color text-white fixed top-0 left-0 w-full  shadow-md z-[10]">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between h-16 items-center">
        <router-link to="/" class="text-2xl   text-white">Logo</router-link>
        <div class="flex space-x-8 items-center">
          <router-link to="/about" class="text-white hover:text-blue-100">About</router-link>
          <router-link to="/services" class="text-white hover:text-blue-100">Services</router-link>
          <router-link to="/case-studies" class="text-white hover:text-blue-100">Case Studies</router-link>
          <router-link to="/testimonials" class="text-white hover:text-blue-100">Testimonials</router-link>
          <router-link to="/contact" class="text-white hover:text-blue-100">Contact</router-link>
          <!-- v-if="!authStore.isAuthenticated" -->
          <!-- <template > -->
            <router-link to="/login" class="bg-white text-black px-6 py-2 rounded-md hover:bg-blue-50">Login</router-link>
          <!-- </template> -->
          <!-- <template v-else>
            <button @click="handleLogout" class="bg-white text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50">Logout</button>
          </template> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

// const authStore = useAuthStore()
// const router = useRouter()

// const handleLogout = () => {
//   authStore.logout()
//   router.push('/login')
// }
</script>

<style scoped>
.bg-color {
  background-color: #0E77FF;
}
</style>