<template>
  <header>
    <router-link :to="{name: 'back'}">
      <button v-if="!in_login">
        <!-- INTERNAL: El contingut del botó és una fletxa de retrocés.
            S'ha afegit l'etiqueta <i> per a usar un icone, com per exemple els de FontAwesome, 
            però es pot canviar a conveniència.
        -->
        <i class="back">&#9664;</i>
        <!-- INTERNAL: L'etiqueta <i> i el caràcter unicode utilitzats es poden canviar pel què es vulgi -->
      </button>
    </router-link>
    <router-link :to="{name: 'main'}">
      <section id="info">      
        <img :src="$root.pvi_logo" alt="Pla d'Informació i Vigilància">
        <h1>{{ title }}</h1>
      </section>
    </router-link>
    <pvi-menu></pvi-menu>    
  </header>
</template>

<style scoped>

</style>

<script>
import PviMenu from '@views/Menu.vue'

export default {  
  components: {PviMenu},  
  props:['title','in_login','current_user'],  
  watch:{
   "$route": function(to,from){
     // console.log('Watched route change at pvi header, from',from,'to',to)
    }   
  }
}

</script>