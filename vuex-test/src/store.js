import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); // vue에 vuex등록

export const store = new Vuex.Store({ 
    state: { //counter state 추가
        counter: 0
    },
    getters: {
        getCounter(state) {
            return state.counter;
        }
    },
    mutations: { 
        addCounter(state) {
            return state.counter++;
        },
        subCounter(state) {
            return state.counter--;
        }
    },
    actions: {
        addCounter(context) {
            return context.commit('addCounter');
        }
    }
});