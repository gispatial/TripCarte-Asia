<!-- =========================================================================================
    File Name: TabsPosition.vue
    Description: Rendering of default Tabs
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <vs-tabs>
    <vs-tab label="START SCANNING" icon-pack="feather" icon="icon-camera">
    <div>
      <p class="error">{{ error }}</p>

      <p class="decode-result">Last result: <b>{{ result }}</b></p>

      <qrcode-stream @decode="onDecode" @init="onInit" />
    </div>
    </vs-tab>
    <vs-tab label="ENTER BARCODE" icon-pack="feather" icon="icon-box">
    <!-- TABLE ACTION COL-2: SEARCH & EXPORT AS CSV -->
      <vs-input class="mb-4 md:mb-0 mr-4" v-model="barcode" placeholder="Enter barcode" />
    <vs-button color="primary" type="filled" @click="barcodesearch" class="mb-3">Go</vs-button>
    <v-tree ref='tree' :canDeleteRoot="true" :data='code' :draggable='true' :tpl='tpl' :halfcheck='true' :multiple="true"/>
    <ul>
      <li v-for="post in posts" v-text="post.order_id" v-bind:key="post.order_id"></li>
       <li v-for="post in posts" v-text="post.name" v-bind:key="post.order_id"></li>
        <li v-for="post in posts" v-text="post.order_items" v-bind:key="post.order_id"></li>
    </ul>


    </vs-tab>
  </vs-tabs>
</template>

<script>
import { QrcodeStream, } from 'vue-qrcode-reader'
import { VTree, VSelectTree}  from 'vue-tree-halower'
import axios from "@../../axios"

export default {

  components: { QrcodeStream },

  data () {
    return {
      posts: '',
      barcode: '',
      result: '',
      error: ''
    }
  },
  /*
  mounted: function() {
    axios.post('https://partners.tripcarte.asia/wp-json/tripcarte_api/v2/redeem/',{ barcode: this.barcode },  { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` } })
    .then(response => this.posts = response.data );
  },
  */

  methods: {
    barcodesearch() {
      //this.mounted = code
      axios.post('https://partners.tripcarte.asia/wp-json/tripcarte_api/v2/redeem/',{ barcode: this.barcode },  { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` } })
                  .then( (response) => this.posts = response.data )
                  .catch(error => this.posts = [{order_id: 'Invalid Barcode!'}]);
    },

    onDecode (result) {
      this.result = result
    },

    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = "ERROR: you need to grant camera access permisson"
        } else if (error.name === 'NotFoundError') {
          this.error = "ERROR: no camera on this device"
        } else if (error.name === 'NotSupportedError') {
          this.error = "ERROR: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "ERROR: is the camera already in use?"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "ERROR: installed cameras are not suitable"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: Stream API is not supported in this browser"
        }
      }
    }
  }
}
</script>

<style scoped>
.error {
  font-weight: bold;
  color: red;
}
</style>
