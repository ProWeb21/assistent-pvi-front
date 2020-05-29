const Fetch = function(url,options){
  if (!window.fetch){
    return import(/* webpackChunkName: "polyfills" */ 'whatwg-fetch').then((whatwgFetch)=>{return window.fetch(url,options)})    
  }
  else{
    return window.fetch(url,options)
  }
    
}
export default Fetch
