<template>
    <div class="faq">
        <h1>FAQ</h1>


        <div class="daqContainer" v-for="(faQ,idx) in faq" :key="idx">
           <h2> {{idx+1}}. {{faQ.q}} </h2>
           <p>{{faQ.a}}</p>
        </div>
    </div>
</template>


<script>
export default {
    data()
    {
        return{
            faq:[
                {
                    q:"I have been out of school six years, I have forgotten almost everything, can I still quickly recover and excel?",

                    a:"Yes. Many of our students have been in a similar situation. We can help you recover your skills faster by providing specialized instruction. We will guide you through the relearning process and save you a lot of time and money."
                    
                },



                 {
                    q:"Are your techniques any different than the other major tutors?",
                    
                    a:"We have been tutoring for over 35 years. Our techniques were developed by drawing from an eclectic range of academic disciplines specially for the GMAT. Many of these techniques were designed by our founder Bob as a faster alternative to the conventional methods being taught. They been iteratively tested and refined over the course of three decades."
                    
                },


                 {
                    q:"Do you offer help with both quant and verbal?",
                    
                    a:"Yes, we do both."
                    
                },


                 {
                    q:"I work a lot; can your schedule accommodate me?",
                    
                    a:"Many of our students work. We are open from 6:00am-11:00pm, we will fit you into our schedule."
                    
                },


                 {
                    q:"Why should I choose you over other companies? What difference do you make?",
                    
                    a:"All the difference! For starters, our techniques are the most effective and not taught elsewhere. Our tutoring is completely personalized, like a personal guide. We monitor your progress at each stage and adapt accordingly. Moreover, we have a huge database of over 20,000 questions that cover every aspect that is tested in GMAT."
                    
                },


                 {
                    q:"I am really, really bad at math, I still want to go to a top business school, is there any hope?",
                    
                    a:"You are in luck, there is. Over the years we have had students that have made tremendous turnarounds, initially scoring below 400 and later on scoring above 700. But, make no mistake, it will require significant effort on your part. If you are behind, you are going to have to put in extra effort and truly go the extra mile. If you have the mental fortitude and drive, we have the tools to guide you."
                    
                },


                 {
                    q:"What is included with online?",
                    
                    a:"We let our students record all of our sessions and we send the materials in advance. Online is highly focused learning."
                    
                },


                 {
                    q:"Do you provide worksheet and homework problems for each concept?",
                    
                    a:"Yes, we have one worksheet for classwork and two worksheets for homework."
                    
                },


                 {
                    q:"How long should students’ study with a tutor?",
                    
                    a:"It depends: 1) your current level, and 2) your GMAT goal. Normally it takes three months of preparation to achieve a respectable score. Again, this is dependent upon your specific situation."
                    
                },


                 {
                    q:"Do you assign homework and practice questions?",
                    
                    a:"Yes."
                    
                },


                 {
                    q:"How long is each session?",
                    
                    a:"Each session is two hours. We have found over three decades that one hour is not enough to make substantive progress and in excess of two hours becomes less productive."
                    
                },

                  {
                    q:"How many times a week do you recommend meeting?",
                    
                    a:"At least once per week to stay focused on the GMAT, however, we recommend two sessions to make the most progress in the least amount of time."
                    
                },  {
                    q:"Do you offer trial classes?",
                    
                    a:"We provide a 30-minute trial class to prospective students in which we will administer a short assessment. After which we will sit together to formulate a curriculum for when the formal sessions begin."
                    
                },  {
                    q:"Do you assess my skills before we start the program?",
                    
                    a:"Yes, we will administer a short assessment to gauge your GMAT abilities."
                    
                },  {
                    q:"What is the pricing structure?",
                    
                    a:"Based on your needs and your level we will mutually agree upon the price in our first meeting."
                    
                },



                 {
                    q:"Do you provide any guarantees?",
                    
                    a:"If you have already scored 400-450, we can guarantee a 200-point improvement.If you have already scored 450-550, we can guarantee a 150-point improvement.If you have already scored 550-650, we can guarantee a 100-point improvement."
                    
                },

                 {
                    q:"How many hours do I have to study at home?",
                    
                    a:"During the week 1 hour a day. On the weekend 2 hours a day."
                    
                },

                 {
                    q:"What payment methods do you accept?",
                    
                    a:"We accept Venmo, Paypal, Zelle, and check payments."
                    
                },

                 {
                    q:"I am new to GMAT, should I prepare on my own before coming to see you?",
                    
                    a:"You don’t need to prepare prior to meeting with us. We offer our students a clearly designed study path to maximize their time and effort."
                    
                },

                 {
                    q:"I don’t do well on standardized tests, can you help?",
                    
                    a:"Many students share this apprehension. The GMAT involves learning a lot of techniques and knowing how to apply them. Something less talked about is the stamina, confidence, and focus required to excel at the GMAT. We help prepare our students for these other aspects of the GMAT in a few ways. We start with 2-hour tutoring sessions which coupled with periodic practice exams will boost your stamina. We go through great lengths to increase your confidence by exposing you to every possible variant of every problem so that on test day everything will look familiar."
                    
                }, 
                {
                    q:"Should I take the GMAT or GRE?",
                    
                    a:"If you have your mind set on business school we recommend that you take the GMAT."
                    
                }, 
                {
                    q:"I have time and a half does this help me?",
                    
                    a:"Time is very important on the GMAT, every minute helps."
                    
                },


            ]
        }
    }
}
</script>


<style scoped>
.faq
{

     padding: 2% 4%;
    text-align: center;
}
.faq h1 
{
    color: #045fcf;
  font-family: "Heebo", sans-serif;
  font-size: 40px;
  margin: 10px 0px;
  line-height: 30px;
  font-weight: 550;  
}
.faq h2 
{
  color: #111637;
  font-family: "Roboto";

  font-size: 28px;
  margin: 25px 0px;
  line-height: 40px;
  font-weight: 600;  
}
.faq p 
{
   color: #636363;
  font-family: "Heebo", sans-serif;
  font-size: 22px;
  margin: 30px 0px;
  line-height: 30px;
  font-weight: 500;
  text-align: left;  
}
.daqContainer
{
    text-align: left;
    width: auto;
    margin-top: 5%;
}
</style>