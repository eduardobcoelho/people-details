import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LastPeopleView from '@/views/LastPeopleView.vue';
import PersonDetailsView from '@/views/PersonDetailsView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/last-people',
    name: 'last-people',
    component: LastPeopleView,
  },
  {
    path: '/person-details/:id',
    name: 'person-details',
    component: PersonDetailsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
