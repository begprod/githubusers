<template>
<div class="user-profile">
  <img class="user-profile__avatar" :src="user.avatar_url" />
  <div class="user-profile__info">
    <div class="user-profile__name">
      {{ user.name }}
    </div>
    <div class="user-profile__bio">
      {{ user.bio }}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'UserProfile',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
  .user-profile__avatar {
    width: 250px;
    height: 250px;
    border-radius: 100%;
  }
  .user-profile__info {
    margin-top: 15px;
  }
  .user-profile__name {
    font-size: 20px;
    font-weight: bold;
  }
</style>
