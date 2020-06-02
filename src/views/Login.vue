<script>
import template from 'html-loader!@partials/login.html'
import { getUsers } from '@api'
import { mapState, mapActions } from 'vuex'


export default {
  template: template,
  computed: {
    ...mapState({
      users: state => state.users.users
    })
  },  
  methods:{
    ...mapActions([
      'resyncUsers'
    ]),
    login(user_id){
      this.$store.dispatch('setUser',user_id)
      this.$router.push({name: "protocols"})
    }
  },
  beforeRouteEnter(to, from, next){
    getUsers().then( users => {      
      next( vm => vm.$store.dispatch('resyncUsers',users))
    }).catch(error => {console.log(error); next()})
  }

}
</script>