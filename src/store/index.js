import Vue from 'vue';
import Vuex from 'vuex';

import { dofetch } from './fetch.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 20,
    user: {
      user_name: '',
      user_email: '',
      id: '',
      user_id: '',
    },
    userList: [],
    periodList: [],
    classroomList: [],
    appointmentList: [],
  },
  getters: {
    getCount: state => {
      return state.count;
    },
    getUserId: state => {
      return state.user.id;
    },
    getIfLogin: state => {
      if (state.user.user_name != '' && state.user.user_email != '') {
        return true;
      } else {
        return false;
      }
    },
    getUserList: state => {
      if (state.userList.length > 0) {
        return state.userList;
      } else {
        return [];
      }
    },
    getPeriodList: state => {
      if (state.periodList.length > 0) {
        return state.periodList;
      } else {
        return [];
      }
    },
    getClassroomList: state => {
      if (state.classroomList.length > 0) {
        return state.classroomList;
      } else {
        return [];
      }
    },
    getAppointmentList: state => {
      if (state.appointmentList.length > 0) {
        return state.appointmentList;
      } else {
        return [];
      }
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    updateUserList(state, _input) {
      state.userList = _input;
    },
    updatePeriodList(state, _input) {
      state.periodList = _input;
    },
    updateClassroomList(state, _input) {
      state.classroomList = _input;
    },
    updateAppointmentList(state, _input) {
      state.appointmentList = _input;
    },
  },
  actions: {
    async getAllUser({ commit }) {
      let { data } = await dofetch('/user/all');
      console.log(data);
      commit('updateUserList', data);
    },
    async getAllPeriod({ commit }) {
      let { data } = await dofetch('/period/all');
      console.log(data);
      commit('updatePeriodList', data);
    },
    async getAllClassroom({ commit }) {
      let { data } = await dofetch('/classroom/all');
      console.log(data);
      commit('updateClassroomList', data);
    },
    async getAllAppointment({ commit }) {
      let { data } = await dofetch('/appointment/all');
      console.log(data);
      commit('updateAppointmentList', data);
    },
  },
});

export default store;
