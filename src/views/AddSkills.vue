<template>
  <section class="contactSection">
    <h1 class="heading">Add Skills</h1>
    <main class="py-5 lg:py-12">
      <div>
        <label class="label">Skill Document Id</label>
        <input
          v-model="id"
          class="input"
          placeholder="Enter skill document id......."
          type="number"
          min="1"
        />
      </div>
      <div>
        <label class="label">Skill Name</label>
        <input
          v-model="name"
          class="input"
          placeholder="Enter skill name......."
          type="text"
        />
      </div>

      <div>
        <label class="label">Skill Svg/Image Link</label>
        <input
          v-model="link"
          class="input"
          placeholder="Enter skill link......."
          type="link"
        />
      </div>
      <div>
        <label class="label">Skill Decription</label>

        <textarea
          v-model="text"
          class="p-2 bg-mud outline-none border border-bor-green border-dashed md:w-128 w-full h-56 rounded resize-none"
          placeholder="Enter skill decription......."
        ></textarea>
      </div>
      <main v-if="showLoad" class="flex justify-center">
        <smallLoading />
      </main>
      <div class="flex justify-end py-3">
        <button @click="handleAdd" class="btnGreen">
          {{ Add }}
        </button>
      </div>
    </main>
  </section>
</template>

<script>
import { db } from "../firebase/config";
import { collection, setDoc, doc } from "firebase/firestore";
import smallLoading from "../components/smallLoading.vue";

export default {
  name: "Contact",
  data() {
    return {
      id: "",
      name: "",
      link: "",
      text: "",
      Add: "Add",
      showLoad: false,
    };
  },
  methods: {
    async handleAdd() {
      this.showLoad = true;
      const Data = collection(db, "Skills");
      this.Add = "Adding";
      try {
        await setDoc(doc(Data, this.id.toString()), {
          sName: this.name,
          sLink: this.link,
          sText: this.text,
        });
        this.Add = "Added";
        this.showLoad = false;
        setTimeout(() => {
          this.id = "";
          this.name = "";
          this.link = "";
          this.text = "";
          this.Add = "Add";
        }, 5000);
      } catch (e) {
        console.log(e);
      }
    },
  },
  components: { smallLoading },
};
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
