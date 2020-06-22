/*=========================================================================================
  File Name: moduleCommission.js
  Description: Commission Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './moduleCommissionState.js'
import mutations from './moduleCommissionMutations.js'
import actions from './moduleCommissionActions.js'
import getters from './moduleCommissionGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}

