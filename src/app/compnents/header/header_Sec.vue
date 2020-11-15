<template>
  <div class="headerSec">
    <a href="/"><img src="../../../assets/logo/gmat-new-logo.png" alt=""/></a>

    <header>
      <nav>
        <router-link to="/" active-class="active" exact>
          <a> HOME </a>
        </router-link>

        <!-- dropdown section  -->
        <div class="dropdown">
          <a class="dropbtn" @click="dropdownShowHide"
            >TUTORING <i class="fa fa-angle-down" aria-hidden="true"></i
          ></a>

          <div class="dropdown-content" v-if="dropDown">
            <div class="cloud">
               <router-link :to="{ name: 'in_Person' }" active-class="active" exact>
          <a>In-Person</a>
        </router-link>
              <a href="">Online</a>
            </div>
          </div>
        </div>

        <router-link :to="{ name: 'Home' }" active-class="active" exact>
          <a>MATERIALS</a>
        </router-link>

        <router-link :to="{ name: 'projects' }" active-class="active" exact>
          <a>TESTIMONIALS </a>
        </router-link>

        <router-link :to="{ name: 'contact' }" active-class="active" exact>
          <a> ABOUT </a>
        </router-link>
        <router-link :to="{ name: 'contact' }" active-class="active" exact>
          <a> CONTACT </a>
        </router-link>
      </nav>
    </header>
       <button> <strong>212 393 4647</strong> </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropDown: false
      // host name
    };
  },
  watch: {
    $route(to, from) {
      this.serviceName = to.params.serviceName;
    }
  },
  methods: {
    dropdownShowHide() {
      if (this.dropDown == false) {
        this.dropDown = true;
      } else {
        this.dropDown = false;
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@400;600;900&display=swap");

.headerSec {
  position: fixed;
  width: 100%;
  height: 90px;
  padding: 2px 50px;
  display: flex;
  z-index: 3;
  align-items: center;
  background: #111637;
  
 
}
.headerSec img {
  width: 200px;
}

nav {
  font-family: "Heebo", sans-serif;

  margin-left: 50px;
}
nav a {
  color:#ffdc17;
  margin: 0px 10px;
  font-size: 15px;
  text-decoration: bold;
}
nav a:hover {
  border-bottom: 2px #cf7404 solid;
}
.headerSec button {
  position: absolute;
  right: 50px;
  padding: 8px 30px;
  font-family: "Heebo", sans-serif;
  outline: none;
  border: none;
  cursor: pointer;
  background: red;
  color: white;
  border-radius: 3px;
}
.headerSec button:hover {
 background: rgb(233, 2, 2);
}

/* dropdwn */
.dropbtn {
  color: #FFD700;
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
  top: 40px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
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
  color: red;
  border-bottom: 2px #cf7404 solid;
}
/* .dropdown:hover .dropbtn {background-color: #3e8e41;} */
</style>
