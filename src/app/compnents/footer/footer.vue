<template>
  <div class="footer">
    <div class="footernav">
      <div class="footernav0">
        <a href="/"
          ><img src="../../../assets/logo/gmat-new-logo.webp" alt=""
        /></a>

        <h1>One-On-One Tutoring</h1>
      </div>
      <div class="footernav1">
        <h4><i class="fa fa-map-marker" aria-hidden="true"></i> Address</h4>
        <span>31 West 34th Street, 7th Floor, </span>
        <span> New York ,NY, 10001</span>
        <h4>
          <i class="fa fa-volume-control-phone" aria-hidden="true"></i> Contact
        </h4>

        <span
          >Email : <a href="info@gmattutor.nyc">info@gmattutor.nyc</a>
        </span>
        <span>Whats app :(212) 393-4647</span>
      </div>

      <div class="footernav2">
        
          <h4>
            <i class="fa fa-clock-o" aria-hidden="true"></i> Business Hours
          </h4>
          <span>Monday - Friday: 7:00am-11:00pm EST </span>
          <span>Sunday and Saturday: 7:00am-11:00pm EST</span>
        
      </div>

      <div class="footernav3">
        <a href="https://www.facebook.com/gmattutornyc"
          ><i class="fa fa-facebook-square" aria-hidden="true"></i>
        </a>

        <a href="https://twitter.com/gmattutornyc"
          ><i class="fa fa-twitter-square" aria-hidden="true"></i
        ></a>

        <a href="https://www.linkedin.com/in/dr-bob-chaparala-m-s-m-b-a-ph-d-pfmp-pgmp-pmp-4289a713/"
          ><i class="fa fa-linkedin-square" aria-hidden="true"></i
        ></a>
 <br><br>
        <span>
          &copy; {{ date.getFullYear() }} - GMAT Tutor. All rights
          reserved.</span
        >
        <span>Developed by <a href="https://web.bymond.site/">Bymond</a> </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logo: "https://bymond.com/wp-content/uploads/2019/08/bymond_logo-4.webp",
      date: new Date(),
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
a:hover {
  color: #045fcf;
}
.footer {
  
  background: rgb(240, 244, 250);
  padding: 20px;
}

.footernav0 h1
{
  
    color: #045fcf;
    font-size: 28px;
    margin: 4% 0%;
    font-family: "Heebo", sans-serif;
}
.footernav h4 
{
  color: #045fcf;
   font-family: "Heebo", sans-serif;
}
.footernav span
{
  display: block;
  color: #666666;
  font-family: "Heebo", sans-serif;

}



.footernav0 img {
  width: 100%;
}
.textLearn {
  width: 60%;
  display: inline-block;

  text-align: left;
}
.textLearn h2 {
  color: rgb(255, 255, 255);
  font-family: Arial black;
  font-size: 5vw;
}
.footernav {
  
 

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 20rem));

  justify-content: center;
 
}
.footernav2 {
  text-align: left;
}
.footernav2 span {
  display: block;
  font-family: "Heebo", sans-serif;
}
.footernav3 {
  text-align:left;
}
.footernav3 i {
  font-size: 20px;
  margin: 0px 5px;
  color: #045fcf;
  float: right;
}

.footernav0,
.footernav1,
.footernav2,
.footernav3
{
  padding: 0px 20px;
}

</style>
