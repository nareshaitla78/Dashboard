<template>
  <div class="relative flex justify-center items-center h-[90vh] p-10">
    <!-- Left Side: Service Selection -->
    <div class="w-[40%] flex flex-col items-start space-y-4">
      <div class="flex items-start">
        <img :src="abouticon" alt="Service" class="w-6 h-6" />
        <h2 class="text-blue-500 font-bold ml-2">OUR SERVICES</h2>
      </div>
      <h1 class="text-black font-bold text-2xl mb-4">Transforming Your Ideas into Reality</h1>

      <div class="flex flex-wrap gap-2 w-[25vw]">
        <button
          v-for="service in services"
          :key="service.name"
          @click="activeService = service"
          class="px-4 py-2 rounded-full transition"
          :class="{
            'bg-blue-600 text-white': activeService.name === service.name,
            'bg-CustomLightBlue text-CustomDarkBule hover:bg-blue-500 hover:text-white font-semi-bold': activeService.name !== service.name
          }"
        >
          {{ service.name }}
        </button>
      </div>
    </div>

    <!-- Right Side: Split Background with Centered Transparent Card -->
    <div class="w-[40%] h-[90vh] grid grid-cols-2 relative">
      <!-- Left Half: White Background -->
      <div class="bg-white"></div>

      <!-- Right Half: Blue Background -->
      <div class="bg-blue-600"></div>

      <!-- Centered Transparent Card -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-[80%] bg-white/30 backdrop-blur-xs p-6 rounded-lg shadow-lg h-[50vh]">
          <div class="flex items-center space-x-3 mb-4">
            <img :src="activeService.icon" alt="Service Icon" class="w-8 h-8" />
            <h1 class="text-xl font-bold text-black">{{ activeService.name }}</h1>
          </div>
          <p class="text-black/90 mb-4">{{ activeService.description }}</p>

          <ul class="space-y-2">
            <li v-for="point in activeService.points" :key="point" class="flex items-start space-x-2">
              <img :src="tickMark" alt="Tick" class="w-5 h-5 mt-1" />
              <span class="text-black/90">{{ point }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import abouticon from "@/assets/abouticon.svg";
import tickMark from "@/assets/tickMark.svg";
import ourService from "@/assets/ourService.svg";

export default {
  data() {
    return {
      tickMark,
      abouticon,
      activeService: {
        name: "UI/UX Designing",
        icon: ourService,
        description:
          "We create user-friendly interfaces and experiences that enhance customer engagement and usability.",
        points: ["Wireframing", "Prototyping", "User Testing"],
      },
      services: [
        {
          name: "Web Development",
          icon: ourService,
          description:
            "We build high-performance web applications with modern frameworks and technologies.",
          points: ["Frontend Development", "Backend Development", "Full-stack Solutions"],
        },
        {
          name: "Mobile Development",
          icon: ourService,
          description:
            "We develop cross-platform and native mobile applications with an excellent user experience.",
          points: ["iOS & Android", "React Native & Flutter", "App Store Optimization"],
        },
        {
          name: "UI/UX Designing",
          icon: ourService,
          description:
            "We create user-friendly interfaces and experiences that enhance customer engagement and usability.",
          points: ["Wireframing", "Prototyping", "User Testing"],
        },
        {
          name: "Branding",
          icon: ourService,
          description:
            "We help brands build a strong identity with creative designs, logos, and marketing strategies.",
          points: ["Logo Design", "Brand Identity", "Marketing Collaterals"],
        },
        {
          name: "Cloud Technology",
          icon: ourService,
          description:
            "We offer cloud computing solutions to enhance scalability, security, and efficiency.",
          points: ["AWS & Azure", "Cloud Migration", "Serverless Architecture"],
        },
      ],
    };
  },
};
</script>
