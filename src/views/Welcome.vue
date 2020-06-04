<script>
import template from 'html-loader!@templates/welcome.html'
import SpinnerSvg from '@assets/img/spinner.svg'



export default {
  name: "Welcome",
  comments: true,
  template,  
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