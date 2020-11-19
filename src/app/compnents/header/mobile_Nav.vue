<template>
  <div class="mobileNav">
    <!-- Top Navigation Menu -->
    <div class="topnav">
      
    


        <router-link tag="a"  :to="{ name: 'home' }" active-class="active" exact>
         <img src="../../../assets/logo/gmat-new-logo.webp" alt="" />
        </router-link>
      <div id="myLinks" ref="usernameInput">
        <router-link tag="a" to="/" active-class="active" exact>
         HOME 
        </router-link>
        <span  @click="tutroeSec" >TUTORING&nbsp;&nbsp;<i class="fa fa-angle-down" aria-hidden="true"></i>   </span>
        <div class="tutorSec" v-if="tutor">
        <!-- <router-link
          tag="a"
          :to="{ name: 'in_Person' }"
          active-class="active"
          exact
        >
          In-Person
        </router-link>
        <router-link
          tag="a"
          :to="{ name: 'online' }"
          active-class="active"
          exact
        >
          Online
        </router-link> -->
 
                <router-link
                tag="a"
                :to="{ name: 't500_600' }"
                active-class="active"
                exact
              >
                500-600
              </router-link>
              <router-link
                tag="a"
                :to="{ name: 't600_700' }"
                active-class="active"
                exact
              >
                600-700
              </router-link>
                <router-link
                tag="a"
                :to="{ name: 't700' }"
                active-class="active"
                exact
              >
                700+
              </router-link>



</div>
        <router-link
          tag="a"
          :to="{ name: 'materials' }"
          active-class="active"
          exact
        >
          MATERIALS
        </router-link>

        <span @click="testimonialSec"
          >TESTIMONIALS &nbsp; <i class="fa fa-angle-down" aria-hidden="true"></i
        >   </span>

     <div class="reviews" v-if="testimonial">

        <router-link
          tag="a"
          :to="{ name: 'videos' }"
          active-class="active"
          exact
        >
          Videos
        </router-link>
        <router-link
          tag="a"
          :to="{ name: 'reviews' }"
          active-class="active"
          exact
        >
          Reviews
        </router-link>
        <router-link
          tag="a"
          :to="{ name: 'student_img' }"
          active-class="active"
          exact
        >
          Student Gallery
        </router-link>
</div>




        <router-link
          tag="a"
          :to="{ name: 'contact' }"
          active-class="active"
          exact
        >
          CONTACT
        </router-link>
         <router-link
          tag="a"
          :to="{name: 'about'}"
          active-class="active"
          exact
        >
          ABOUT
        </router-link>


        <router-link
          tag="a"
          :to="{name: 'billing'}"
          active-class="active"
          exact
        >
          BILLING
        </router-link>
      </div>
      <a href="javascript:void(0);" class="icon" @click="myFunction">
        <i class="fa fa-bars"></i>
      </a>
    </div>
  </div>
</template>



<script>
export default {

data()
{
    return{
tutor:false,
testimonial:false
    }
},


  methods: {
    myFunction() {
      var x = this.$refs.usernameInput;
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    },
  

  tutroeSec()
  {
      if(this.tutor==false)
      {
          this.tutor=true;
      }else
      {
          this.tutor=false;

      }
  },
  testimonialSec()
  {
      if(this.testimonial==false)
      {
          this.testimonial=true
      }
      else
      {
          this.testimonial=false
      }
  }},
};
</script>

<style scoped>


.topnav {
  overflow: hidden;
  background-color: rgb(236, 247, 252);
  position:relative;
  width: 100vw;
  z-index: 5;
}
.topnav img
{
    width: 200px;
}
.topnav #myLinks {
  display: none;
}

#myLinks span
{
    color: #006fee;
    font-size: 17px;
     font-family: "Heebo", sans-serif;
       padding: 14px 16px;
}
.topnav a {
 color: #006fee;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: block;
  font-family: "Heebo", sans-serif;

}

.topnav a.icon {
 
  display: block;
  position: absolute;
  right: 0;
  top: 10px;
}

/* mobime Navigation */



/* .active {
  background-color: #ffffff;
  color: white;
} */
</style>