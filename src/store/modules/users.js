import '@lib/polyfills/Array' 


const default_users = [
  {   
    id: "1",
    name: "Guaita",
    shortname: "Guaita",
    label: "G"
  },
  {   
    id: "2",
    name: "Informador/a",
    shortname: "Informador/a",
    label: "I"
  },
  {   
    id: "3",
    name: "Operador/a",
    shortname: "Operador/a",
    label: "OP"
  },
  {   
    id: "4",
    name: "Responsable de Control",
    shortname: "Responsable",
    label: "RC"
  },
  {   
    id: "5",
    name: "Enginyer/a Responsable de Dispositiu",
    shortname: "Enginyer/a",
    label: "ERD"
  }
]
const users_module = {
  state: () => ({
    users: default_users,
    current_user: null,
  }),  
  getters: {
    getUserByid: (state) => (protocol_id) => {
      let result = null
      if (Array.isArray(state.protocols)){
        let filtered = state.protocols.filter((protocol)=>(parseInt(protocol.id)===parseInt(protocol_id)))
        if (filtered.length)
          result = filtered.unshift()
      }
      return result      
    }
  },
  mutations:{
    users(state, users){
      if (Array.isArray && Array.isArray(users))
        state.users = users
      else if ((typeof users === 'object') && users.values)
        state.users = users.values()
    },
    current_user(state,user){
      state.current_user = user
    }
  },
  actions:{
    resyncUsers({ commit }, users){
      commit('users', users)
    },
    setUser( {commit, getters },user_id){
      commit('current_user',getters.getUserByid(user_id))
    }
  }
}

export default users_module