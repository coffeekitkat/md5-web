<template>
  <div class="container w-full h-full">
    <div class="flex justify-center mt-8">
      <div class="w-3/6">
        <div>
          <h2 class="text-center">MD5 Hash Generator for Text</h2>
        </div>
        <div class="mt-8">
          <div>Input:</div>
          <textarea
            v-model="inputStr"
            id="plainText"
            class="text-gray-900 mt-3 w-full p-2"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <div class="mt-8 flex items-center">
          <div>String hash:</div>
          <input
            readonly
            type="text"
            v-model="computedHash"
            class="p-1 text-gray-900 ml-12 w-4/6"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from "crypto-js/md5";

export default {
  data() {
    return {
      name: "Vue",
      inputStr: "",
    };
  },

  computed: {
    computedHash() {
      if (this.inputStr.trim().length > 0) {
        return md5(this.inputStr).toString();
      }
      return "";
    },
  },
};
</script>
