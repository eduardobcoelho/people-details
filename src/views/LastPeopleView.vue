<template>
  <div class="last-people-view">
    <PersonCard
      v-for="person in lastPeople"
      :key="person.name"
      :name="person.name"
      :photo="person.photo"
      :age="person.age"
      :email="person.email"
    ></PersonCard>
    <template v-if="!lastPeople.length">
      <h3>Nenhuma pessoa vista ultimamente!</h3>
    </template>
  </div>
</template>

<script>
  import { mapState } from 'pinia';
  import { useStore } from '@/store';
  import PersonCard from '@/components/PersonCard/PersonCard.vue';

  export default {
    name: 'LastPeopleView',
    components: {
      PersonCard,
    },
    computed: {
      ...mapState(useStore, {
        lastPeople: 'lastPeopleViewed',
      }),
    },
  };
</script>

<style lang="scss" scoped>
  .last-people-view {
    width: 100%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
