<template>
  <div class="relative w-full min-h-screen bg-cover bg-center" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <!-- Top Section -->
    <div class="absolute inset-0 flex items-center px-10 ml-10">
      <div class="max-w-md flex flex-col items-start text-white">
        <h1 class="text-4xl font-bold mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting.
        </h1>
        <p class="text-sm mb-6 text-white/80">
          Our products are fully custom-made, built with the latest technologies and cloud-architectures.
        </p>
        <router-link
          to="#about"
          class="inline-flex items-center bg-white text-black px-6 py-3 rounded-full hover:bg-blue-50 transition"
        >
          Get Started
          <img :src="arrowrightImage" alt="Arrow Right" class="h-3 ml-2" />
        </router-link>
      </div>
    </div>
  </div>

  <!-- Navigation Bar -->
  <!-- <nav class="bg-white shadow-md p-4 fixed top-0 left-0 w-full z-50 flex justify-center space-x-6">
    <button @click="scrollToSection('about')" class="text-gray-700 hover:text-blue-500">About</button>
    <button @click="scrollToSection('services')" class="text-gray-700 hover:text-blue-500">Services</button>
    <button @click="scrollToSection('caseStudies')" class="text-gray-700 hover:text-blue-500">Case Studies</button>
    <button @click="scrollToSection('testimonials')" class="text-gray-700 hover:text-blue-500">Testimonials</button>
    <button @click="scrollToSection('contact')" class="text-gray-700 hover:text-blue-500">Contact Us</button> -->
  <!-- </nav> -->
  <nav class="bg-color text-white">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between h-16 items-center">
        <router-link to="/" class="text-2xl   text-white">Logo</router-link>
        <div class="flex space-x-8 items-center">
          <router-link to="/about" @click="scrollToSection('about')" class="text-white hover:text-blue-100">About</router-link>
          <router-link to="/services"  @click="scrollToSection('services')" class="text-white hover:text-blue-100">Services</router-link>
          <router-link to="/case-studies" @click="scrollToSection('caseStudies')" class="text-white hover:text-blue-100">Case Studies</router-link>
          <router-link to="/testimonials" @click="scrollToSection('testimonials')" class="text-white hover:text-blue-100">Testimonials</router-link>
          <router-link to="/contact" @click="scrollToSection('contact')" class="text-white hover:text-blue-100">Contact</router-link>
          <!-- v-if="!authStore.isAuthenticated" -->
          <!-- <template > -->
            <!-- <router-link to="/login" class="bg-white text-black px-6 py-2 rounded-md hover:bg-blue-50">Login</router-link> -->
          <!-- </template> -->
          <!-- <template v-else>
            <button @click="handleLogout" class="bg-white text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50">Logout</button>
          </template> -->
        </div>
      </div>
    </div>
  </nav>

  <!-- About Section -->
  <section id="about" class="  px-10 bg-white">
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
          <img :src="arrowrightImageblue" alt="Arrow Right" class="h-3 ml-2" />
          <img :src="arrowrightImageblue" alt="Arrow Right" class="h-3" />
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
  </section>

  <!-- Services Section -->
  <section id="services" class="  bg-white">
    <div class="relative flex justify-center items-center h-[90vh]  ">
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
            'bg-blue-200 text-black hover:bg-blue-500 hover:text-white': activeService.name !== service.name
          }"
        >
          {{ service.name }}
        </button>
      </div>
    </div>

    <div class="w-[40%] h-[90vh] grid grid-cols-2 relative">
      <div class="bg-white"></div>

      <div class="bg-blue-600"></div>

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
  </section>

  <!-- Case Studies Section -->
  <section id="caseStudies" class="py-20 ">
   <div class="relative flex flex-col items-center justify-center min-h-[90vh]">
    <img 
      :src="casestudies" 
      alt="Case Studies" 
      class="absolute top-[-114px] left-0 w-[80vw] max-w-[366px] h-[42vh]" 
    />

    <div class="flex flex-col items-center w-1/2 text-center">
      <h1 class="text-2xl font-bold text-black mb-4">Core Technologies</h1>
      <p class="text-gray-700 mb-6">
       Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
      </p>

      <div class="flex justify-center items-center rounded-full shadow-lg border-2 border-gray-200 p-4 w-[70%] mb-16 shadow-xl shadow-customShadow">
        <ul class="flex items-center justify-between w-full text-gray-600 font-medium">
          <li 
            @click="setCategory('Design')" 
            class="px-4 cursor-pointer transition relative"
            :class="{
              'text-blue-600': selectedCategory.name === 'Design',
              'hover:text-blue-500': selectedCategory.name !== 'Design'
            }"
          >
            Design
            <div v-if="selectedCategory.name === 'Design'" class="absolute inset-0  blur-md rounded-full"></div>
          </li>

          <div class="h-6 border-l-2 border-gray-400"></div> <!-- Vertical Line -->

          <li 
            @click="setCategory('Development')" 
            class="px-4 cursor-pointer transition relative"
            :class="{
              'text-blue-600': selectedCategory.name === 'Development',
              'hover:text-blue-500': selectedCategory.name !== 'Development'
            }"
          >
            Development
            <div v-if="selectedCategory.name === 'Development'" class="absolute inset-0  blur-md rounded-full"></div>
          </li>

          <div class="h-6 border-l-2 border-gray-400"></div> <!-- Vertical Line -->

          <li 
            @click="setCategory('Marketing')" 
            class="px-4 cursor-pointer transition relative"
            :class="{
              'text-blue-600': selectedCategory.name === 'Marketing',
              'hover:text-blue-500': selectedCategory.name !== 'Marketing'
            }"
          >
            Marketing
            <div v-if="selectedCategory.name === 'Marketing'" class="absolute inset-0  blur-md rounded-full"></div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Technology Icons Grid (Dynamic Based on Selected Category) -->
    <div v-if="selectedCategory" class="grid grid-cols-5 gap-2 w-1/2 justify-center">
      <div 
        v-for="tech in selectedCategory.technologies" 
        :key="tech.tech_name"
        class="w-24 h-24  border-2 border-customBlue flex items-center justify-center shadow-lg rounded-lg"
        
      >
        <img :src="tech.icon" class="w-16 h-10" />
      </div>
    </div>
  </div>
  </section>

  <!-- Testimonials Section -->
  <section id="testimonials" class="py-20  bg-white">
    <h2 class="text-3xl font-bold text-center text-blue-600">Testimonials</h2>
    <div class="flex justify-center space-x-6 mt-6">
      <div class="bg-gray-100 p-6 rounded-lg shadow-md w-1/3 text-center">
        <p class="text-gray-600 italic">"The team exceeded our expectations and delivered an amazing product!"</p>
        <h4 class="mt-4 font-bold">- John Doe, CEO</h4>
      </div>
      <div class="bg-gray-100 p-6 rounded-lg shadow-md w-1/3 text-center">
        <p class="text-gray-600 italic">"Their dedication and expertise helped us scale our business effectively."</p>
        <h4 class="mt-4 font-bold">- Sarah Smith, CTO</h4>
      </div>
    </div>
  </section>

  <!-- Contact Us Section -->
  <section id="contact" class="py-20 px-10 bg-gray-100">
    <h2 class="text-3xl font-bold text-center text-blue-600">Contact Us</h2>
    <form class="max-w-lg mx-auto mt-6 bg-white p-6 rounded-lg shadow-lg">
      <input type="text" placeholder="Your Name" class="w-full border p-2 rounded mb-4" />
      <input type="email" placeholder="Your Email" class="w-full border p-2 rounded mb-4" />
      <textarea placeholder="Your Message" class="w-full border p-2 rounded mb-4"></textarea>
      <button class="bg-blue-600 text-white px-6 py-2 rounded-full w-full hover:bg-blue-700">
        Send Message
      </button>
    </form>
  </section>

  <!-- Footer -->
  <footer class="py-10 px-10 bg-blue-600 text-white text-center">
    <p>&copy; 2022 Company Name. All Rights Reserved.</p>
  </footer>
