<template>
    <div class="t600-700">
        <div class="WhoIs">
            <h2>Who Is This For?</h2>
            <p>This curriculum is specifically designed for those students who are looking to stand out on their MBA applications. Achieving above a 700 on the GMAT is incredibly hard, but with the right strategy and techniques, doable. In our 40 years as GMAT tutors, we have helped hundreds of students surpass the 700 threshold, and based on these experiences, have created a specially designed path for others looking to follow suit.</p>
        </div>

        <section>
            <div class="twobig">
               <h2>The Two Biggest Challenges</h2> 
               <p>Before we dive into the specifics of our program, it’s key to understand why questions beyond 650 are so much harder. The first reason is that above 650, the GMAT radically changes. The problems beyond this point become technically more difficult while also increasing their testing of GMAT logic. Additionally, the constraints on time become more pressing as the questions increase in complexity. For example, 650+ quant questions will appear to require a lot more rote, time-consuming solving than those prior, in addition to the added logic component.


                   <br>
                   The second reason is that GMAT study materials for above 700 are sparse. While the Official Guide does contain higher-level questions, they are few and far between. Moreover, if you need to practice a specific topic, there are only a few questions available at best. Other GMAT prep companies offer many resources, but the majority of these cater to most GMAT test-takers, who don’t require above a 700. Thus, these resources are unlikely to expose you to the right type of practice problems needed to score beyond 700.
               </p>
            </div>
        </section>

        <section>
            <div class="theGamat">
                <h2>The GMAT Tutor NYC Approach</h2>
                <p>Now that we have gone over your primary obstacles, we’ll show you how to surmount them. First, before teaching any advanced concepts, we will test your foundation. To deploy any of our advanced techniques, it is crucial to have a solid foundation, which means being intimately familiar with all of the quant section’s 20 topics, and being able to solve the vast majority of problems fully. It is likely that if you are looking to score above 700, you have already undergone significant GMAT preparation, in which case this will be very brief. However, if you are less familiar with the fundamentals or are brand new to the GMAT, we will spend significant time mastering these areas before progressing.
<br>
<br>
Second, once we have confirmed that your foundation is strong, we will begin introducing our advanced techniques. These techniques were developed by drawing on an array of academic disciplines in engineering, mathematics, and finance, which were then specially calibrated to the GMAT. Often, these techniques will quickly simplify each problem into one that is readily manageable or cut through the onerous solving that becomes commonplace above 650. We will also teach you our unique logic and analytic techniques. Again, logic becomes very important for 700+ questions, so we will devote a lot of time to learning and applying these GMAT specific techniques.
<br>
<br>

Third, we will provide you with the right problems on which to practice. We have developed custom problem sets consisting solely of 700+ questions, each segmented by specific topics and question-types. By going through these sets and deploying the unique techniques we will teach you, you will be in great shape for the GMAT. Also, once you have completed our main problem sets, we will provide you with one final set, consisting solely of the most routinely tested problems.

                </p>
            </div>
        </section>


        <section>
            <talkForm></talkForm>
        </section>
    </div>
</template>


<script>
import talkForm from "../form/talkForm"
export default {
  components:{
talkForm
  }  
}
</script>


<style scoped>
section {
  margin: 12% 0px;
}
.t600-700
{
  padding: 2% 4%;
  text-align: center;
}


.t600-700 h2 {
  color: #111637;
  font-family: "Roboto";

  font-size: 33px;
  margin: 25px 0px;
  line-height: 40px;
  font-weight: 600;
}

.t600-700 p {
  color: #636363;
  font-family: "Heebo", sans-serif;
  font-size: 22px;
  margin: 30px 0px;
  line-height: 30px;
  font-weight: 500;
  text-align: left;
}

.twobig p 
{
    columns: 2;
}


@media screen and (max-width: 420px) {

.twobig p 
{
  columns: 1;
}

}

</style>