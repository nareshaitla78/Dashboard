<template>
  <div class="relative w-full min-h-screen bg-cover bg-center " :style="{ backgroundImage: `url(${backgroundImage})` }">
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
          to="/about"
          class="inline-flex items-center bg-white text-black px-6 py-3 rounded-full hover:bg-blue-50 transition"
        >
          Get Started
          <img :src="arrowrightImage" alt="Arrow Right" class="h-3 ml-2" />
          <img :src="arrowrightImage" alt="Arrow Right" class="h-3" />
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
          <!-- <router-link to="/" @click="scrollToSection('testimonials')" class="text-white hover:text-blue-100">Testimonials</router-link> -->
          <router-link to="/contact" @click="scrollToSection('contact')" class="text-white hover:text-blue-100">Contact</router-link>
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
          class="absolute top-15  right-0 w-[30vw] max-w-[160px] h-[25vh]"
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
          class="absolute bottom-5 right-0 w-[30vw] max-w-[160px] h-[24vh]"
        />
      </div>
    </div>
  </div>
  </section>

  <section id="services" class="  bg-white">
    <div class="relative flex justify-center items-center h-[90vh]  ">
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

          <div class="h-6 border-l-2 border-gray-400"></div>  

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

          <div class="h-6 border-l-2 border-gray-400"></div>  

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



  <!-- Contact Us Section -->
  <section id="contact" class="py-20 px-10 bg-white">
    <div class="w-full h-[100vh] flex bg-cover bg-center" :style="{ backgroundImage: `url(${backgroundImagecontact})` }">
    <div class="w-1/2 relative flex flex-col items-center justify-center bg-white">
      <img 
        :src="contactus" 
        class="w-24 h-24 mb-10"
      />
      <div>
        <img :src="PersonImage" class="w-full h-[70%] object-cover" />
      </div>
    </div>

    <div class="w-1/2 flex items-center justify-center px-10">
      <div class="w-[75%] bg-white/30 backdrop-blur-md p-8 rounded-lg shadow-lg">
        <h1 class="text-2xl font-bold text-blue-600 mb-6">Send Us a Message</h1>
        <form @submit.prevent="handleClick" class="flex flex-col space-y-4">
          <input v-model="formData.email" type="email" placeholder="Your Email" class="w-full p-3 border rounded-md" required />
          <input v-model="formData.name" type="text" placeholder="Your Name" class="w-full p-3 border rounded-md" required />
          <input v-model="formData.phone" type="tel" placeholder="Your Phone Number" class="w-full p-3 border rounded-md" required />
          <input v-model="formData.subject" type="text" placeholder="Subject" class="w-full p-3 border rounded-md" required />
          <textarea v-model="formData.message" placeholder="Your Message" class="w-full p-3 border rounded-md resize-none h-24" ></textarea>

          <div class="flex items-center space-x-2">
            <input v-model="formData.agreed" type="checkbox" id="privacy" class="w-4 h-4 cursor-pointer" required />
            <label for="privacy" class="text-gray-600 text-sm">
              By sending this message, you confirm that you have read and agreed to our privacy policy.
            </label>
          </div>

          <button
            type="submit"
            class="w-40 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition border-2 border-blue-600 mt-4"
          >
            Get Started 
            <img :src="getstarted" alt="Arrow Right" class="h-3 ml-2 inline-block" />
            <img :src="getstarted" alt="Arrow Right" class="h-3  inline-block" />
          </button>
        </form>
      </div>
    </div>
  </div>
  </section>

  <!-- Footer -->
  <footer class="bg-CustomDarkBule text-white py-10">
    <div class="max-w-7xl mx-auto px-6 flex justify-between">
      <div class="w-1/4">
        <p>Lorem Finaldream rure dolor in reprehenderit in voluptate velit esse cillum dolore e uis nostrud exercitation isi ut aliquip ex ea commodo consequat.</p>
        <div class="flex items-start space-x-2 mt-4">
          <img :src="facebook" alt="facebook" class=" w-6 h-6 cursor-pointer" />
          <img :src="twitter" alt="twitter" class=" w-6 h-6 cursor-pointer" />
          <img :src="instagram" alt="instagram" class=" w-6 h-6 cursor-pointer" />

        </div>
      </div>

      <div class="w-1/4">
        <h2 class="text-xl font-semibold mb-4">Our Services</h2>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-blue-400">Web Development</a></li>
          <li><a href="#" class="hover:text-blue-400">Mobile Development</a></li>
          <li><a href="#" class="hover:text-blue-400">UI/UX Design</a></li>
          <li><a href="#" class="hover:text-blue-400">Branding</a></li>
        </ul>
      </div>
      <div class="w-1/4">
        <h2 class="text-xl font-semibold mb-4">Our Links</h2>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-blue-400">Terms & Condition  </a></li>
          <li><a href="#" class="hover:text-blue-400"> Privacy Policy</a></li>
          <li><a href="#" class="hover:text-blue-400">Imprint</a></li>
          <li><a href="#" class="hover:text-blue-400">Legal</a></li>
        </ul>
      </div>

      <div class="w-1/4">
        <h2 class="text-xl font-semibold mb-4">Contact</h2>
        <ul class="space-y-2">
            <li   class="flex items-start space-x-2">
              <img :src="location" alt="Location" class="w-5 h-5 mt-1" />
              <span class="text-black/90 text-white">Al. Dummyodl 124/23 floor 123 Banswara Street, 02-577 India.</span>
            </li>
            <li   class="flex items-start space-x-2">
              <img :src="phone" alt="Phone" class="w-5 h-5 mt-1" />
              <span class="text-black/90 text-white">00 1800 245 453</span>
            </li>
            <li   class="flex items-start space-x-2">
              <img :src="email" alt="Email" class="w-5 h-5 mt-1" />
              <span class="text-black/90 text-white">nareshaitla1122@gmail.com</span>
            </li>
          </ul>
      </div>
    </div>
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
import contactus from "@/assets/contactus.svg";
import PersonImage from "@/assets/PersonImage.svg";
import getstarted from "@/assets/getstarted.svg";
import backgroundImagecontact from "@/assets/backgroundImagecontact.svg";
import location from "@/assets/location.svg";
import email from "@/assets/email.svg";
import phone from "@/assets/phone.svg"
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from  "../assets/instagram.svg"
export default {
  data() {
    return {
      formData: {
        email: "",
        name: "",
        phone: "",
        subject: "",
        message: "",
        agreed: false,
      },
      facebook,
      instagram,
      twitter,
      location,
      email,
      phone,
      backgroundImage,
      contactus,
      PersonImage,
      getstarted,
      backgroundImagecontact,
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
    handleClick() {
      if (!this.formData.agreed) {
        alert("You must agree to the privacy policy before submitting.");
        return;
      }

      console.log("Form submitted:", this.formData);
      alert("Form Submitted Successfully!");
      
      this.formData = {
        email: "",
        name: "",
        phone: "",
        subject: "",
        message: "",
        agreed: false
      };
    },
    scrollToSection(id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    },
    setCategory(categoryName) {
      this.selectedCategory = this.categories.find(cat => cat.name === categoryName);
    }
  },
  

};
</script>