</template>

<script>
import backgroundImage from "@/assets/homepagebackgroundimage.svg";  
import arrowrightImage from "@/assets/arrowdownsigntonavigate.svg"; 
import abouticon from "@/assets/abouticon.svg";
import tickMark from "@/assets/tickMark.svg";
import ourService from "@/assets/ourService.svg";
import aboutusimage from "@/assets/aboutus.svg";
// import abouticon from "@/assets/abouticon.svg";
import arrowrightImageblue from "@/assets/arrowdownsigntonavigateblue.svg";
import aboutussideImage from "@/assets/aboutussideImage.svg";
import aboutdownImage from "@/assets/aboutdownImage.svg";
import casestudies from "@/assets/casestudies.svg";
import react_icon from "@/assets/react_icon.svg";
import node_icon from "@/assets/node_icon.svg";
import aws_icon from "@/assets/Amazon_Web_Services_Logo_blue.svg";
import redux_logo from "@/assets/redux_logo.svg";
import jsImage from "@/assets/jsImage.svg";
export default {
  data() {
    return {
      backgroundImage,
      arrowrightImage,
      tickMark,
      aboutusimage,
      abouticon,
      arrowrightImageblue,
      aboutussideImage,
      aboutdownImage,
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
      casestudies,
      categories: [
        {
          name: "Design",
          technologies: [
            { tech_name: "Figma", icon: aws_icon },
            { tech_name: "Photoshop", icon: redux_logo },
            { tech_name: "React", icon: react_icon },
            { tech_name: "Node.js", icon: node_icon },
            { tech_name: "JavaScript", icon: jsImage }
          ]
        },
        {
          name: "Development",
          technologies: [
            { tech_name: "React", icon: react_icon },
            { tech_name: "Node.js", icon: node_icon },
            { tech_name: "JavaScript", icon: jsImage },
            { tech_name: "Figma", icon: aws_icon },
            { tech_name: "Photoshop", icon: redux_logo }
          ]
        },
        {
          name: "Marketing",
          technologies: [
            { tech_name: "SEO", icon: jsImage },
            { tech_name: "Google Ads", icon: aws_icon },
            { tech_name: "React", icon: react_icon },
            { tech_name: "Node.js", icon: node_icon },
            { tech_name: "JavaScript", icon: jsImage }
          ]
        }
      ],
      selectedCategory: null  
    };
  },
  created() {
    this.selectedCategory = this.categories[0];  
  },
  methods: {
    scrollToSection(id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    },
    setCategory(categoryName) {
      this.selectedCategory = this.categories.find(cat => cat.name === categoryName);
    }
  },
  

};
</script>
