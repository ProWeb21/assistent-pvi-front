<script>
import template from 'html-loader!@templates/welcome.html'
import SpinnerSvg from '@assets/img/spinner.svg'



export default {
  name: "Welcome",
  comments: true,
  template,  
  data(){
    return {
      "diba_logo": "https://place-hold.it/300x150?text=Diputació%20Barcelona",
      "pvi_logo": "https://place-hold.it/140x50?text=P%20%20V%20%20I&bold=true"
    }
  },
  components:{
    SpinnerSvg
  },
  mounted(){    
    if (typeof this.$route.query.stop == "undefined")
      this.$router.push({name:"login"})
  }
}
</script>
<style scoped>
  main{    
  }
  main > * {

  }
  main > h1{
  }
  main > div{

  }
  main > div > *{

  }
  main > div > img{

  }
  main > div > p{

  }
  main > footer{

  }

  main > footer > * {

  }

  main > footer > address {

  }

</style>