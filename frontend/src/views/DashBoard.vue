<template>
  <div class="h-screen w-full bg-white ">
    <!-- Sidebar -->
    <aside class="fixed left-0 top-0 h-screen w-32 bg-white border-r border-gray-200 flex flex-col items-center py-6 justify-center">
      <div class="space-y-20">
        <router-link to="/dashboard" class="text-blue-600">
          <!-- <img :src="metrics" alt="metrics" class="w-6 h-6" /> -->
        </router-link>
        <div class="space-y-8 text-gray-400">
          <div class="p-4 hover:text-blue-600 transition-colors shadow-md border border-gray-200 rounded-md flex flex-col items-center">
            <!-- <img :src="add" alt="add" class="w-6 h-6" /> -->
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
      <button @click="logoutpage" class="mt-auto p-2 text-gray-400 hover:text-blue-600 transition-colors">
        <img :src="logout" alt="logout" class="w-6 h-6" />
      </button>
    </aside>

    <!-- Main Content -->
    <main class="ml-32 p-8 ">
      <!-- Header -->
      <div class="flex justify-between items-center mb-8 mt-12 ml-6">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
          <!-- {{ authStore.user?.email }} -->
          <p class="text-customHeading">Welcome back,Aitla Naresh </p>
        </div>
        <div class="flex items-center space-x-4">
          <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            + Add Unit
          </button>
          <div class="w-10 h-10 bg-gray-200 rounded-full"></div>
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
            <p class="text-2xl font-bold">${{ stats.profits.toFixed(2) }}</p>
            <span class="ml-2 text-green-500">{{ stats.profitPercentage }}</span>
          </div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="text-lg font-medium text-customHeading mb-2">LOSSES</h3>
          <div class="flex items-center">
            <p class="text-2xl font-bold">${{ stats.losses.toFixed(2) }}</p>
            <span class="ml-2 text-red-500">{{ stats.lossPercentage }}</span>
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
      <div class="bg-white p-6 rounded-lg shadow-sm mb-8">
        <div class="grid grid-cols-6 gap-6">
          <div v-for="country in countries" :key="country.name" class="text-center">
            <h4 class="text-sm text-customHeading mb-2">{{ country.name }}</h4>
            <p class="text-xl font-bold flex items-center justify-center">
              {{ country.value }}
              <span :class="country.trend === 'up' ? 'text-green-500' : 'text-red-500'" class="ml-1">
                {{ country.trend === 'up' ? '↑' : '↓' }}
              </span>
            </p>
            <div class="h-8 mt-2">
              <!-- Placeholder for chart -->
              <div class="h-full bg-gray-100 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Team Members and Comparison -->
      <div class="grid grid-cols-2 gap-6">
        <!-- Team Members -->
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <div class="flex justify-between items-center mb-6">
            <h3 class="font-medium">Team Members</h3>
            <button class="text-sm text-blue-600">View All</button>
          </div>
          <div class="space-y-4">
            <div v-for="member in teamMembers" :key="member.name" 
                 class="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
              <div class="flex items-center">
                <span class="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full mr-3">
                  {{ member.avatar }}
                </span>
                <div>
                  <p class="font-medium">{{ member.name }}</p>
                </div>
              </div>
              <span class="text-sm text-blue-600">{{ member.role }}</span>
            </div>
          </div>
        </div>

        <!-- Comparison -->
        <div class="bg-white p-6 rounded-lg shadow-sm">
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
import logout from "@/assets/logout.svg";
import analytics from "@/assets/analytics.svg";
import notification from "@/assets/notification.svg";
import usa from "@/assets/usa.svg"
import italy from "@/assets/italy.svg"
import spain from "@/assets/spain.svg"

import { useRouter } from "vue-router";

export default {
  data() {
    return {
        bitcoin,
        usa,
        italy,
        spain,
        analytics,
        notification,
        logout,
        currencyyen,
        add,
        currencydollar,
        currencyeuro,
        metrics,
        currencyexchange,
      authStore: useAuthStore(),
      stats: {
        balance: 5900.0,
        profits: 950.0,
        losses: 450.0,
        profitPercentage: "+56%",
        lossPercentage: "-56%",
      },
      countries: [
        { name: "Italy", value: 475, trend: "up" },
        { name: "United States", value: 431, trend: "up" },
        { name: "Canada", value: 174, trend: "down" },
        { name: "Spain", value: 475, trend: "up" },
        { name: "Japan", value: 134, trend: "up" },
        { name: "South Africa", value: 471, trend: "down" },
      ],
      teamMembers: [
        { name: "Andrew Johnston", role: "Top Trader", avatar: "👨‍💼" },
        { name: "Anna Atkinsons", role: "Manager", avatar: "👩‍💼" },
        { name: "Mark Atkinsons", role: "Top Trader", avatar: "👨‍💼" },
        { name: "Johanna Tairons", role: "Manager", avatar: "👩‍💼" },
      ],
      comparison: [
        { country: "United States", percentage: 93,countryicon:usa },
        { country: "Italy", percentage: 73 ,countryicon:italy},
        { country: "Spain", percentage: 13 ,countryicon:spain},
      ],
    };
  },
  methods: {
    logoutpage() {
        this.$router.push("/")
    //   this.authStore.logout();
    },
  },
};
</script>
