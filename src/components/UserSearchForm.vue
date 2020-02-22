<template>
<form class="search-form" @submit.prevent="$emit('submitted', username)">
  <input class="search-form__input" type="text" v-model="username" placeholder="User name">
  <button class="search-form__button">Submit</button>
</form>
</template>

<script>
export default {
  name: 'UserSearchForm',
  data () {
    return {
      username: ''
    }
  }
}
</script>

<style>
  .search-form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30px;
    margin-bottom: 25px;
  }
  .search-form__input {
    flex-grow: 1;
    height: 100%;
    margin-right: 15px;
    padding: 0 0 0 15px;
    font-size: 14px;
  }
  .search-form__button {
    flex-basis: 15%;
    height: 100%;
    padding: 0;
    border: 1px solid lightgray;
    font-size: 14px;
  }
</style>
