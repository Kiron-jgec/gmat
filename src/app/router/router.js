import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


//lazy routeing 

  // import the files


//Home

const home= resolve => {
    require.ensure(["../compnents/pages/home.vue"], () => {
      resolve(require("../compnents/pages/home.vue"));
    });
  };

  // in person
  const in_Person= resolve => {
    require.ensure(["../compnents/pages/in_person.vue"], () => {
      resolve(require("../compnents/pages/in_person.vue"));
    });
  };







  

  // router not found err  page 

  const  not_Found_page= resolve => {
    require.ensure(["../compnents/additional_Pages/not_Found.vue"], () => {
      resolve(require("../compnents/additional_Pages/not_Found.vue"));
    });
  };






  const router = new VueRouter({
    // user Scroll contol
    scrollBehavior(to, form, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }
      if (to.hash) {
        return { selector: to.hash };
      }
      return { x: 0, y: 0 };
    },
    mode: "history",
  
    //routers
  
    routes: [




        // Home

        {
            path: "/",
            component: home,
            name: "home",
            
          },

          //in person

          {
            path: "/In-Person",
            component: in_Person,
            name: "in_Person",
            
          },




    // not found page
    { path: "/error", component: not_Found_page },

    { path: "*", redirect: "/error" }


    ]


  })





  export default router;