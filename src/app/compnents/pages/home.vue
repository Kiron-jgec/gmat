<template>
  <div class="login">
    <div class="fontSection">
      <div class="imgSec" id="fontImg">
        <img src="../../../assets/web Img/img1.webp" alt="" />
      </div>
      <div class="textSectin">
        <h1>TAKE THE FIRST STEP</h1>
        <h2>OF YOUR JOURNY TO SUCCESS</h2>
        <div class="buttonSec">
         
            <router-link
          tag="a"
          :to="{ name: 'contact' }"
          active-class="active"
          exact
        >
          <button class="contactNow">Contact Now</button>
        </router-link>

         <router-link
          tag="a"
          :to="{ name: 'materials' }"
          active-class="active"
          exact
        >
          <button class="Joinnow">Join Now</button>
        </router-link>

          <a href="#"> </a>
        </div>
      </div>
    </div>


<!-- mobile landing Page -->

<div class="mobileHeadSec">

<div class="fontImg">

</div>
<div class="mtexatandbtn">
  <div class="mhContainer">
  <h1>TAKE THE FIRST STEP</h1>
        <h2>OF YOUR JOURNY TO SUCCESS</h2>
   <router-link
          tag="a"
          :to="{ name: 'contact' }"
          active-class="active"
          exact
        >
          <button class="contactNow">Contact Now</button>
        </router-link>


               <router-link
          tag="a"
          :to="{ name: 'materials' }"
          active-class="active"
          exact
        >
          <button class="Joinnow">Join Now</button>
        </router-link>
</div>
</div>


</div>













    <section>

      <div class="whyGmat">
        <h1>Why the Best GMAT Prep Focuses on
The Magic 700</h1>
<p>The average GMAT score is 561. However, the average of the top 25 MBA programs is 713. Meanwhile, the mean of the top 10 MBA programs is 727.<br>

MBA acceptance rates for top programs are highly selective, therefore scoring above 700 will place you beyond the 90th percentile and will increase your chances of standing out. And while your score is not the only metric universities look at, there is no doubt it can play a significant role in determining eligibility.</p>
      </div>
    </section>




    <section>

   <div class="gamtFormat">
     <h1>The GMAT Format: The 650 Hurdle</h1>
     <p>The GMAT purports to be simple, testing only high school level grammar and math, but it is far from that. Even with a strong understanding of the concepts, the GMAT will prove to be very difficult. Take the quantitative section where there are three tiers of questions: 200-500 (easy), 500-650 (medium), and 650-800 (hard).
To achieve a 700 or above, you need to answer the hard questions. At the easy and medium level, the problems are mostly straight-forward solving with a few reasoning questions. However, once past the medium level, the GMAT radically changes. At this point, the hard level questions not only require problem-solving but also focus on reasoning. These problems become vastly more complex and convoluted, even more so because many of the commonly taught tactics cease to be effective.</p>
   </div>

    </section>


<section>


<div class="whtgmatTutor">
  <h1>Why GMAT Tutor NYC?</h1>

<div class="whyContainer">
  <div class="whyNyc" v-for="(whyChose,idx) in whychose" :key="idx">
    
    <h3> {{whyChose.Text}} </h3><hr>
    <p> {{whyChose.Para}} </p>
</div>
  </div>
</div>




</section>


<section>
<div class="privateTutor">
  <h1>
    The Private GMAT Tutor Touch
  </h1>
  <p>
    Without an individually tailored GMAT study guide, focusing specifically on your situation, GMAT prep can be a shot in the dark. It is easy to focus on sparsely tested topics or to spend lots of time reviewing, only to find that applying the concepts is tougher than was shown in the GMAT sample questions.<br><br>

With us, everything is about you, whether it’s how you learn or providing you with the right GMAT study materials. For every concept we teach (for quant), there are at least five other ways of explaining it. We will do everything within our ability to present the information in a way that makes sense to you, regardless if it means starting from the absolute basics. When you work with us, you are adding a member to your team. We are here to support you every step of the way.
  </p>
</div>
  
</section>

