<template>
  <div class="container-connexion">
    <h1>Connexion</h1>
    <input type="email"
      v-model="Name"
      placeholder="email" required />
    <input type="password"
    v-model="CodeAdmin"
    placeholder="Password" required />
    <button 
      @onclick="Login">
      Connectez-vous
    </button>
  </div>
</template>

<style lang="postcss" scoped>
.container-connexion {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.container-connexion h1 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}
/* form {
  display: flex;
  margin: auto;
  flex-direction: column;
} */
/* input {
  border: solid 1px #000;
  border-radius: 5px;
  padding: 1px 5px 1px 5px;
  margin-bottom: 10px;
} */
/* input[type="submit"] {
  background: none;
  border: solid 2px #000;
  padding: 5px;
  border-radius: 5px;
  transition: ease 0.3s;
  cursor: pointer;
  margin: auto;
}
input[type="submit"]:hover {
  background-color: #991917;
  border: solid 2px #991917;
  color: #fff;
} */
</style>

<script>
export default {
  data(){
    return{
      Name:'',
      CodeAdmin:''
    }
  },
  methods: {
    Login() {
      console.log('register button was clicked', this.Name, this.CodeAdmin)
    }
   }
};
</script>