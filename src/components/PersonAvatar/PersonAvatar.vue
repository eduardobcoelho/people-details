<template>
  <div
    class="person-avatar"
    :style="`background-image: url(${photo}); width: ${size}px; height: ${size}px;`"
  ></div>
</template>

<script>
  export default {
    props: {
      photo: {
        type: String,
        require: true,
      },
      size: {
        type: String,
        require: false,
        default: '80',
      },
    },
  };
</script>

<style lang="scss" scoped>
  .person-avatar {
    display: flex;
    border-radius: 50%;
    border: 2px solid lightgray;
    background-size: cover;
    background-position: center;
  }
</style>
