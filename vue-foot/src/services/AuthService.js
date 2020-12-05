import Api from '@/services/Api'
export default {
  login(credentials) {
    return Api()
      .post('login/', credentials)
      .then(response => response.data);
  },
  signUp(credentials) {
    return Api()
      .post('sign-up/', credentials)
      .then(response => response.data);
  },
  getSecretContent() {
    return Api()
      .get('secret-route/')
      .then(response => response.data);
  },
  getArticle() {
    return Api()
      .get('article/')
      .then(response => response.data);
  }
};