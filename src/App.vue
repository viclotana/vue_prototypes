<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Test msg="Welcome to Your Vue.js App"/>
    <div v-for="user in users" :key="user.id">
      <p>{{user.name}}</p>
    </div>
  </div>
</template>

<script>
import Test from './components/Test.vue'

export default {
  name: 'app',
  components: {
    Test
  },
  data() {
    return {
      msg: 'LogRocket',
      users: []
    }
  },
  created: function (){
      this.$axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        this.users = res.data;
      })
  }
  ,
   beforeCreate: function() {
    console.log(this.$blogName)
  }
  // ,
  // created: function() {
  //   console.log(this.msg) 
  //   this.$reverseString('msg')
  //   console.log(this.msg) 
  // }
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
