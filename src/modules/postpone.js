export default function Postpone(template,container){

    /** 
     * Data values used by this module
     */
    let data = {
        timer: null, // The interval countdown thread
        time: 0,
        active: false,
        modal: undefined,
        template, // template to use for rendering the modal
        container // container for the modal (modal will become a child of container)        
    }

    /** 
     * Starts the timer
     * rendering a modal showing a countdown
     */
    this.startTimer = function(init){
        // there only will be one timer running at all
        if (data.active) return;

        data.active = true;
        
        // Initialización de time
        data.time = init;
        
        renderModal();
        startCountdown();
    };


    /**
     * Stops the timer
     * resets the countdown
     * and hides the renderized modal
     */
    function stopTimer(){
        stopCountdown();
        hideModal();
        data.active = false;
    }


    /*** MODAL HANDLING FUNCTIONS ***/

    /**
     * Creates and shows the modal
     * @param HTMLElement parent the parent node for the modal to be created
     */
    function renderModal(){
        createModal();
        showModal();
    }
   

    /**
     * Creates a Modal div inside data.container
     * Fills the div 
     * @param {*} parent 
     */
    function createModal(){
        if (typeof data.modal === 'undefined') 
        {            
            data.container.insertAdjacentHTML("beforeend",data.template)
            data.modal = data.container.querySelector('#countdown');
            data.modal.querySelector('#close').addEventListener('click',stopTimer)
        }
        hideModal();        
    }

    /**
     * Hides the modal enabling its container
     */
    function hideModal(){        
        data.modal.classList.add('hidden');
        unblinkModal();
        data.container.classList.remove('disabled');
    }
    
    /**
     * Shows the modal disabling its container
     */
    function showModal(){
        data.container.classList.add('disabled');
        data.modal.classList.remove('hidden');
    }

    /**
     * Refreshed the modal with current time
     */
    function refreshModal(){
        var minutes = Math.floor(data.time / 60);
        var seconds = (data.time % 60);    
        data.modal.querySelector('#time').innerHTML = minutes + ' : ' + seconds +'s';        
    }

    function blinkModal(){
        data.modal.querySelector('#time').classList.add('blink');
    }

    function unblinkModal(){
        data.modal.querySelector('#time').classList.remove('blink');
    }


    function startCountdown(){
        refreshModal();
        data.timer = window.setInterval(countDown,1000,refreshModal,blinkModal);
    }

    function stopCountdown(){
        if (data.timer){
            window.clearInterval(data.timer);
            data.timer = null;
        }
        resetCountdown();
        refreshModal();
    }

    function resetCountdown(){
        data.time = 0;
    }
    
    function countDown(doAtInterval,doAtEnd){
        if (data.time <= 0){
            stopCountdown();            
            doAtEnd();
            return;
        }
        data.time--;
        doAtInterval();
    }

    

}

