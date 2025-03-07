<template>
  <div class="relative flex overflow-hidden">
    <div class="relative w-1/2 h-[90vh]">
      <img :src="aboutusimage" alt="About Us" class="w-full h-full object-cover" />
    </div>

    <div class="relative w-1/2 p-10 flex flex-col justify-between">
      <div class="relative">
        <img 
          :src="aboutussideImage" 
          alt="About Icon" 
          class="absolute top-15 right-[-65px] w-[30vw] max-w-[160px] h-[25vh]"
        />
      </div>

      <div class="mt-24">  
        <div class="flex items-start">
          <img :src="abouticon" alt="About Icon" class="w-6 h-6" />
          <h2 class="text-blue-500 font-bold ml-2">ABOUT US</h2>
        </div>
        <h1 class="text-black font-bold text-2xl mb-4">Great Digital Agency</h1>
        <p class="mb-4 w-[31vw] text-xl text-black">
          Our products are fully custom-made, built with the latest technologies and cloud-architectures.
        </p>
        <p class="w-[31vw]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex odio, turpis accumsan congue. 
          Quisque blandit dui Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
          In convallis porta mauris non aliquam.
        </p>

        <router-link
          to="/contact"
          class="inline-flex items-center text-blue-500 px-6 py-2 rounded-full hover:bg-blue-50 transition border-2 border-blue-500 mt-4"
        >
          Get Started 
          <img :src="arrowrightImage" alt="Arrow Right" class="h-3 ml-2" />
          <img :src="arrowrightImage" alt="Arrow Right" class="h-3" />
        </router-link>
      </div>

      <div class="relative">
        <img 
          :src="aboutdownImage" 
          alt="Down Arrow" 
          class="absolute bottom-5 right-[-95px] w-[30vw] max-w-[160px] h-[24vh]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import aboutusimage from "@/assets/aboutus.svg";
import abouticon from "@/assets/abouticon.svg";
import arrowrightImage from "@/assets/arrowdownsigntonavigateblue.svg";
import aboutussideImage from "@/assets/aboutussideImage.svg";
import aboutdownImage from "@/assets/aboutdownImage.svg";

export default {
  data() {
    return {
      aboutusimage,
      abouticon,
      arrowrightImage,
      aboutussideImage,
      aboutdownImage,
    };
  }
};
</script>
