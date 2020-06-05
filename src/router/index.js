// View components
import welcomeView from "@views/Welcome.vue"
import appView from "@views/App.vue"
const usersView = () => import(
  /* webpackChunkName: "login" */ 
  /* webpackPreload: true */
  "@views/Login.vue")
const protocolsView = () => import(
  /* webpackChunkName: "protocols" */ 
  /* webpackPrefetch: true */
  "@views/Protocols.vue")

const protocolLoader = () => {
  console.log("protocolLoader",this)
}

function buildRoute(path,component,name=null,title=null){
  let result = {path, component}
  if (name)
    result = Object.assign(result,{name})
  if (title)
    result = {...result,meta:{title}}
  return result
}


const back_routes ={
  "login": false,
  "welcome": false,
  "protocols": {name:"login"},
  "protocol": {name: "protocols"},
  "fires": {name: "protocols"},
}

const main_routes = {
  "index": "welcome", 
  "welcome": "login",
  "login": "login",
  "protocols":"protocols",
  "protocol":"protocols"
}

function goBack(from){
  return goTo(from,back_routes)
}
function goMain(from){
  return goTo(from, main_routes)
}

function goTo(from,destinations){  
  try{
    return back_routes[String(from.name)]
  }catch(error)
  {
    return false
  }
}

const routes = [
  {...buildRoute('/',appView,'index'),
    children:[
      buildRoute('',welcomeView,'welcome'),
      buildRoute('login',usersView,'login',"Identificacio"),
      buildRoute('protocols',protocolsView,'protocols',"Activació de protocol"),
      buildRoute('protocol/:protocolId',protocolLoader,'protocol')  
    ]
  },
  {path:"/../",name:"back",beforeEnter: (to, from,next) => next(goBack(from))}, 
  {path:"/.",name:"main",beforeEnter:(to,from,next)=>next(goMain(from))}
]

const router = {
  mode: "history",
  base: process.env.BASE_URL,
  routes,  
}

export default router;