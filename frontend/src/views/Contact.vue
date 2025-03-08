<template>
  <div class="w-full h-[100vh] flex bg-cover bg-center" :style="{ backgroundImage: `url(${backgroundImage})` }">
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
import contactus from "@/assets/contactus.svg";
import PersonImage from "@/assets/PersonImage.svg";
import getstarted from "@/assets/getstarted.svg";
import backgroundImage from "@/assets/backgroundImagecontact.svg";
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
      contactus,
      facebook,
      instagram,
      twitter,
      location,
      email,
      phone,
      PersonImage,
      getstarted,
      backgroundImage
    };
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
    }
  }
};
</script>
