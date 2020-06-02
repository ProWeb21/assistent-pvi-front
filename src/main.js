// APP
// STYLES
import "@css/styles.css"
// FRAMEWORK
import Vue from "vue"
// PLUGINS
import Vuex, { Store, mapState } from 'vuex'
Vue.use(Vuex)
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import PVI from '@plugins/pvi'
Vue.use(PVI)
// SCRIPTS
import router from "@router"
import store from "@store"




const app = new Vue({
  router:new VueRouter(router),
  store: new Store(store),
/*  watch:{
    $route: function(to,from){console.log('watchig $route from main')},
  }*/
}).$mount('#app');


/*document.addEventListener('DOMContentLoaded',
  function(event) {  
    var main = document.querySelector('body main');
    var timer = new Postpone(modal_html,main);    
    var postpone_btns = main.querySelectorAll("[data-action='postpone']");
    for (var i = 0; i < postpone_btns.length; i++){
      addPostponeHandler(postpone_btns[i],timer.startTimer);
    }
  }
);


function addPostponeHandler(element, postpone_function){
  element.addEventListener('click',function(event){
    postpone_function(parseInt(element.dataset.delay));
  });
}
*/