<script>
export default {
  data() {
    return {
      message: "Tailwind CSS with Vue 3 Options API!",
    };
  },
};
</script>

<template>
  <div class="h-screen flex flex-col justify-center items-center bg-blue-500 text-white text-3xl">
    <h1>{{ message }}</h1>
    <button 
      class="mt-4 px-6 py-2 bg-white text-blue-500 rounded-lg hover:bg-gray-200 transition">
      Click Me
    </button>
  </div>
</template>
