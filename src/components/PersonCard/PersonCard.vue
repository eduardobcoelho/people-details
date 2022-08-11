<template>
  <div class="person-card">
    <div
      class="person-card__image-profile"
      :style="`background-image: url(${photo})`"
    ></div>
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
  export default {
    name: 'PersonCard',
    props: {
      name: { String, require: true },
      photo: { String, require: true },
      age: { String, require: true },
      email: { String, require: true },
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

    &__image-profile {
      height: 80px;
      width: 80px;
      border-radius: 50%;
      border: 2px solid lightgray;
      background-size: cover;
      background-position: center;
    }

    &__name {
      margin: 14px 0;
    }

    &__extra-info {
      margin: 14px 0;
    }
  }
</style>