<section>
  <div class="compare">

    <div class="imgSec">
        <img src="../../../assets/web Img/img2.webp" alt="" />
      </div>
      <div class="textSectin2">
        <h1>How We Compare to Other GMAT Prep Options</h1>
        <p>
          There are swaths of GMAT prep courses available between traditional companies such as <a href="https://www.manhattanprep.com/gmat/">Manhattan Prep</a>  and <a href="https://www.princetonreview.com/business/gmat-test-prep?ceid=newhp-nav"> Princeton Review</a> to their online competitors like <a href="https://gmat.targettestprep.com/tutoring">Target Test Prep</a>  and <a href="https://gmat.magoosh.com/">Magoosh</a> . When making any comparison, make sure that the products match up. Many big-name companies design their offerings for the vast majority of GMAT test-takers. The vast majority of test-takers don’t need a 700 or above. Most will not need above a 650, so understanding whom most products cater to is essential. <strong>  By comparison, GMAT Tutor NYC is in a tight niche, focused on very high-achieving students who are looking for something that will set them apart. To that end, we have developed proprietary techniques and materials that are not made generally available.</strong>
        </p>
        
      </div>
  </div>
</section>


<section>
<div class="studentAttend">
  <h1>Where Our Students Attend</h1>
<div class="logoContainer">

<div class="sloglogo">
  <a href="https://www.brown.edu/"><img src="../../../assets/web Img/c1.webp" alt=""></a>
</div>
<div class="sloglogo2">
<a href="https://www.columbia.com/"> <img src="../../../assets/web Img/c2.webp" alt=""></a> 

</div>
<div class="sloglogo3">
<a href="https://www.cornell.edu/">  <img src="../../../assets/web Img/c3.webp" alt=""></a>

</div>
<div class="sloglogo4">
 <a href="https://home.dartmouth.edu/"> <img src="../../../assets/web Img/c4.webp" alt=""></a>

</div>
<div class="sloglogo5">
 <a href="https://www.harvard.edu/"><img src="../../../assets/web Img/c5.webp" alt=""></a> 

</div>
<div class="sloglogo6">
 <a href="https://www.upenn.edu/"> <img src="../../../assets/web Img/c6.webp" alt=""></a>

</div>
<div class="sloglogo7">
 <a href="https://www.yale.edu/"> <img src="../../../assets/web Img/c7.webp" alt=""></a>

</div>
<div class="sloglogo8">
 <a href="https://www.upenn.edu/"> <img src="../../../assets/web Img/c8.webp" alt=""></a>

</div>


</div>


</div>


</section>

<section>
  <div class="cntact">
    <div class="text1S">
      <h1>Have GMAT Tutoring Questions?</h1>
    </div>
    <div class="text2se">
      <p>For further details on the student experience and what you can expect, check out our Online, In Person, and FAQ pages.

If you have any questions or are ready to get started, give us a call
 <strong>212.393.4647</strong> </p>
    </div>
  </div>
</section>






<section>

  <div class="testimonial">
    <h1>Testimonials from Students</h1>
    <div id="slider">
<ul>
  <li>
  <div class="slider-container">
    <h4> " I Got 760! "</h4>
    <p>
I cant believe that I have got 760. I couldn't have done it without your help.Thanks you so much! Going to miss tutoring those equations were finally getting fun for me haha. 48 quant 49 verbal 8 IR</p>
<h5>Allisin Bart</h5> <small> &nbsp;&nbsp;- Student</small>
<br>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>

  </div>
  </li>
  
  
    <li>
    <div class="slider-container">
       <h4>" Im In Shock i scored 740! "</h4>
    <p>“Bob, I scored 740 on the GMAT. I am in shock. Thank you so much for all your help!”</p>
    <h5>Morgan Mckee</h5><small>&nbsp;&nbsp; - Student</small>
    <br>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  </div>
  </li>
    <li>
    <div class="slider-container">
       <h4>" Right Tutor for GMAT "</h4>
    <p>
