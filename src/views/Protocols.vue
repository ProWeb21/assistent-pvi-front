<script>
import template from 'html-loader!@partials/protocols.html'
import { getProtocols } from '@api'
import { mapState, mapActions } from 'vuex'



export default {
  template: template,
  computed: {
    ...mapState({
      protocols: state => state.protocols.protocols
    })
  },  
  methods:{
    ...mapActions([
      'resyncProtocols'
    ]),
    load_protocol(id){
      this.$store.dispatch('selectProtocol',id)
      this.$router.push({name: "protocol", params: {protocolId : id}})
    }
  },
  beforeRouteEnter(to, from, next){
    getProtocols().then( protocols => {
      next( vm => vm.$store.dispatch('resyncProtocols',protocols))
    }).catch(error => {console.log(error); next()})
  }


 
}
</script>

<style scoped>

</style>