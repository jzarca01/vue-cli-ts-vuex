<template>
  <div id="app">
    <h1>Hello</h1>
    <div id="nav">
      <router-link ref="tableLink" to="table">Table</router-link> |
      <!-- <router-link ref="formLink" :to="{ name: 'form', params: { id: 12} }">Form</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
