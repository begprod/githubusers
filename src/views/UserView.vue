<template>
<div>
  <UserSearchForm/>
  <UserProfile :user="user"/>
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
  },
  data () {
    return {
      user: {
        name: ''
      }
    }
  }
}
</script>
