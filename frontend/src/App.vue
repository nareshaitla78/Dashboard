<template>
   <div class="min-h-screen  bg-white">
    <Navbar />
    <router-view />
  </div>
</template>


<script>
import Navbar from "../src/components/Navbar.vue"
// import router from "../src/router/index.js"
export default {
  components: {
    Navbar,  
  },
  data() {
    return {
      message: "Tailwind CSS with Vue 3 Options API!",
    };
  },
};
</script>


