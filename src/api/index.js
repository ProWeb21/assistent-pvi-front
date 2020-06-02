/** This file is intended to contain API functions for retrieving and saving PVI data **/
import Fetch from '@lib/polyfills/Fetch'
import * as API from "./endpoints"

function getEndpoint(endpoint,payload={},method="POST"){
  let request_options = {
    method,
    body:JSON.stringify(payload),
    mode:"cors",
    credentials:"omit"
  }

  return Fetch(endpoint, request_options)
    .then( response => {
      if (!response.ok){
        throw new Error(String(response.status)+" status received from protocols endpoint: " + endpoint)
      }else{
        return response.json()
      }
  })
}

export function getUsers(){
  return getEndpoint(API.users_endpoint,API.users_payload)
}

export function getProtocols(){
  return getEndpoint(API.protocols_endpoint,API.protocols_payload)
}

export function getSteps(protocol_id){
  
}