“I tried other tutors before i came to Bob. I have found the right tutor for GMAT. He is the man for GMAT Quantitative help. He explains shortouts and tips that are easily executable in GMAT.”</p>
<h5>Jack Eidman</h5><small>&nbsp;&nbsp; - Student</small>
<br>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  </div>
  </li>
    <li>
    <div class="slider-container">
       <h4>" Got Accepted in Columbia " </h4>
    <p>
I have some great news. I got accepted into Columbia. Thank you so much for all your help in preparing me for GMAT. Without your help, there was no way I could get the scores necessary to get into Columbia.</p>
<h5>Eli S.</h5><small> &nbsp;&nbsp; -Student</small>
<br>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  </div>
  </li>
  
</ul>
</div>
  </div>




<div class="otherTestimot">



<div class="testimontalcontent" v-for="(testimoni,idx) in testimonial" :key="idx">
  <h4>" {{testimoni.massege1}} "</h4>
  <br>
  <p>{{testimoni.massege2}}</p>
  <br>
  <h5>{{testimoni.name}}</h5>
  <small>&nbsp;&nbsp;&nbsp;-  {{testimoni.role}}</small>
<br>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i>
</div>


<div class="youtubevideos"  v-for="(testimoni,idx) in videosec" :key="idx">
<iframe :src="testimoni" class="youtubeVideosI"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



</div>





</div>









</section>






  </div>
</template>

<script>
export default {
  data(){
    return{

whychose:[
  {Text:"Over 40 years of experience",Para:"We have helped thousands of students, many of whom have scored within the GMAT 99th percentile. We have continually tested and refined our approach to an exact science, and our student’s scores prove it."},

  {Text:"Your time is valuable",Para:"The average 700 GMAT test-taker spends 120 hours studying, with many students studying for longer. In the quantitative section alone, there are 20 topics to cover, and the GMAT does not test them equally. When you work with a tutor, you know what to study, and we ensure your time is laser-focused to maximize GMAT improvement."},
  
  {Text:"Specially Designed Techniques ",Para:"We developed techniques drawn from concepts in engineering, math, and finance specifically,to tackle the hard problems (700+). That’s just for technical solving. We also teach the deep analytical techniques needed to excel at reasoning. Curious about which commonly taught techniques are not effective past 650? These include eye-balling, back-solving, approximation, smart numbers, and plugging in numbers, to name a few. To break 700, you need different techniques."},
  
  {Text:"The Best GMAT Practice Questions",Para:"Take your GMAT test prep to the next level using our database with over 40 years of real GMAT questions and answers. Create custom problem sets segmented by question-type and question-level. We also provide our students with real GMAT practice tests."}
],

testimonial:[
  {
    massege1:"My Score is 720!",
    massege2:"Bob, you are a great teacher, my score is 720. Thank so for all your help. I recommended you to my friends and will continue to recommend you to anyone I know who is taking the GMAT.",
    name:"Jerret Arkin",
    role:"Student"
  },
   {
    massege1:"47 in Quant with GMAT Score 700",
    massege2:"Bob, I got 48 in PS and 46 in DS, overall 47 in Quant. In verbal, I got 39. My GMAT score is 700. Thank you again for all your help. I know I could’nt have gotten that score without your help.",
    name:"Jessica Williams",
    role:"Lecturer, UN University"
  },
   {
    massege1:"Ben Long is the best",
    massege2:"My children and I LOVE Turitor! The courses are fantastic and the instructors are so fun and knowledgeable.",
    name:"Chris Bounds",
    role:"Student"
  },
     {
    massege1:"Achieved my Dream Score",
    massege2:"Hello Bob, I just got out of testing center. I am stunned I got 700 GMAT score with a 47 in Quant. There is no way I can get 700 wihtout your guidance and tutoring.  I never imagined I would ever achieve such a dream score. Thank you Bob for your help.",
    name:"Eli S",
    role:"Student"
  },

    {
    massege1:"Best Decision i made for my Future",
    massege2:"Before seeing Bob I had taken the SMU GMAT review course thinking that it would help me prepare, but I learned nothing. Bob has helped me prepare for the GMAT and seeing him was the best decision I made for my future.",
    name:"Sarah D.",
    role:"Student"
  },


  {
    massege1:"My Score is 740!",
    massege2:"I am living proof that you have no better choice than Bob for GMAT preparation; He brought my Quant score from a 28 to 49. As an English major with no college math cousework, I was extremely unprepared for the quantitative portion of the test which b-schools care so much about. Even the big-name test course I paid thousands for only brought my overall score to 610 in practice tests. With Bob’s help, my total Official GMAT score is a 740, with my quantitative score surpassing my verbal! The GMAT is deciding factor in your entrance to the best schools. Invest your time and money wisely – hire Bob.",
    name:"Elliott",
    role:"Student"
  },
],
videosec:[
  "https://www.youtube.com/embed/XavNjmMiiWQ","https://www.youtube.com/embed/lYt9hnLVc3M"
,"https://www.youtube.com/embed/pCYCdMpdwlg"
]

    }
  }
}
</script>

