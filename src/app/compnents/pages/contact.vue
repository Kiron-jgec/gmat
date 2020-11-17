<template>
    <div class="contact">

    

         <div class="contactform">
         <h2>For Free Consultation</h2>
           <div class="forminputs">
             <label> 
             <input type="text" placeholder="Name">
              </label>
              <label>

                  <input type="number" placeholder="Phone no">
              </label>
              <label>
             <input type="email" placeholder="Email">
              </label>
              <label>
              
              <textarea name="" id="" placeholder="Massege" ></textarea>
              </label>
              <button>Send</button>
           </div>
           
            
            <div class="socialMedia">
          
           

           
           <a href="https://www.facebook.com/gmattutornyc">   <i class="fa fa-facebook" aria-hidden="true"></i> </a>
           
            
           <a href="https://twitter.com/gmattutornyc">  <i class="fa fa-twitter" aria-hidden="true"></i></a>
           



            </div>
          
         </div>





            <div class="bio">
         
         <div class="bioSec">
 <img src="../../../assets/web Img/Bob-Chaparala.jpg" alt="">

 <h2>Bob Chaparala</h2>
 <p>M.S., M.B.A., Ph.D., PfMP, PgMP, PMP</p>
         </div>
         </div>







         <div class="adderssSec">
           <div class="addressDiv">
           <div class="addresstext">
               <h4><i class="fa fa-map-marker" aria-hidden="true"></i> Address</h4>
           <span>31 West 34th Street, 7th Floor, </span>
           <span> New York ,NY, 10001</span>

           </div>
            
          <div class="contactSec">
               <h4><i class="fa fa-volume-control-phone" aria-hidden="true"></i> Contact</h4>

            <span>Email :  <a href="info@gmattutor.nyc">info@gmattutor.nyc</a> </span>
            <span>Whats app :(212) 393-4647</span>
          </div>
          <div class="contactSec">
              <h4><i class="fa fa-clock-o" aria-hidden="true"></i> Business Hours</h4>
            <span>Monday - Friday: 7:00am-11:00pm EST </span>
            <span>Sunday and Saturday: 7:00am-11:00pm EST</span>
          </div>
           </div>
         </div>
        

    </div>
</template>

<style scoped>
.contact
{
  width: 100%;
  
}

.bio
{
width: 100%;
height: 100vh;
padding: 0px 4%;

}
.bioSec
{
padding: 4%;

width: fit-content;
-moz-width:fit-content; 
margin-left: 15%;
text-align: center;
position: absolute;
z-index: -5;
}

.bioSec img 
{
    width: 200px;
    height: 200px;
    border-radius: 50%;
}
.bioSec p 
{
 color: #888888;
   font-family: "Heebo", sans-serif;
  font-size: 18px;
  margin: 5px 0px;
  line-height: 30px;
  font-weight: 500;
   font-family: "Roboto";
    
}

.contactform
{
  position: absolute;
   bottom: 50px;
  right:4%;
  z-index: -5;
  background: rgb(255, 255, 255);
  padding: 20px 20px 10px 20px;
  width: 32%;
  border-radius: 5px;
  border: 1px rgb(202, 202, 202) solid;

}
.contactform h2,.bioSec h2 
{
    font-family: "Roboto";
    color: #045FCF;

}
.forminputs span
{
  display: block;
  margin: 6px 0px;
}
.forminputs input
{
  display: block;
  width: 100%;
  padding: 9px 8px;
  border: 1px rgb(202, 202, 202) solid;
  border-radius: 3px;
  outline: none;
  font-size: 16px;
  margin: 20px 0px;
  font-family: "Heebo", sans-serif;

}
.forminputs textarea
{
  width: 100%;
  height: 150px;
  resize: none;
  border-radius: 3px;
  border: 1px rgb(202, 202, 202) solid;
  outline: none;
  font-size: 16px;
  padding: 8px;
  
  font-family: "Heebo", sans-serif;

}
.forminputs button
{
  width: 100%;
  padding: 10px;
  outline: none;
  border: none;
   background: linear-gradient(
    90deg,
    rgb(255, 160, 44) 0%,
    rgb(228, 127, 5) 100%
  );
  color: white;
  font-size: 14px;
  margin-top: 10px ;
 cursor: pointer;
  border-radius: 3px;
  font-family: "Heebo", sans-serif;

}

.forminputs button:hover
{
  background: linear-gradient(
    90deg,
    rgb(228, 127, 5) 0%,
    rgb(255, 160, 44) 100%
  );
}


.socialMedia
{
  width: 100%;
  text-align: center;

  padding: 10px;
}
.socialMedia i
{
  font-size: 20px;
  margin: 0px 5px;
    color: #045FCF;

}









.adderssSec
{
  position: absolute;
  bottom: 50px;
  left: 2%;
  background: rgb(255, 255, 255);
  padding: 20px;
  width: 60%;
  border-radius: 5px;
  border: 1px rgb(202, 202, 202) solid;

}
.addressDiv
{
  display: grid;
  justify-content: center;
 
  grid-template-columns: repeat(auto-fit, minmax(12rem, 15rem));

}

.addressDiv span
{
  display: block;
  font-family: "Heebo", sans-serif;
 color: rgb(134, 134, 134);
 margin: 5px 0px;
}
.addressDiv h4 
{
 font-family: "Roboto";
    color: #045FCF;   
}
.addressDiv i 
{
    font-size: 20px;
}


@media screen and (max-width: 420px) {

.contactform
{
  position: static;
  width: 100%;
  margin: auto;
}
.adderssSec
{
  position: static;
width: 95%;
margin: auto;
}
.addresstext,.contactSec
{
  margin: 4% 0%;
}
.bio
{
height: fit-content;
padding: 4%;
}
}

</style>