<script>
import template from 'html-loader!@partials/login.html'
import { getUsers } from '@api'
import { mapState, mapActions } from 'vuex'


export default {
  template: template,
  data:()=>({
    user_classes:["orange","cyan","yellow","green","purple"],
  }),
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
    },
    userClass(i)  {
      let index = i % this.user_classes.length;
      return this.user_classes[index]
    }
  },
  beforeRouteEnter(to, from, next){
    getUsers().then( users => {      
      next( vm => vm.$store.dispatch('resyncUsers',users))
    }).catch(error => {console.log(error); next()})
  }

}
</script>
<style scoped>
.orange{
  background-color: var(--orange);
}
.cyan{
  background-color: var(--cyan);
}
.green{
  background-color: var(--green);
}
.purple{
  background-color: var(--purple);
  color: var(--white);
}
.yellow{
  background-color: var(--yellow);  
}

</style>