<style scoped>
section
{
  margin: 10% 0px;
 
}
/* mobile landing page  */


.fontSection,.compare,.cntact {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 41rem));
  grid-gap: 1rem;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  justify-content: center;
  align-items: center;
}
.imgSec {
}
.imgSec img {
  width: 100%;
}
.textSectin {
  text-align: center;
}
.textSectin h1 {
  color: #045fcf;
  font-family: "Heebo", sans-serif;
  font-size: 50px;
  margin: 10px 0px;
  line-height: 30px;
  font-weight: 550;
}
.textSectin h2 {
  font-family: "Heebo", sans-serif;

  font-size: 2vw;
  margin: 20px 0px;
  color: rgb(145, 145, 145);
  font-weight: 600;
}
.buttonSec {
  padding: 5px;
}
.buttonSec button {
  padding: 8px;
  border: none;
  outline: none;
  width: 25%;
  color: white;
    font-family: "Heebo", sans-serif;
 background: #111637;
  border-radius: 3px;
  margin: 0px 5px;
  font-size: 20px;
  cursor: pointer;
}


.buttonSec button:hover {
  background: #0c1027;
}




/* why gmat */

.whyGmat
{
  text-align: center;
  width: 80%;
  margin: auto;
}
.whyGmat h1,.gamtFormat h1,.whtgmatTutor h1,.privateTutor h1,.textSectin2 h1,.studentAttend h1,.text1S h1,.testimonial h1
{
  color: #045fcf;
   font-family: "Heebo", sans-serif;
  font-size: 35px;
  margin: 30px 0px;
  line-height: 40px;
  font-weight: 600;
}
.whyGmat p,.gamtFormat p,.whyNyc p,.privateTutor p,.textSectin2 p,.text2se p
{
  color: #636363;
   font-family: "Heebo", sans-serif;
  font-size: 22px;
  margin: 30px 0px;
  line-height: 30px;
  font-weight: 500;
  text-align: left;
}
.gamtFormat 
{
  width: 100%;
  padding: 30px;
  background: lightcoral;
  text-align: center;
  background: aliceblue;
}
.gamtFormat h1
{
    color: #2991f3; 

}
.gamtFormat p
{
columns: 100px 2;
color: #888888;
}

.whtgmatTutor
{
  width: 100%;
  padding: 30px;
  
  text-align: center;
   background: #ffffff;
}


.whyContainer
{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 38rem));
  grid-gap: 1rem;
  grid-column-gap: 20px;
  grid-row-gap: 40px; 
  justify-content: center;
}
.whyNyc,.testimontalcontent
{
  padding: 10px 15px;
  justify-content: space-between;
  background: aliceblue;
  border-radius: 6px;

border: 1px rgb(218, 218, 218) solid;
 

}
.whyNyc:hover
{
 -webkit-box-shadow: 1px 1px 15px 0px rgba(50, 50, 50, 0.26);
-moz-box-shadow:    1px 1px 15px 0px rgba(50, 50, 50, 0.26);
box-shadow:         1px 1px 15px 0px rgba(50, 50, 50, 0.26);
background: rgb(246,246,246);
}
.whyNyc h3 
{
  color: #2991f3; 
   font-family: "Heebo", sans-serif;

}
.whyNyc p
{
  text-align: left;
  font-size: 17px;

 color: #535353;

 text-align: left;
   font-family: "Heebo", sans-serif;
 font-size: 18px;
 color: rgb(126, 126, 126);
}
.whyNyc hr 
{
  border: 3px solid  #e24203;
  width: 20%;
  border-radius: 5px;
 margin: 5% auto;
}

