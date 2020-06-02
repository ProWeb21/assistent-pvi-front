
// INITIALLY LOADED COMPONENTS
import Welcome from "@views/Welcome.vue";



// route_components property names MUST MATCH 
// exported routes object property names
import routes from "@router/routes.js"
const route_components = {
  // initial DOM component
  "index": Welcome,
  // preloaded component
  "login": () => import(
    /* webpackChunkName: "login" */ 
    /* webpackPreload: true */
    "@views/Login.vue"),
  "protocols": () => import(
    /* webpackChunkName: "protocols" */ 
    /* webpackPrefetch: true */
    "@views/Protocols.vue"
  )
}

const compiled_routes = []
for (let name in routes)
  compiled_routes.push({
    name,
    path: routes[name],
    component: route_components[name]
  })


const router = {
  mode: "history",
  base: process.env.BASE_URL,
  routes: compiled_routes
}

export default router;