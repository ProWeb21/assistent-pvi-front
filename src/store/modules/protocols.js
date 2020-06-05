import { getProtocols } from '@api'

import "@lib/polyfills/Array" 

const default_protocols = [
  {
    "id": 1,
    "label": "P1",
    "name": "Columna de fum",
    "rols":[1,2,3]
  },
  {
    "id": 2,
    "label": "P2",
    "name": "Incendi",
    "rols":[1,2,3]
  },
  {
    "id": 3,
    "label": "P3",
    "name": "Infraccions a la reglamentació d'incendis",
    "rols":[2,3]
  },
  {
    "id": 4,
    "label": "P4",
    "name": "Punts de risc imminent",
    "rols":[2,3]
  },
  {
    "id": 5,
    "label": "P5",
    "name": "Risc extrem",
    "rols":[1,2,3]
  },
  {
    "id": 6,
    "label": "P6",
    "name": "Accident de treball",
    "rols":[1,2,3]
  },
  {
    "id": 7,
    "label": "P7",
    "name": "Accident amb el vehicle",
    "rols":[2,3]
  },
  {
    "id": 8,
    "label": "P8",
    "name": "Incidència en la rutina diària",
    "rols":[3]
  },
  {
    "id": 9,
    "label": "P9",
    "name": "Tempesta elèctrica",
    "rols":[1,3]
  },
  /*{
    "id": 10,
    "label": "P10",
    "name": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "rols":[]
  },*/  
  {
    "id": 11,
    "label": "P11",
    "name": "Dia de pluja",
    "rols":[2,3]
  },
  {
    "id": 12,
    "label": "P12",
    "name": "Avaria del vehicle",
    "rols":[2,3]
  },
  {
    "id": 13,
    "label": "P13",
    "name": "Afectació al servei",
    "rols":[1,2]
  },  
  {
    "id": 14,
    "label": "P14",
    "name": "Abandonament torre vigilància",
    "rols":[1]
  },  

];

const protocols_module = {
  state: () => ({
    protocols: default_protocols,
    current_protocol: null,
  }),
  getters: {
    getProtocolByid: (state) => (protocol_id) => {
      let result = null
      if (Array.isArray(state.protocols)){
        let filtered = state.protocols.filter((protocol)=>(parseInt(protocol.id)===parseInt(protocol_id)))
        if (filtered.length)
          result = filtered.unshift()
      }
      return result      
    },
    current_user_protocols: (state, getters) => state.protocols.filter(
      ({rols})=>rols.includes(getters.getCurrentUser.id))
  },
  mutations:{
    protocols(state, protocols){
      if (Array.isArray && Array.isArray(protocols))
        state.protocols = protocols
        else if ((typeof protocols === 'object') && protocols.values)
        state.protocols = protocols.values()
    },
    current_protocol(state,protocol){      
      state.current_protocol = protocol      
    }
  },
  actions:{
    async resyncProtocols({ commit }){
      commit('protocols', await getProtocols())
    },
    selectProtocol({commit, getters},protocol_id){            
      commit('current_protocol',getters.getProtocolByid(protocol_id))
    }
  }
}

export default protocols_module