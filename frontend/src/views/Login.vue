<template>
  <div class="min-h-screen bg-gray-50 flex w-full overflow-hidden">
    <div class="relative w-1/2 h-[90vh]">
      <img :src="aboutusimage" alt="About Us" class="w-full h-full object-cover" />
    </div>

    <div class="flex-1 flex items-center justify-center p-8 w-1/2">
      <div class="w-full max-w-md">
        <h1 class="text-2xl font-bold text-gray-900 mb-8">Login to Access Dashboard</h1>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
              Email<span class="text-red-500">*</span>
            </label>
            <input
              id="email"
              v-model="email"
              type="email"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <div class="flex justify-between items-center mb-1">
              <label for="password" class="block text-sm font-medium text-gray-700">
                Password<span class="text-red-500">*</span>
              </label>
              <a href="#" class="text-sm text-red-500 hover:text-red-600">Forget Password?</a>
            </div>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>

          <div v-if="error" class="text-red-500 text-sm text-center">{{ error }}</div>

          <!-- Login Button -->
          <button
            type="submit"
            :disabled="loading"
            class="w-30   text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-full   transition border-2 border-blue-500 flex items-center justify-center"
          >
            <span v-if="loading">Logging in...</span>
            <span v-else class="inline-flex items-center">
              Login 
              <img :src="arrowrightImage" alt="Arrow Right" class="h-3 ml-2" />
              <img :src="arrowrightImage" alt="Arrow Right" class="h-3" />
            </span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import aboutusimage from "../assets/aboutus.svg";
import arrowrightImage from "../assets/arrowdownsigntonavigateblue.svg";
import { useAuthStore } from "../stores/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      loading: false,  
      aboutusimage,
      arrowrightImage,
      authstore: useAuthStore(),
    };
  },
  methods: {
    async handleSubmit() {
      console.log("login");

      if (!this.email || !this.password) {
        this.error = "Please fill in all fields";
        return;
      }

      this.loading = true;
      this.error = "";

      try {
        const success = await this.authstore.login(email.value, password.value)

        if (success) {
          this.$router.push("/dashboard");  
        } else {
          this.error = "Invalid credentials";
        }
      } catch (e) {
        this.error = "An error occurred";
        console.log(e,"error........");
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
