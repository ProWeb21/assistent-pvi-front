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
  }
}
</script>