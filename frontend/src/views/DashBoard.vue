<template>
  <div class="h-screen w-full bg-white ">
    <aside class="fixed left-0 top-0 h-screen w-32 bg-white border-r border-gray-200 flex flex-col items-center py-4 justify-center">
      <div class="space-y-2">
        <router-link to="/dashboard" class="text-blue-600">
        </router-link>
        <div class="space-y-8 text-gray-400">
          <div class="p-4 hover:text-blue-600 transition-colors shadow-md border border-gray-200 rounded-md flex flex-col items-center">
          <img :src="metrics" alt="metrics" class="w-6 h-6" />
          <span class="text-xs text-blue-600">Dashboard</span>
           
          </div>
          <div class="p-2 hover:text-blue-600 transition-colors flex flex-col items-center">
            <img :src="analytics" alt="metrics" class="w-6 h-6" />
          <span class="text-xs">Analytics</span>


          </div>
          <div class="p-2 hover:text-blue-600 transition-colors flex flex-col items-center">
            <img :src="currencyexchange" alt="metrics" class="w-6 h-6" />
          <span class="text-xs">Trading</span>
          </div>
          <div class="p-2 hover:text-blue-600 transition-colors flex flex-col items-center">
            <img :src="notification" alt="metrics" class="w-6 h-6" />
          <span class="text-xs">Notifications</span>
          </div>
        </div>
      </div>
      <button @click="logout" class="mt-auto p-2 text-gray-400 hover:text-blue-600 transition-colors">
        <img :src="logoutImage" alt="logout" class="w-6 h-6" />
      </button>
    </aside>

    <main class="ml-32 p-4 ">
      <div class="flex justify-between items-center mb-8 mt-12 ml-6">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
          
          <p class="text-customHeading">Welcome back, Aitla Naresh </p>
        </div>
        <div class="flex items-center space-x-4">
          <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            + Add Unit
          </button>
          <img :src="naresh" class="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full mr-3" alt="nani" />

        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-4 gap-6 mb-8">
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="text-sm font-medium text-customHeading mb-2">BALANCE</h3>
          <p class="text-2xl font-bold">${{ stats.balance.toFixed(2) }}</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="text-lg font-medium text-customHeading mb-2">PROFITS</h3>
          <div class="flex items-center">
            <p class="text-2xl font-bold ">${{ stats.profits.toFixed(2) }}</p>
            <span class="ml-2 custom-up"></span>
            <span class="  text-green-500">{{ stats.profitPercentage }}</span>
          </div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="text-lg font-medium text-customHeading mb-2">LOSSES</h3>
          <div class="flex items-center">
            <p class="text-2xl font-bold">${{ stats.losses.toFixed(2) }}</p>
            <span class="ml-2 custom2"></span>
            <span class=" text-red-500">{{ stats.lossPercentage }}</span>
          </div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="text-lg font-medium text-customHeading mb-2">CURRENCIES</h3>
          <div class="flex space-x-2">
             <img :src="bitcoin" alt="Bit Coin" class="w-6 h-6 bg-customCurrencyColor rounded-full p-1" />
             <img :src="currencydollar" alt="currencydollar" class="w-6 h-6 bg-customCurrencyColor rounded-full p-1" />
            <img :src="currencyeuro" alt="currencyeuro" class="w-6 h-6 bg-customCurrencyColor rounded-full p-1" />
            <img :src="currencyyen" alt="currencyyen" class="w-6 h-6 bg-customCurrencyColor rounded-full p-1" />
          </div>
        </div>
      </div>

      <!-- Country Stats -->
      <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200 shadow-gray-400 mb-8">
        <div class="grid grid-cols-6 gap-6">
          <div v-for="country in countries" :key="country.name" class="text-center">
            <h4 class="text-sm text-customHeading mb-2">{{ country.name }}</h4>
            <p class="text-xl font-bold flex items-center justify-center">
              {{ country.value }}
              <span
                :class="country.trend === 'up' ? 'custom-up' : 'custom2'"
                class="inline-block ml-2"
              ></span>
            </p>
            <div class="h-8 w-full flex items-center justify-between relative">
            <!-- SVG Line Graph -->
            <svg class="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none" v-if="country.graph===1" >
              <polyline
                points="0,40 20,10 40,30 60,20 80,40 100,10"
                fill="none"
                stroke="#0F77FA"
                stroke-width="2"
              />
            </svg>
            <svg class="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none" v-else-if="country.graph===2" >
              <polyline
                points="0,40 20,10 20,30 60,20 70,50 90,50"
                fill="none"
                stroke="#0F77FA"
                stroke-width="2"
              />
            </svg>
             <svg class="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none" v-else-if="country.graph===3" >
              <polyline
                points="0,40 20,10 30,30 40,30 70,30 90,30"
                fill="none"
                stroke="#FF4B75"
                stroke-width="2"
              />
            </svg>
            <svg class="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none" v-else-if="country.graph===4" >
              <polyline
                points="0,40 20,10 30,20 50,10 70,40 90,10"
                fill="none"
                stroke="#0F77FA"
                stroke-width="2"
              />
            </svg>
            <svg class="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none" v-else-if="country.graph===5" >
              <polyline
                points="0,40 20,10 30,20 50,10 70,40 90,10"
                fill="none"
                stroke="#00E38C"
                stroke-width="2"
              />
            </svg>
            <svg class="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none" v-else-if="country.graph===6" >
              <polyline
                points="0,40 20,10 30,20 50,10 70,40 90,10"
                fill="none"
                stroke="#FF4B75"
                stroke-width="2"
              />
            </svg>
          </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-6">
        <!-- Team Members -->
        <div class="bg-white p-6 rounded-lg shadow-xl border border-gray-200 shadow-gray-400 ">
          <div class="flex justify-between items-center mb-6">
            <h3 class="font-medium">Team Members</h3>
            <button class="text-sm text-blue-600">View All</button>
          </div>
          <div class="space-y-4">
            <div v-for="member in teamMembers" :key="member.name" 
                 class="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
              <div class="flex items-center">
                
                <img :src="member.avatar" class="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full mr-3" alt="nani" />
                <div>
                  <p class="font-medium">{{ member.name }}</p>
                </div>
              </div>
              <span class="text-sm text-blue-600">{{ member.role }}</span>
            </div>
          </div>
        </div>

        <!-- Comparison -->
        <div class="bg-white p-6 rounded-lg shadow-xl border border-gray-200 shadow-gray-400">
          <div class="flex justify-between items-center mb-6">
            <h3 class="font-medium">Comparison</h3>
            <button class="text-sm text-blue-600">View All</button>
          </div>
          <div class="space-y-4">
            <div v-for="item in comparison" :key="item.country" class="space-y-2">
              <div class="flex justify-between">
                <div class="flex items-center">
                  <img :src="item.countryicon" alt="country" class="w-6 h-6    p-1" />
                  <span class="text-sm text-customHeading">{{ item.country }}</span>
                </div>
                <span class="text-sm font-medium">{{ item.percentage }}%</span>
              </div>
              <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div class="h-full bg-blue-600 rounded-full" :style="{ width: `${item.percentage}%` }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { useAuthStore } from "../stores/auth";
