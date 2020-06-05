<template>
  <div>
    <button :class="{hamburger:in_login,active:!open}" @click="open=!open">
      <span v-if="!$parent.in_login">{{ $parent.current_user.label }} </span>
    </button>
    
    <ul v-show="open" id="main_menu">  
      <li><router-link to="login">Canviar rol</router-link></li>
      <li><router-link to="fires">Incendis actius</router-link></li>
      <li><router-link to="help">Ajuda</router-link></li>
    </ul>
  </div>
</template>

<style scoped>

</style>

<script>

export default {
  data:()=>({
    open:false
  }),
}
</script>

