<template>
  <div v-if="!loading" class="person-details">
    <PersonAvatar :photo="person.photo" size="180"></PersonAvatar>
    <h1>Dados pessoais</h1>
    <hr />
    <div>
      <h3>{{ person.name }}</h3>
      <h3>{{ person.email }}</h3>
      <h3>Idade: {{ person.age }}</h3>
    </div>
  </div>
  <div v-else>
    <h3>Carregando...</h3>
  </div>
</template>

<script>
  import PersonAvatar from '@/components/PersonAvatar/PersonAvatar.vue';
  import { useStore } from '@/store';

  export default {
    name: 'PersonDetailsView',
    components: { PersonAvatar },
    data: () => ({
      store: useStore(),
      loading: false,
      person: null,
    }),
    async created() {
      await this.getPersonData();
    },
    methods: {
      async getPersonData() {
        this.loading = true;
        this.person = await this.store.people.find(
          (person) => person.name === this.$route.params.id,
        );
        this.loading = false;
      },
    },
  };
</script>

<style lang="scss" scoped>
  h1 {
    margin: 32px 0 0 0;
    color: #42b983;
  }

  h3 {
    margin: 0;
  }

  hr {
    width: 100%;
    margin: 32px 0;
    border: 1px solid lightgrey;
  }

  .person-details {
    width: 100%;
    max-width: 800px;
    min-width: 300px;
    padding: 32px;
    border-radius: 12px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
