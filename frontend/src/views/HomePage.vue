<template>
  <div class="relative w-full min-h-screen bg-cover bg-center" :style="{ backgroundImage: `url(${backgroundImage})` }">
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
        class="inline-flex items-center bg-white text-black px-6 py-3 rounded-full hover:bg-blue-50 transition"
        >
        Get Started 
        <img :src="arrowrightImage" alt="Arrow Right" class="h-3 ml-2" />
        <img :src="arrowrightImage" alt="Arrow Right" class="h-3 " />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import backgroundImage from "@/assets/homepagebackgroundimage.svg";  
import arrowrightImage from "@/assets/arrowdownsigntonavigate.svg"; 
export default {
  data() {
    return {
      backgroundImage,
        arrowrightImage,
    };
  },
};
</script>