import bitcoin from "@/assets/bitcoin.svg";
import currencyeuro from "@/assets/currencyeuro.svg";
import currencyexchange from "@/assets/currencyexchange.svg";
import currencydollar from "@/assets/currencydollar.svg";
import currencyyen from "@/assets/currencyyen.svg";
import add from "@/assets/add.svg";
import metrics from "@/assets/metrics.svg";
import logoutImage from "@/assets/logout.svg";
import analytics from "@/assets/analytics.svg";
import notification from "@/assets/notification.svg";
import usa from "@/assets/usa.svg"
import italy from "@/assets/italy.svg"
import spain from "@/assets/spain.svg"
import naresh from "@/assets/naresh.jpeg"
import image2 from  "@/assets/image2.jpeg"
import image3 from  "@/assets/image3.jpeg"
import image4 from  "@/assets/image4.jpeg"


// const authstore = useAuthStore();
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      // authstore: authstore,
        bitcoin,
        naresh,
        usa,
        italy,
        spain,
        image2,
        image3,
        image4,
        analytics,
        notification,
        logoutImage,
        currencyyen,
        add,
        currencydollar,
        currencyeuro,
        metrics,
        currencyexchange,
      authstore: useAuthStore(),
      stats: {
        balance: 5900.0,
        profits: 950.0,
        losses: 450.0,
        profitPercentage: "+56%",
        lossPercentage: "-56%",
      },
      countries: [
        { name: "Italy", value: 475, trend: "up",graph:1 },
        { name: "United States", value: 431, trend: "up",graph:2 },
        { name: "Canada", value: 174, trend: "down",graph:3 },
        { name: "Spain", value: 475, trend: "up",graph:4 },
        { name: "Japan", value: 134, trend: "up",graph:5 },
        { name: "South Africa", value: 471, trend: "down",graph:6 },
      ],
      teamMembers: [
        { name: "Aitla Naresh", role: "Top Trader", avatar: naresh },
        { name: "Anna Atkinsons", role: "Manager", avatar: image2 },
        { name: "Mark Atkinsons", role: "Top Trader", avatar: image3 },
        { name: "Jain", role: "Manager", avatar: image4 },
      ],
      comparison: [
        { country: "United States", percentage: 93,countryicon:usa },
        { country: "Italy", percentage: 73 ,countryicon:italy},
        { country: "Spain", percentage: 13 ,countryicon:spain},
      ],
    };
  },
  methods: {
    logout() {
        this.$router.push("/")
      this.authstore.logout();
    },
  },
};
</script>

<style scoped>
.custom {
  top: 505px;
left: 448px;
width: 17px;
height: 9px;
background: #00E38C 0% 0% no-repeat padding-box;
opacity: 1;
}
.custom2 {
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 10px solid #FF4B75;  
  transform: scale(0.8);  
  opacity: 1;
}
.custom-up {
  width: 0;
  height: 0;

  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 10px solid #00E38C;  
  transform: scale(0.8); 
  opacity: 1;
}

</style>