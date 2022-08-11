import { defineStore } from 'pinia';
import { createPinia } from 'pinia';
import { people } from '@/mocks';

export const useStore = defineStore('main', {
  state: () => ({
    people: [...people],
    lastPeopleViewed: [],
  }),
  actions: {},
});

export default createPinia();
