<template>
  <div class="home">
    <PersonCard
      v-for="person in people"
      :key="person.name"
      :name="person.name"
      :photo="person.photo"
    ></PersonCard>
  </div>
</template>

<script>
  import { mapState } from 'pinia';
  import { useStore } from '@/store';
  import PersonCard from '@/components/PersonCard/PersonCard.vue';

  export default {
    name: 'HomeView',
    components: { PersonCard },
    computed: {
      ...mapState(useStore, {
        people: 'people',
      }),
    },
  };
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    display: flex;
    gap: 20px;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }
</style>
