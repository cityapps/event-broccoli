import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from 'pages/landingPage/LandingPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    }
  ]
});
