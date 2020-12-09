
<template>
  <div class="login-container">
    <h1 class="title font-bold not-italic text-center">Login</h1>
    <div class="form-login">
      <input type="text" placeholder="Username" v-model="username" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="button" @click="login" value="Connexion" />
    </div>
    <p v-if="msg">{{ msg }}</p>
  </div>
</template>

<style lang="postcss" scoped>

/* ———————————————
CONTAINER
—————————————— */
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-container h1 {
  font-size: 1.5rem;
  font-weight: bold;
}

/* ———————————————
FORM
—————————————— */
.form-login {
  display: flex;
  flex-direction: column;
}
.form-login input {
  margin: 10px;
  border: #9b9999 1px solid;
  border-radius: 5px;
  padding: 5px;
}
.form-login input[type="button"]{
  margin: auto;
  cursor: pointer;
  transition: ease 0.3s;
  background-color: #FFF;
}
.form-login input[type="button"]:hover {
  background-color: #991917;
  border: solid 1px #991917;
  color: #fff;
}
</style>

<script>
import AuthService from "@/services/AuthService.js";
export default {
  data() {
    return {
      username: "",
      password: "",
      msg: "",
    };
  },
  methods: {
    async login() {
      try {
        const credentials = {
          username: this.username,
          password: this.password,
        };
        const response = await AuthService.login(credentials);
        this.msg = response.msg;
        const token = response.token;
        const user = response.user;
        this.$store.dispatch("login", { token, user });
        this.$router.push("/Admin");
      } catch (error) {
        this.msg = error.response.data.msg;
      }
    },
  },
};
</script>