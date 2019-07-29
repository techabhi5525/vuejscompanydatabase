<template>
  <header class="header">
    <h1>Companies Database</h1>
    <img alt="Vue logo" class="vueLogo" src="../../assets/logo.png">
    <div id="nav">
      <router-link to="/">Home</router-link> || <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  .header {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
    margin-bottom: 15px;
  }

  .header a {
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
  }

  .vueLogo {
    height: 50px;
    width: 50px;
    float: left;
    margin-top: -30px;
  }
</style>


