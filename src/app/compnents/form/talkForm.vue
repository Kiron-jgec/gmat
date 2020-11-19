<template>
    <div>
     
              <div class="talk">
    
<loader v-if="loader"></loader>



<div class="successmsg" v-if="successMsg">
  <div class="mmsgContaibner">
   <h2>Message sent to Bob Successfully !</h2>
   <button @click="hideSuccessMgs">Okay</button>
  </div>
     
</div>

 


        <div class="formContainer">
              <h2>Let's Talk, Free 30 Minute Trial Class</h2>
          <form  @submit.prevent="contactForm()" method="post">
              <span v-if="errorMsg"> Something went wronge !  </span>
            <input type="text" placeholder="Name" name="name" v-model="name" required />
            <input type="email" placeholder="Email" name="Email" v-model="email" required />
            <textarea  id="" name="Massege" placeholder="Message" v-model="massege"  required></textarea> <br>
            <button type="submit" >Submit</button>
          </form>
        </div>
      </div>
    </div>
</template>


<script>
import axios from "axios"
import loader from "../additional_Pages/loader"
export default {
    data()
    {
        return{
loader:false,
successMsg:false,
errorMsg:false,

//form sec
name:null,
email:null,
massege:null
        }
    },
    components:{
       loader 
    },
      methods:{
     contactForm(){
       this.loader=true;
        const formData = new FormData();
       
       formData.append("Name",this.name);
       formData.append("Email",this.email);
       
       formData.append("Massege",this.massege);



   axios
          .post("https://formspree.io/f/mzbkvkzq", formData)
          .then(res => {
            this.loader=false;
            console.log(res);
            this.successMsg = true;
           
          })
          .catch(err => {
            this.loader=false;
            this.loader = false;
            this.errorMsg = true;

            // setTimeout(function() {
            //   this.errorMsg = false;
            // }, 5000);
            console.log(err.response);
          });
    
    
    
    
    },
    hideSuccessMgs()
    {
   this.successMsg=false;
   this.name="";
   this.email=""
   this.massege=""
    }
  }
}
</script>




<style scoped>
.t566-600 h2 {
  color: #111637;
  font-family: "Roboto";

  font-size: 33px;
  margin: 25px 0px;
  line-height: 40px;
  font-weight: 600;
}

.talk h2 {
  color: #111637;
  font-family: "Roboto";

  font-size: 33px;
  margin: 25px 0px;
  line-height: 40px;
  font-weight: 600;
}


.formContainer
{
   
    width: fit-content;
    margin: auto;
    padding: 10px;
border: 1px rgb(218, 218, 218) solid;
border-radius: 5px;
  border: 1px rgb(218, 218, 218) solid;
  -webkit-box-shadow: 1px 1px 15px 0px rgba(50, 50, 50, 0.26);
  -moz-box-shadow: 1px 1px 15px 0px rgba(50, 50, 50, 0.26);
  box-shadow: 1px 1px 15px 0px rgba(50, 50, 50, 0.26);
}
.formContainer input,.formContainer textarea 
{
    width: 90%;
    padding: 10px 8px;
    border-radius: 5px;
    font-size: 20px;
    margin: 10px 0px;
    outline: none;
    border: 1px rgb(173, 173, 173) solid;
  font-family: "Heebo", sans-serif;

}
.formContainer textarea 
{
   height: 120px;
  font-family: "Heebo", sans-serif;
 resize: none;

}

.formContainer button
{
    padding: 8px 10px;
      font-family: "Roboto";
 font-size: 20px;
 background: #111637;
 outline: none;
 border:1px #111637 solid;
 border-radius: 5px;
 color: white;
 cursor: pointer;
 margin-bottom: 10px;
}
.formContainer button:hover
{
    background:white ;
    color:#111637 ;
}











.successmsg
{
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.637);
 z-index: 10;
 display: flex;
 justify-content: center;
 align-items: center; 
}
.mmsgContaibner
{
  padding: 20px;
  background: white;
  border-radius: 5px;
  text-align: center;
}
.mmsgContaibner h2 
{
  color: #045fcf;
  font-size: 20px;
}
.mmsgContaibner button
{
  padding: 8px 15px;
  margin-top: 10px;
  border-radius: 5px;
  outline: none;
  border: none;
  background:  green;
  color: #ffffff;
  cursor: pointer;
}
</style>