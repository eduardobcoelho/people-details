<template>
  <div class="person-card" @click="toPersonDetails">
    <PersonAvatar :photo="photo"></PersonAvatar>
    <div class="person-card__name">
      <h2>{{ name }}</h2>
    </div>
    <hr />
    <div class="person-card__extra-info">
      <h3>{{ email }}</h3>
      <h3>Idade: {{ age }}</h3>
    </div>
  </div>
</template>

<script>
  import { useStore } from '@/store';
  import PersonAvatar from '@/components/PersonAvatar/PersonAvatar.vue';

  export default {
    name: 'PersonCard',
    components: {
      PersonAvatar,
    },
    props: {
      name: { String, require: true },
      photo: { String, require: true },
      age: { String, require: true },
      email: { String, require: true },
    },
    data: () => ({
      store: useStore(),
    }),
    methods: {
      async toPersonDetails() {
        if (!this.personAlreadyExistOnLastPeopleViewed())
          await this.pushPersonToLastPeopleViewed();
        this.$router.push(`/person-details/${this.name}`);
      },
      personAlreadyExistOnLastPeopleViewed() {
        return this.store.lastPeopleViewed.find(
          ({ name }) => name === this.name,
        );
      },
      async pushPersonToLastPeopleViewed() {
        await this.store.$patch({
          lastPeopleViewed: [
            ...this.store.lastPeopleViewed,
            await this.getPersonData(),
          ],
        });
      },
      getPersonData() {
        return this.store.people.find(({ name }) => name === this.name);
      },
    },
  };
</script>

<style lang="scss" scoped>
  h2,
  h3 {
    margin: 0;
  }

  hr {
    width: 100%;
    border: 1px solid lightgray;
    margin: 0;
  }

  .person-card {
    width: 100%;
    min-width: 300px;
    max-width: 380px;
    padding: 32px;
    border-radius: 12px;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
      box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
    }

    &__name {
      margin: 14px 0;
    }

    &__extra-info {
      margin-top: 14px;
    }
  }
</style>
