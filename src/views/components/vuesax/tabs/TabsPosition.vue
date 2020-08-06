<!-- =========================================================================================
    File Name: TabsPosition.vue
    Description: Rendering of default Tabs
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template lang="html">
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
      <vs-input class="mb-4 md:mb-0 mr-4" v-model="searchQuery" @input="updateSearchQuery" placeholder="Enter barcode" />
    <vs-button color="primary" type="filled" @click="search" class="mb-3">Go</vs-button>
    <v-tree ref='tree' :canDeleteRoot="true" :data='code' :draggable='true' :tpl='tpl' :halfcheck='true' :multiple="true"/>
    </vs-tab>
  </vs-tabs>
  </template>
<script>
import { QrcodeStream, } from 'vue-qrcode-reader'
import { VTree, VSelectTree}  from 'vue-tree-halower'

export default {

  components: { QrcodeStream },

  data () {
    return {
      result: '',
      error: ''
    }
  },

  methods: {
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
<style scoped>
.error {
  font-weight: bold;
  color: red;
}
</style>

import DataViewSidebar from '../DataViewSidebar.vue'
import moduleDataList from "@/store/data-list/moduleDataList.js"

export default {
  components: {
    DataViewSidebar
  },
  data() {
    return {
      selected: [],
      //redemptions: [],
      // products: [],
      itemsPerPage: 5,
      isMounted: false,

      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {},
    }
  },
  computed: {
    currentPage() {
      if(this.isMounted) {
        return this.$refs.table.currentx
      }
      return 0
    },
    redemptions()     { return this.$store.state.dataList.redemptions },
    /*
    products() {
      return this.$store.state.dataList.products
    },
    */
    queriedItems() {
      //return this.$refs.table ? this.$refs.table.queriedResults.length : this.products.length
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.redemptions.length
    }
  },
  methods: {
    addNewData() {
      this.sidebarData = {}
      this.toggleDataSidebar(true)
    },
    deleteData(id) {
      this.$store.dispatch("dataList/removeItem", id).catch(err => { console.error(err) })
    },
    editData(data) {
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      this.sidebarData = data
      this.toggleDataSidebar(true)
    },
    getOrderStatusColor(status) {
      if(status == 'on_hold') return "warning"
      if(status == 'completed') return "success"
      if(status == 'canceled') return "danger"
      return "primary"
    },
    getPopularityColor(num) {
      if(num > 90) return "success"
      if(num >70) return "primary"
      if(num >= 50) return "warning"
      if(num < 50) return "danger"
      return "primary"
    },
    toggleDataSidebar(val=false) {
      this.addNewDataSidebar = val
    }
  },
  created() {
    if(!moduleDataList.isRegistered) {
      this.$store.registerModule('dataList', moduleDataList)
      moduleDataList.isRegistered = true
    }
    //this.$store.dispatch("dataList/fetchDataListItems")
  },
  mounted() {
    this.$store.dispatch("dataList/getRedemptions")
    this.isMounted = true
  }
}
</script>



<style lang="scss">
#data-list-list-view {
  .vs-con-table {

    /*
      Below media-queries is fix for responsiveness of action buttons
      Note: If you change action buttons or layout of this page, Please remove below style
    */
    @media (max-width: 689px) {
      .vs-table--search {
        margin-left: 0;
        max-width: unset;
        width: 100%;

        .vs-table--search-input {
          width: 100%;
        }
      }
    }

    @media (max-width: 461px) {
      .items-per-page-handler {
        display: none;
      }
    }

    @media (max-width: 341px) {
      .data-list-btn-container {
        width: 100%;

        .dd-actions,
        .btn-add-new {
          width: 100%;
          margin-right: 0 !important;
        }
      }
    }

    .product-name {
      max-width: 23rem;
    }

    .vs-table--header {
      display: flex;
      flex-wrap: wrap;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      > span {
        display: flex;
        flex-grow: 1;
      }

      .vs-table--search{
        padding-top: 0;

        .vs-table--search-input {
          padding: 0.9rem 2.5rem;
          font-size: 1rem;

          &+i {
            left: 1rem;
          }

          &:focus+i {
            left: 1rem;
          }
        }
      }
    }

    .vs-table {
      border-collapse: separate;
      border-spacing: 0 1.3rem;
      padding: 0 1rem;

      tr{
          box-shadow: 0 4px 20px 0 rgba(0,0,0,.05);
          td{
            padding: 20px;
            &:first-child{
              border-top-left-radius: .5rem;
              border-bottom-left-radius: .5rem;
            }
            &:last-child{
              border-top-right-radius: .5rem;
              border-bottom-right-radius: .5rem;
            }
          }
          td.td-check{
            padding: 20px !important;
          }
      }
    }

    .vs-table--thead{
      th {
        padding-top: 0;
        padding-bottom: 0;

        .vs-table-text{
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      th.td-check{
        padding: 0 15px !important;
      }
      tr{
        background: none;
        box-shadow: none;
      }
    }

    .vs-table--pagination {
      justify-content: center;
    }
  }
}

export default {

  getRedemptions({commit}) {
    return new Promise((resolve, reject) => {
      axios.get("https://partners.tripcarte.asia/wp-json/tripcarte_api/v2/reporting",  { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` } } )
        .then(res => {
          commit('SET_REDEMPTIONS', res.data.data['redemptions'])
          resolve(res)
        })
        .catch((error) => { reject(error) })
    })
  },
