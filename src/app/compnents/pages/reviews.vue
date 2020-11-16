<template>
  <div class="revies">
    <h1>Testimonials from Students</h1>

    <div class="otherTestimot">
      <div
        class="testimontalcontent"
        v-for="(testimoni, idx) in testimonial"
        :key="idx"
      >
        <h4>" {{ testimoni.massege1 }} "</h4>
        <br />
        <p>{{ testimoni.massege2 }}</p>
        <br />
        <h5>{{ testimoni.name }}</h5>
        <small>&nbsp;&nbsp;&nbsp;- {{ testimoni.role }}</small>
        <br />
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
      </div>

    
    </div>
  </div>
</template>


<script>
export default {
    data(){
        return{
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
  },{
     massege1:"Ben Long is the best",
    massege2:"My children and I LOVE Turitor! The courses are fantastic and the instructors are so fun and knowledgeable.",
    name:"Chris Bounds",
    role:"Student"
  },{
     massege1:"Achieved my Dream Score",
    massege2:"Hello Bob, I just got out of testing center. I am stunned I got 700 GMAT score with a 47 in Quant. There is no way I can get 700 wihtout your guidance and tutoring.  I never imagined I would ever achieve such a dream score. Thank you Bob for your help.",
    name:"Eli S",
    role:"Student"
  },
],
        }
    }
}
</script>



<style scoped>


.revies {
  padding:2%  4%;
  text-align: center;
}
.revies h1 {
  font-family: "Roboto";
  font-size: 35px;
  color: #2991f3;
  font-weight: 700;
}


.otherTestimot
{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 35rem)); 
  grid-column-gap: 30px;
  grid-row-gap: 50px;
  justify-content: center;
  margin: 10% 0px;
}


.testimontalcontent
{
  padding: 20px 20px;
  background: rgb(242, 247, 250);
  border: 1px rgb(202, 202, 202) solid;
  border-radius: 10px;
}
.testimontalcontent:hover
{
 -webkit-box-shadow: 1px 1px 15px 0px rgba(50, 50, 50, 0.26);
-moz-box-shadow:    1px 1px 15px 0px rgba(50, 50, 50, 0.26);
box-shadow:         1px 1px 15px 0px rgba(50, 50, 50, 0.26);
background: rgb(246,246,246);
}

.testimontalcontent i 
{
  color: rgb(255, 153, 0);

}

.testimontalcontent h4
{
  font-size: 22px;
   font-family: "Heebo", sans-serif;
   color: #2991f3;
   font-weight: 600;
}
p 
{
     color: #636363;
   font-family: "Heebo", sans-serif;
  font-size: 22px;
  margin: 30px 0px;
  line-height: 30px;
  font-weight: 500;
  text-align: left;
}

.testimontalcontent h5
{
   font-size: 19px;
   font-family: "Roboto";
   color: #797979;
   font-weight: 600;
   display: inline;
}
.testimontalcontent small
{
  font-size: 14px;
   font-family: "Heebo", sans-serif;
   color: #797979;
}

@media screen and (max-width: 420px) {
.testimontalcontent
{
 -webkit-box-shadow: 1px 1px 15px 0px rgba(50, 50, 50, 0.26);
-moz-box-shadow:    1px 1px 15px 0px rgba(50, 50, 50, 0.26);
box-shadow:         1px 1px 15px 0px rgba(50, 50, 50, 0.26);
background: rgb(246,246,246);
}

.revies h1 
{
  font-size: 30px;
}
}
</style>
