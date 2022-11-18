<template>
  <div class="register">
    <section class="vh-100">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img src="../assets/aset.jpg"
            class="img-fluid" alt="Sample image">
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form @submit.prevent="submit">
           
  
            <div class="divider d-flex align-items-center my-4">
              <p class="text-center fw-bold mx-3 mb-0">Register</p>
            </div>
  
            <!-- Username input -->
            <div class="form mb-4">
              <label class="form-label" for="username">Username</label>
              <input type="text" name="username" v-model="form.username" class="form-control "
               placeholder="Masukkan Username Anda!" />
            </div>

            <!-- Email input -->
            <div class="form mb-4">
              <label class="form-label" for="full name">full_name</label>
              <input type="text" name="full_name" v-model="form.full_name" class="form-control "
                placeholder="Masukkan Nama Lengkap Anda!" />
            </div>
  
            <!-- Password input -->
            <div class="form mb-3">
              <label class="form-label" for="password">Password</label>
              <input type="password" name="password" v-model="form.password" class="form-control "
                placeholder="Masukkan Email Anda!" />
            </div>
  

  
            <div class="text-center text-lg-start mt-4 pt-2">
              <button type="submit" class="btn btn-success"
                style="padding-left: 2.5rem; padding-right: 2.5rem;">Registrasi</button>
              <p class="small fw-bold mt-2 pt-1 mb-0">have an account? 
                <router-link to="./"><a class="link-danger">Login</a></router-link>  </p>
            </div>
  
          </form>
          <p v-if="showError" id="error">Username already exists</p>
        </div>
      </div>
    </div>
  </section>  
  </div>  
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Register",
  components: {},
  data() {
    return {
      form: {
        username: "",
        full_name: "",
        password: ""
      },
      showError: false
    };
  },
  methods: {
    ...mapActions(["Register"]),
    async submit() {
      try {
        await this.Register(this.form);
        this.$router.push("/");
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
}
</style>


