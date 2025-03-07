<template>
   <div class="  bg-white">
    <Navbar />
    <router-view />
  </div>
</template>


<script>
import Navbar from "../src/components/Navbar.vue"
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


