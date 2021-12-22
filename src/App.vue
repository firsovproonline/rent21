<template>
  <div id="nav">
    <router-link to="/">Пример формы</router-link> |
    <router-link to="/about">Пример вывода дерева данных</router-link>
  </div>
  <router-view/>
</template>

<style>
*{
  box-sizing: border-box;
  font-size: 12px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-left: 20px;
  padding-right: 20px;
}
body {
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 0px;
  background-color: #ffffff;
  height: 100%;
  box-shadow: 0 0 20px rgb(0 0 0 / 80%);

}

html {
  background-image: url('./assets/bgkl1.jpg');
  height: 100%;
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
