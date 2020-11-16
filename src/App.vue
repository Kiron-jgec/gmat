<template>
  <div id="app">
    <div class="headerSec">

<headerSec></headerSec>

    </div>
    <div class="mobienav">
<mobileNav></mobileNav>
    </div>
    <div class="routerDec">
 <transition name="slide" mode="out-in" ><router-view></router-view>
</transition>
    </div>
    <div class="footerSec">
     
      <footerSec></footerSec>
      
    </div>
  </div>
</template>

<script>

import headerSec from "./app/compnents/header/header_Sec";
import mobileNav from "./app/compnents/header/mobile_Nav"
import footerSec from "./app/compnents/footer/footer"


export default {
  data () {
    return {
      
    }
  },
  components:{
 headerSec,
 mobileNav,
 footerSec
  }
}
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,500&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@100;200&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@400;600;900&display=swap");

*{
padding: 0;
margin: 0;
box-sizing: border-box;



}

a{
  text-decoration: none;
}

#app {


}

.headerSec
{
  position: fixed;
}
.routerDec
{
  padding:70px 0px 0px 0px;
}



 /* responsnable header */

@media screen and (min-width: 420px) {
  .mobienav {
    display: none;
  }
 
}

@media screen and (max-width: 420px) {
   .mobienav
   {
     z-index: 5;
   }
  .headerSec {
    display: none;
  }
   .routerDec
  {
     padding:5px 0px 0px 0px;

  }
}




/* router animation */

.slide-enter-active{
animation:slide-in 500ms ease-out forwards ;
}
.slide-leave-active{
animation:slide-out 500ms ease-out forwards ;
}

@keyframes slide-in {
  from{
    transform:translateY(30px) ;
    opacity: 0;
  }
  to{
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from{
transform: translateY(0);
opacity: 1;
  }
  to{
transform:translateY(30px) ;
    opacity: 0;
  }
}


</style>
