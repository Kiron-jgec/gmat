<template>
  <div id="app">
    <div class="headerSec">

<headerSec></headerSec>

    </div>
    <div class="routerDec">
<router-view></router-view>

    </div>
  </div>
</template>

<script>

import headerSec from "./app/compnents/header/header_Sec";



export default {
  data () {
    return {
      
    }
  },
  components:{
 headerSec
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@100;200&display=swap');

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
  padding:90px 0px 0px 0px;
}


</style>
