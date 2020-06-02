import { getProtocols } from '@api'

import "@lib/polyfills/Array" 

const default_protocols = [
  {
    "id": 1,
    "label": "P1",
    "name": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 2,
    "label": "P2",
    "name": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 3,
    "label": "P3",
    "name": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 4,
    "label": "P4",
    "name": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 5,
    "label": "P5",
    "name": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 6,
    "label": "P6",
    "name": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 7,
    "label": "P7",
    "name": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 8,
    "label": "P8",
    "name": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 9,
    "label": "P9",
    "name": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 10,
    "label": "P10",
    "name": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }  
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
    }
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