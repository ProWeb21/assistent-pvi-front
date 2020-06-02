import { mapActions, mapState } from 'vuex'

const PVI = {
  install: function(_Vue, options){
    _Vue.mixin({
      created(){
      },
      computed: {
        ...mapState({
          'current_user': state => state.users.current_user
        })
      },
      methods:{
        ...mapActions([
          "setUser"

        ]),
      }
    })
  }
}

export default PVI;