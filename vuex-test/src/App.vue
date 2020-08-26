<template>
  <div id="app">
    Parent counter : {{ parentCounter }} <br>
    
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>

    <!-- Child 컴포넌트를 등록하고 counter 데이터 속성을 props 로 전달한다. -->
    <!--<child v-bind:passedCounter="counter"></child> -->

    <child></child>
  </div>
</template>

<script>
import Child from './components/Child.vue'
import { mapGetters, mapMutations , mapActions } from 'vuex'

export default {
  methods: {
     ...mapMutations({
       //addCounter:'addCounter'  ,
       subCounter:'subCounter'
     }),
    ...mapActions({
      addCounter:'addCounter'
    })
     
  },
  computed: {
    ...mapGetters({
       parentCounter : 'getCounter'
    })
  },
  components: {
    // Child 컴포넌트를 하위 컴포넌트로 등록
    'child': Child
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>