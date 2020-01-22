<template>
<div>
  <UserSearchForm/>
  <UserProfile :user="user"/>
</div>
</template>

<script>
import { mapState } from 'vuex'
import UserSearchForm from './UserSearchForm'
import UserProfile from './UserProfile'
export default {
  name: 'UserView',
  components: {
    UserSearchForm,
    UserProfile
  },
  computed: {
    ...mapState({
      user: 'user'
    })
  }
}
</script>
