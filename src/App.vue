<template>
  <div class="bg-dark h-auto min-h-screen">
    <Header />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
export default {
  components: { Header },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Serif+Display&display=swap");
*::selection {
  background: #00dc82;
  color: #001e26;
}
*::-webkit-scrollbar {
  width: 6px;
}
*::-webkit-scrollbar-track {
  background: #003543;
}
*::-webkit-scrollbar-thumb {
  background: #00dc82;
}
/* Router Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
