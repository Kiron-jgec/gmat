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

  // const in_Person= resolve => {
  //   require.ensure(["../compnents/pages/in_person.vue"], () => {
  //     resolve(require("../compnents/pages/in_person.vue"));
  //   });
  // };

  
  //online 

  // const online= resolve => {
  //   require.ensure(["../compnents/pages/online.vue"], () => {
  //     resolve(require("../compnents/pages/online.vue"));
  //   });
  // };




  // Tutoring 
  const t500_600= resolve => {
    require.ensure(["../compnents/pages/t500-600.vue"], () => {
      resolve(require("../compnents/pages/t500-600.vue"));
    });
  };

  const t600_700= resolve => {
    require.ensure(["../compnents/pages/t600-700.vue"], () => {
      resolve(require("../compnents/pages/t600-700.vue"));
    });
  };

  const t700= resolve => {
    require.ensure(["../compnents/pages/t700.vue"], () => {
      resolve(require("../compnents/pages/t700.vue"));
    });
  };



  //about us 
  
  const about= resolve => {
    require.ensure(["../compnents/pages/about_us.vue"], () => {
      resolve(require("../compnents/pages/about_us.vue"));
    });
  };











  
  // Materials

  const materials = resolve => {
    require.ensure(["../compnents/pages/materials.vue"], () => {
      resolve(require("../compnents/pages/materials.vue"));
    });
  };

  //videos


  const videos = resolve => {
    require.ensure(["../compnents/pages/videos.vue"], () => {
      resolve(require("../compnents/pages/videos.vue"));
    });
  };




    //reviews


    const reviews = resolve => {
      require.ensure(["../compnents/pages/reviews.vue"], () => {
        resolve(require("../compnents/pages/reviews.vue"));
      });
    };




// student img
    const student_img = resolve => {
      require.ensure(["../compnents/pages/student_img.vue"], () => {
        resolve(require("../compnents/pages/student_img.vue"));
      });
    };



    // student img
    const contact = resolve => {
      require.ensure(["../compnents/pages/contact.vue"], () => {
        resolve(require("../compnents/pages/contact.vue"));
      });
    };
  
      // Faq
      const faq = resolve => {
        require.ensure(["../compnents/pages/FaQ.vue"], () => {
          resolve(require("../compnents/pages/FaQ.vue"));
        });
      };
    

       // billing
       const billing = resolve => {
        require.ensure(["../compnents/pages/billing.vue"], () => {
          resolve(require("../compnents/pages/billing.vue"));
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

          // {
          //   path: "/In-Person",
          //   component: in_Person,
          //   name: "in_Person",
            
          // },
        //online

        
        // {
        //   path: "/online",
        //   component:online,
        //   name: "online",
          
        // },


       // tutoring 500-600
       {
        path: "/tutoring_500-600",
        component:t500_600,
        name: "t500_600",
        
      },

           // tutoring  600-700
           {
            path: "/tutoring_600-700",
            component:t600_700,
            name: "t600_700",
            
          },

               // tutoring 700+
               {
                path: "/tutoring700+",
                component:t700,
                name: "t700",
                
              },
    






        //materials 
        {
          path: "/materials",
          component:materials,
          name: "materials",
          
        },



        {
          path: "/about",
          component:about,
          name: "about",
          
        },

     

     



    





        
        //videos 
        {
          path: "/videos",
          component:videos,
          name: "videos",
          
        },

           //reviews
           {
            path: "/reviews",
            component:reviews,
            name: "reviews",
            
          },


              //student_img
              {
                path: "/student_img",
                component:student_img,
                name: "student_img",
                
              },

                  //contact
                  {
                    path: "/contact",
                    component:contact,
                    name: "contact",
                    
                  },

                    //faq
                    {
                      path: "/Faq",
                      component:faq,
                      name: "faq",
                      
                    },

                     //billing
                     {
                      path: "/billing",
                      component:billing,
                      name: "billing",
                      
                    },





    // not found page
    { path: "/error", component: not_Found_page },

    { path: "*", redirect: "/error" }


    ]


  })





  export default router;