// APP
// STYLES
import "@css/styles.css"
// FRAMEWORK
import Vue from "vue"

import router from "@router"



/*// SCRIPTS
import modal_html from "html-loader!@partials/timer_modal.html";
import Postpone from "@modules/postpone.js"*/


const app = new Vue({
  router
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