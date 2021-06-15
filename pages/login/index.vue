<template>
  <div class="login-page">
    <Header :backBtn="true" :emptyRight="true" />
    <div class="container">
      <p class="title">Најави се со:</p>
      <div class="social-btns">
        <button class="btn btn-social btn-facebook">
          <i class="fab fa-facebook-square fa-2x"> </i>
          <span>&nbsp; Facebook</span>
        </button>
        <button class="btn btn-social btn-google">
          <img src="~/assets/icon-google.webp" alt="google" />

          <span> &nbsp; Google</span>
        </button>
      </div>
      <br />
      <form @submit.prevent="logIn">
        <div class="form-group">
          <label for="exampleInputEmail1">Маил адреса</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Лозинка</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            v-model="password"
          />
          <router-link to="resetpassword"
            >Ја заборавивте вашата лозинка?</router-link
          >
        </div>

        <button type="submit" class="btn btn-primary login">Најави се</button>
      </form>

      <p class="no-account">
        Немаш акаунт?
        <span> <router-link to="/joinus">Креирај нов акаунт</router-link></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("mounted");
    console.log(this.$auth.loggedIn);
    console.log(this.$auth.user);
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onFormSubmit() {
      this.$store.dispatch("login", {
        username: this.email,
        password: this.password
      });
    },
    logIn() {
      this.$auth.loginWith("local", {
        data: {
          username: this.email,
          password: this.password
        }
      });
    }
  }
};
</script>

<style scoped>
.container {
  justify-content: flex-start;
  align-items: center;
  height: 92vh;
  background-color: #ccc;
}
form {
  width: 100%;
}

.social-btns {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.btn-social {
  border-radius: 10px;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48%;
}
.btn-facebook {
  background-color: #3b5998;
  color: white;
}

.btn-google {
  background-color: white;
}

p.title {
  padding-bottom: 30px;
  font-size: 20px;
}

p.or {
  padding-bottom: 10px;
  font-size: 18px;
}

.login {
  width: 100%;
}

.no-account {
  padding-top: 40px;
}
::placeholder {
  opacity: 0.5;
}
</style>
