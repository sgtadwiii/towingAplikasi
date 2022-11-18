<template>
  <div class="login">
<section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="../assets/aset.jpg"
          class="img-fluid" alt="Sample image">
      </div>
      
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form @submit.prevent="submit" >
          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Login</p>
          </div>

          <!-- Email input -->
          <label class="form text-black" for="username">Username</label>
          <div class="form mb-4">
            <input type="text" name="username" v-model="form.username" class="form-control" placeholder="Masukkan Username Anda!" />
          </div>

          <!-- Password input -->
          <div class="form mb-3">
            <label class="form text-black" for="password">Password</label>
            <input type="password" name="password" v-model="form.password" class="form-control" placeholder="Masukkan Password Anda!" />
          </div>
          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="submit" class="btn btn-primary "
              style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? 
              
              <router-link to="/register"> <a class="link-danger" >Register</a></router-link>

          </p>
            
            </div>
        </form>
        <p v-if="showError" id="error">Username or Password is incorrect</p>
      </div>
    </div>
  </div>
</section>
</div>  
</template>


<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      showError: false
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      const User = new FormData();
      User.append("username", this.form.username);
      User.append("password", this.form.password);
      try {
          await this.LogIn(User);
          this.$router.push("/posts");
          this.showError = false
      } catch (error) {
        this.showError = true
      }
    },
  },
};
</script>


<style scoped>

.divider:after,
.divider:before {
content: "";
flex: 1;
height: 1px;
background: #eee;
}
.h-custom {
height: calc(100% - 73px);

}
@media (max-width: 450px) {
.h-custom {
height: 100%;
}
.form-label{
  background: rgb(136, 136, 136);
}
}
</style>

