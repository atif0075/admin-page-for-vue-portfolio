<template>
  <div class="heading text-white pt-5">Messages</div>
  <section v-if="isMounted" class="aboutSection w-full">
    <main class="py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      <main v-for="data in datas" :key="data.id">
        <div class="border border-dashed border-bor-green p-3 rounded-lg">
          <div class="heading2 py-1">{{ data.name }}</div>
          <label class="mail bg-bor-green rounded p-1">{{ data.mail }}</label>
          <p class="text-justify my-1 h-48 overflow-auto">
            {{ data.message }}
          </p>
        </div>
      </main>
    </main>
  </section>
  <section v-else class="flex justify-center items-center h-screen">
    <smallLoading />
  </section>
</template>

<script>
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import smallLoading from "../components/smallLoading.vue";
export default {
  name: "Home",
  components: { smallLoading },
  data() {
    return {
      datas: [],
      isMounted: false,
    };
  },
  beforeMount() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const Data = collection(db, "UserMessages");
      const data = await getDocs(Data);
      data.forEach((doc) => {
        let obj = {};
        obj["name"] = doc.data().name;
        obj["mail"] = doc.data().email;
        obj["message"] = doc.data().message;
        this.datas.push(obj);
      });
      this.isMounted = true;
    },
  },
};
</script>
