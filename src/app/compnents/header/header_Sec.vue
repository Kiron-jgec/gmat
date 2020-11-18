<template>
  <div class="headerSec">
    <a href="/"><img src="../../../assets/logo/gmat-new-logo.webp" alt="" /></a>

    <header>
      <nav>
        <router-link to="/" active-class="active" exact>
          <a> HOME </a>
        </router-link>

        <!-- dropdown section  -->
        <div class="dropdown" @mouseover="dropDown=true" @mouseleave="dropDown=false">
         
          <span  >TUTORING <i class="fa fa-angle-down" aria-hidden="true"></i
          ></span>

          <div class="dropdown-content" v-if="dropDown"  @mouseover="dropDown=true" >
            <div class="cloud">
              <router-link
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
              </router-link>
            </div>
          </div>
        </div>

        <router-link
          tag="a"
          :to="{ name: 'materials' }"
          active-class="active"
          exact
        >
          MATERIALS
        </router-link>

        <!-- dropdown section  -->
        <div class="dropdown" @mouseover="dropDown2=true" @mouseleave="dropDown2=false">
          <span @click="dropdownShowHide2"
            >TESTIMONIALS <i class="fa fa-angle-down" aria-hidden="true"></i
          ></span>

          <div class="dropdown-content" v-if="dropDown2" @mouseover="dropDown2=true">
            <div class="cloud">
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
          </div>
        </div>

        <router-link
          tag="a"
          :to="{name: 'contact'}"
          active-class="active"
          exact
        >
          CONTACT
        </router-link>
      </nav>
    </header>
    <div class="contacSec">
    <a href="tel:212 393 4647"> <button>
        <i class="fa fa-phone phoneNo" aria-hidden="true"></i
        ><strong> 212 393 4647</strong>
      </button>
      </a> 
      <a href="https://wa.me/+12123934647">
      <button>
        <i class="fa fa-whatsapp whatsapp" aria-hidden="true"></i>
      </button>
      </a>
      <a href="mailto:info@gmattutor.nyc">
      <button>
        <i class="fa fa-envelope emialSec" aria-hidden="true"></i>
      </button></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropDown: false,
      dropDown2:false
      // host name
    };
  },
  watch: {
    $route(to, from) {
      this.serviceName = to.params.serviceName;
    },
  },
  methods: {
    dropdownShowHide() {
      // if (this.dropDown == false) {
      //   this.dropDown = true;
      // } else {
      //   this.dropDown = false;
      // }
       this.dropDown = ! this.dropDown
    },

     dropdownShowHide2() {
      if (this.dropDown2 == false) {
        this.dropDown2 = true;
      } else {
        this.dropDown2 = false;
      }
    },
  },
};
</script>

<style scoped>

.headerSec {
  position: fixed;
  width: 100%;
  height: 65px;
  padding: 2px 50px;
  display: flex;
  z-index: 10;
  align-items: center;
  background: #ffffff;
  justify-content: left;
}
.headerSec img {
  width: 200px;
}

nav {
  font-family: "Heebo", sans-serif;

  margin-left: 50px;
  z-index: 5;
}
nav a,nav  span {
  color: #006fee;
  margin: 0px 2px;
 cursor: pointer;
  padding: 8px 4px;
  font-size: 15px;
  text-decoration: bold;
  z-index: 5;
  font-weight: 600;
 
}
nav a:hover {
   border-bottom: 2px #b1b0b0 solid;
}


.contacSec {
  position: absolute;
  right: 50px;
}
.headerSec button {
  padding: 8px 10px;
  font-family: "Heebo", sans-serif;
  outline: none;
  border: none;
  cursor: pointer;
  background: #11163700;

  border-radius: 3px;
  font-size: 1.5vw;
}

.phoneNo {
  font-size: 1.5vw;
  color: #045fcf;
}
.whatsapp {
  color: rgb(2, 197, 2);
  font-size: 22px;
}
.emialSec {
  color: black;
  font-size: 20px;
}
/* dropdwn */
.dropbtn {
  color: #173AFF;
  padding: 1px;

  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  width: fit-content;
  position: absolute;
  left: 0;
  top: 30px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 5;
  padding: 15px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 12rem));
  grid-gap: 1rem;
  /* grid-column-gap: 10px;
  grid-row-gap: 40px; */
}
.dropdown-content h4 {
  font-family: "Heebo", sans-serif;
  color: #9b9b9b;
}
.dropdown-content a {
  color: black;
  margin: 8px 0px;
  text-decoration: none;
  display: block;
  font-family: "Heebo", sans-serif;
  color: #0a3f80;
  font-size: 17px;
  width: fit-content;
  border-bottom: 2px #ffffff solid;
  transition: 1s;
}

/* .dropdown-content a:hover {
  border-bottom: 2px #cf7404 solid;
} */

.active {
  border-bottom: 2px #b1b0b0 solid;
}
/* .dropdown:hover .dropbtn {background-color: #3e8e41;} */
</style>
