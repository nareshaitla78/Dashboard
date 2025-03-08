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
          <input type="email" placeholder="Your Email" class="w-full p-3 border rounded-md" />
          <input type="text" placeholder="Your Name" class="w-full p-3 border rounded-md" />
          <input type="tel" placeholder="Your Phone Number" class="w-full p-3 border rounded-md" />
          <input type="text" placeholder="Subject" class="w-full p-3 border rounded-md" />
          <textarea placeholder="Your Message" class="w-full p-3 border rounded-md resize-none h-24"></textarea>

          <div class="flex items-center space-x-2">
            <input type="checkbox" id="privacy" class="w-4 h-4" />
            <label for="privacy" class="text-gray-600 text-sm">
              By sending this message, you confirm that you have read and agreed to our 
              <a href="#" class="text-blue-500 underline">privacy policy</a>.
            </label>
          </div>

          <button
            type="submit"
            class="w-40 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition border-2 border-blue-600 mt-4"
          >
            Get Started 
            <img :src="getstarted" alt="Arrow Right" class="h-3 ml-2 inline-block" />
            <img :src="getstarted" alt="Arrow Right" class="h-3 inline-block" />
          </button>
        </form>
      </div>
    </div>
  </div>

  <footer class="bg-CustomDarkBule text-white py-10">
    <div class="max-w-7xl mx-auto px-6 flex justify-between">
      <div class="w-1/3">
        <h2 class="text-xl font-semibold mb-4">Our Address</h2>
        <p>123 Tech Street, Hyderabad, India</p>
        <p>Email: info@example.com</p>
        <p>Phone: +91 98765 43210</p>
      </div>

      <div class="w-1/3">
        <h2 class="text-xl font-semibold mb-4">Our Services</h2>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-blue-400">Web Development</a></li>
          <li><a href="#" class="hover:text-blue-400">Mobile Development</a></li>
          <li><a href="#" class="hover:text-blue-400">UI/UX Design</a></li>
          <li><a href="#" class="hover:text-blue-400">Branding</a></li>
        </ul>
      </div>

      <div class="w-1/3">
        <h2 class="text-xl font-semibold mb-4">Contact</h2>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-blue-400">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-blue-400">Terms & Conditions</a></li>
          <li><a href="#" class="hover:text-blue-400">Support</a></li>
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

export default {
  data() {
    return {
      contactus,
      PersonImage,
      getstarted,
      backgroundImage
    };
  },
  methods: {
    handleClick() {
      alert("Message Sent");
    }
  }
};
</script>
