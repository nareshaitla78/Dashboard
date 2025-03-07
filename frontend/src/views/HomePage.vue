<template>
  <div class="relative w-full h-[90vh] bg-cover bg-center" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <!-- Overlay for better readability -->
    <div class="absolute inset-0   flex items-center px-10 ml-10">
      <div class="max-w-md flex flex-col items-start text-white">
        <h1 class="text-4xl font-bold mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting.
        </h1>
        <p class="text-sm mb-6 text-white/80">
          Our products are fully custom-made, built with the latest technologies and cloud-architectures.
        </p>
        <router-link
          to="/contact"
          class="inline-block bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition"
        >
          Get Started »
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import backgroundImage from "@/assets/homepagebackgroundimage.svg"; // Ensure correct path

export default {
  data() {
    return {
      backgroundImage,
    };
  },
};
</script>
