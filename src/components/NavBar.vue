<template>
  <div>
   <!-- Navbar -->
<nav class="navbar navbar-expand-lg fixed-top bg-light text-center navbar-light">
  <div class="container">
    <a class=" btn btn-outline-light dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
      <img
        id="MDB-logo"
        src="../assets/icon/tgo logo.png"
        draggable="false"
        height="40"
    /> <div class="dropdown-menu">
    <router-link to="/">
      <li>Home</li></router-link>
    <router-link to="/admin">admin</router-link>
  </div></a>
   
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto align-items-center">
        <span v-if="isLoggedIn">
      <a @click="logout"><button type="button" class="btn btn-outline-danger">Log-Out</button></a>
    </span>       
      </ul>
    </div>
  </div>
</nav>
<!-- Navbar -->
  </div>
</template>
<script>
export default {
  name: "NavBar",
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch("LogOut");
      this.$router.push("/");
    },
  },
};
</script>

<style>
.navbar-light .navbar-nav .nav-link {
  color: #000;
}
</style>
