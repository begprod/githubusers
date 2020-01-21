<template>
<div>
  <UserSearchForm/>
  <UserProfile/>
</div>
</template>

<script>
import UserSearchForm from './UserSearchForm'
import UserProfile from './UserProfile'
export default {
  name: 'UserView',
  components: {
    UserSearchForm,
    UserProfile
  }
}
</script>
