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

li {
  max-width: 576px;
}

li span {	
	font-weight: bold;
	border: 3px solid black;
  line-height: 3rem;
  
  text-overflow: ellipsis;
  overflow: hidden;
}
li span:first-child{
  	max-width: 	 3.5rem;
}

li span:last-child {
	border: 3px solid black;
	border-radius: 20px;
	text-align: left;
}

.orange,
.blue,
.yellow,
.green,
.pink {
	background-color: unset;
}

li.orange span{
  background-color: var(--orange);
}
li.cyan span{
  background-color: var(--cyan);
}
li.green span{
  background-color: var(--green);
}
li.purple span{
  background-color: var(--purple);
  color: var(--white);
}
li.yellow span{
  background-color: var(--yellow);  
}

</style>