.privateTutor
{
  width: 80%;
  margin: auto;
  text-align: center;
  padding: 10px 20px;
  border-radius: 10px;
   -webkit-box-shadow: 1px 1px 15px 0px rgba(50, 50, 50, 0.26);
-moz-box-shadow:    1px 1px 15px 0px rgba(50, 50, 50, 0.26);
box-shadow:         1px 1px 15px 0px rgba(50, 50, 50, 0.26);
border: 1px rgb(218, 218, 218) solid;
}
.textSectin2 h1
{

}
.studentAttend
{
  text-align: center;
  padding: 20px 10px;
}
.logoContainer
{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 9rem));
  grid-gap: 1rem;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  justify-content: center;
  align-items: center;
}
.logoContainer img
{
  width: 100%;
}
.cntact
{
background: #111637;
 padding: 20px 5px;
}
.text1S
{
padding: 20px;
text-align: center;
border-right: 3px white solid;
}
.text2se{
padding: 20px;

}
.text1S h1,.text2se p 
{
  color: white;
}






/* testimonial */

#slider, ul
{
	height: 300px;
}

#slider
{
	margin: auto;
	overflow: hidden;
	padding: 20px;
	margin-top: 10px;
	position: relative;
	width: 550px;
  z-index: -1;
}
#slider i 
{
  color: rgb(255, 153, 0);
}

#slider li
{
	float: left;
	position: relative;
	width: 600px;
	display: inline-block;
	height: 300px;
  text-align: left;
}
#slider li h4,.testimontalcontent h4
{
  font-size: 22px;
   font-family: "Heebo", sans-serif;
   color: #2991f3;
   font-weight: 600;
}
#slider li h5,.testimontalcontent h5
{
   font-size: 19px;
   font-family: "Heebo", sans-serif;
   color: #797979;
   font-weight: 600;
   display: inline;
}
#slider li small,.testimontalcontent small
{
  font-size: 14px;
   font-family: "Heebo", sans-serif;
   color: #797979;
}
#slider li p,.testimontalcontent p
{
  text-align: left;
   font-family: "Heebo", sans-serif;
 font-size: 20px;
 color: rgb(126, 126, 126);

}
.testimontalcontent i 
{
  color: rgb(255, 153, 0);

}

#slider ul
{
	list-style: none;
	position: absolute;
	left: 0px;
	top: 0px;
	width: 9000px;
	transition: left .2s linear;
	-moz-transition: left .2s linear;
	-o-transition: left .2s linear;
	-webkit-transition: left .2s linear;
	margin-left: -25px;
  font-family: open sans;
  color: #666;
}

/*** Content ***/

.slider-container
{
  color:#000;
	margin: 0 auto;
	padding: 0;
	width: 550px;
  min-height: 180px;
  text-align:center;
}

.slider-container h2
{
 	color: #fff;
}

.slider-container  p
{
	margin: 10px 25px;
	font-weight: semi-bold;
	line-height: 150%;
}

/*** target hooks ****/
@keyframes slide-animation {
	0% {opacity:0;}
	2% {opacity:1;}
	20% {left:0px; opacity:1;}
	22.5% {opacity:0.6;}
	25% {left:-600px; opacity:1;}
	45% {left:-600px; opacity:1;}
	47.5% {opacity:0.6;}
	50% {left:-1200px; opacity:1;}
	70% {left:-1200px; opacity:1;}
	72.5% {opacity:0.6;}
	75% {left:-1800px; opacity:1;}
	95% {opacity:1;}
	98% {left:-1800px; opacity:0;} 
	100% {left:0px; opacity:0;}
}
@-webkit-keyframes slide-animation {
	0% {opacity:0;}
	2% {opacity:1;}
	20% {left:0px; opacity:1;}
	22.5% {opacity:0.6;}
	25% {left:-600px; opacity:1;}
	45% {left:-600px; opacity:1;}
	47.5% {opacity:0.6;}
	50% {left:-1200px; opacity:1;}
	70% {left:-1200px; opacity:1;}
	72.5% {opacity:0.6;}
	75% {left:-1800px; opacity:1;}
	95% {opacity:1;}
	98% {left:-1800px; opacity:0;} 
	100% {left:0px; opacity:0;}
}

