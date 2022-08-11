<template>
  <div class="app-content">
    <nav>
      <router-link to="/">Pessoas</router-link> |
      <router-link to="/last-people">Últimas pessoas vistas</router-link>
    </nav>
    <div class="app-content__views">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .app-content {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &__views {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
