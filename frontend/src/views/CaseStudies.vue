<template>
  <div class="relative flex flex-col items-center justify-center min-h-[90vh]">
    <img 
      :src="casestudies" 
      alt="Case Studies" 
      class="absolute top-[-50px] left-0 w-[80vw] max-w-[366px] h-[42vh]" 
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
        class="w-24 h-24 p-4 border-2 border-customBlue flex items-center justify-center shadow-lg rounded-lg"
      >
        <img :src="tech.icon" class="w-16 h-10" />
      </div>
    </div>
  </div>
</template>

<script>
import casestudies from "@/assets/casestudies.svg";
import react_icon from "@/assets/react_icon.svg";
import node_icon from "@/assets/node_icon.svg";
import aws_icon from "@/assets/Amazon_Web_Services_Logo_blue.svg";
import redux_logo from "@/assets/redux_logo.svg";
import jsImage from "@/assets/jsImage.svg";

export default {
  data() {
    return {
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
    setCategory(categoryName) {
      this.selectedCategory = this.categories.find(cat => cat.name === categoryName);
    }
  }
};
</script>