#slider ul
{
  -webkit-animation: slide-animation 20s infinite;
 animation: slide-animation 20s infinite
}

#slider ul:hover
{
	-moz-animation-play-state: paused;
  -webkit-animation-play-state: paused;
  	animation-play-state: paused;

}


/* Testimonials  */

.testimonial
{
  
  text-align: center;
}


#slider 
{
 border-radius: 10px;

    -webkit-box-shadow: 1px 1px 15px 0px rgba(50, 50, 50, 0.26);
-moz-box-shadow:    1px 1px 15px 0px rgba(50, 50, 50, 0.26);
box-shadow:         1px 1px 15px 0px rgba(50, 50, 50, 0.26);
border: 1px rgb(218, 218, 218) solid;
}

#slider ul 
{
  
  padding: 20px 0px ;

}


.otherTestimot
{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 25rem));
  grid-gap: 1rem;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  justify-content: center;
  margin: 10% 0px;
}
.testimontalcontent
{
  padding: 20px 20px;
  background: aliceblue;
}
.testimontalcontent:hover
{
 -webkit-box-shadow: 1px 1px 15px 0px rgba(50, 50, 50, 0.26);
-moz-box-shadow:    1px 1px 15px 0px rgba(50, 50, 50, 0.26);
box-shadow:         1px 1px 15px 0px rgba(50, 50, 50, 0.26);
background: rgb(246,246,246);
}
.youtubeVideosI
{
  background: red;
  width: 100%;
  height: 270px;
}


/* monile verson */
@media screen and (min-width: 420px) {
.mobileHeadSec
{
  display: none;
}
}

@media screen and (max-width: 420px) {
  
  .fontSection
  {
    display: none;
  }
 
.fontImg
{
  width: 100vw;
  height: 90vh;

  background-image: url("../../../assets/web Img/img1.webp");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position:top;
}

.mtexatandbtn
{
  width: 100vw;
  height: 90vh;
  padding: 20% 5%;
  position: absolute;
  top: 70px;
  background: rgba(0, 0, 0, 0.658);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.mtexatandbtn h1
{
color: #e7e7e7; 
font-size: 40px;
font-family: "Heebo", sans-serif;

}
.mtexatandbtn h2
{
  color: #ec4016; 
font-size: 32px;
font-family: "Heebo", sans-serif;
}
.mtexatandbtn button 
{
   padding: 8px 5px;
  border: none;
  outline: none;
  width: 40%;
  color: white;
    font-family: "Heebo", sans-serif;
 background: #111637;
  border-radius: 3px;
  margin: 20px 5px;
  font-size: 18px;
  cursor: pointer; 
}

.whyGmat h1,.gamtFormat h1,.whtgmatTutor h1,.privateTutor h1,.textSectin2 h1,.studentAttend h1,.text1S h1,.testimonial h1
{
 
  font-size: 28px;
  
}
.gamtFormat p 
{
columns: 100px 1;
}
.privateTutor
{
width: 95%;
}
.textSectin2
{
  padding: 10px 25px;
}
#slider
{
  display: none;
}


.testimontalcontent
{
  width: 95%;
  margin: auto;
 -webkit-box-shadow: 1px 1px 15px 0px rgba(50, 50, 50, 0.26);
-moz-box-shadow:    1px 1px 15px 0px rgba(50, 50, 50, 0.26);
box-shadow:         1px 1px 15px 0px rgba(50, 50, 50, 0.26);
background: rgb(246,246,246);
}







  }
</style>