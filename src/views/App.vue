<template>
  <div>      
    <!-- app.vue begin -->
    <pvi-header v-if="!loading" :title="title" :in_login="in_login" :current_user="current_user"></pvi-header>
    <router-view></router-view>
    <!-- app.vue end -->
  </div>
</template>

<script>
import PviHeader from '@views/Header.vue'
import { mapState } from 'vuex'

export default {
  comment: true,
  components: {PviHeader},
  computed:{
    ...mapState({
      current_user: (state) => { return state.users.current_user || null}
    }),    
    in_login: function(){return this.$route.name=='login'},   
    title: function(){
      //TODO: this logic must be extended by APP
      return this.$route.meta.title
    },
    loading(){
      return this.$route.name=='welcome'
    }
  },
  watch:{
    "$route":function(){ 
      //TODO: Add several logic for redirecting to login if there is no current user   
    },
  }
}

</script>