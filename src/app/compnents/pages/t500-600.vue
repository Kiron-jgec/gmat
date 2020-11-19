<template>
  <div>

      <div class="t566-600">
    <h1>500-600 GMAT Prep Strategy</h1>
  
    <div class="nigSec">
      <h2>The Big Secret: Focus on What Counts</h2>

      <p>
        The first thing we tell our students is to focus their time on the
        handful of GMAT topics that are certain to appear. The GMAT is so vast
        that studying for every possible subject is not feasible and not
        advisable. If you allocate your time effectively, it will not only save
        you countless hours but also help you from becoming overwhelmed.

        <br /><br />
        Our GMAT prep focuses on those core areas, that if answered correctly,
        will provide a score within the 500-600 range. By working with our GMAT
        tutors, we will make sure you focus on the areas with the most point
        potential and make sure that you fully understand the concepts while
        getting you ready in the quickest amount of time.
      </p>
    </div>

    <section>
      <div class="prepsdsdf">
        <h2>How We Prep You For the Quant</h2>
        <p>
          <strong>Prepare for the right areas.</strong> There are over 20 quant
          GMAT topics tested. But to score in the 500-600 range you don’t need
          to master all of them, and you shouldn’t. Focus on the quant sections
          that are guaranteed to be tested. <br />
          <br />

          <strong>Master problem-solving.</strong> The easiest and most
          effective way to get all possible points is to completely solve each
          problem. We’ll teach you all the important concepts and techniques
          needed for the GMAT, all you need to do is apply them. <br />
          <br />

          <strong>Practice on the right material.</strong> We created custom
          problem sets, using real GMAT problems, for 500-600 training. These
          sets consist solely of the problem-types that are most tested.
          Practicing on the right material is half the battle. Combine the right
          material with our techniques, and you will be GMAT ready in no time.
          <br />
          <br />

          <strong>Real problems for homework.</strong> Practicing the techniques
          we teach you outside of class is important. Use our special problem
          sets to inculcate our concepts and techniques into memory. <br />
          <br />

          <strong>Flashcards.</strong> We’ll give you the important formulas and
          tricks to memorize. Furthermore, we’ll make sure you create flashcards
          for the problems you’re getting wrong on our real GMAT question
          problem sets. Memorize these and you will be in great shape. <br />
          <br />

          <strong>Practice Tests. </strong> Leave nothing to chance. We’ll
          provide real GMAT practice tests throughout. Not only will these
          provide feedback for your study path, it will bolster your confidence
          as you witness your progress.

          <br />
          <br />
        </p>
      </div>
    </section>

    <section>
      <div class="prepping">
        <h2>Prepping for Verbal</h2>

        <div class="prepContainer">
          <div class="prep">
            <h3>Sentence Correction</h3>
            <p>
              Sentence correction offers students the most potential for rapid
              improvement. To succeed in sentence correction involves learning
              the grammatical rules and understanding when and how to apply
              them. We begin by reviewing all the parts of speech and then
              moving onto broader grammatical concepts such as parallelism and
              misplaced modifiers. <br /><br />

              Once you learn the rules, you will be able to spot and remedy the
              issues quickly. The tricky part about the GMAT sentence correction
              is spotting these errors. Therefore, after learning the rules, we
              will dedicate our time to teaching you to spot the mistakes within
              the real GMAT problems.<br /><br />
            </p>
          </div>

          <div class="prep">
            <h3>Critical Reasoning</h3>
            <p>
              The critical reasoning section can be tricky for some because of
              its heavy emphasis on logical reasoning. We will begin by going
              over the eight different types of questions. From there, we will
              focus on the four most commonly occurring; strengthen, weaken,
              assumption, and evaluate. <br /><br />

              We will focus on teaching how to evaluate each argument and locate
              important information. Because each passage is short, the words
              are very deliberate. We will teach you how to read these passages
              analytically to pick up on the details and logic. After learning
              the techniques, the key is to apply and re-apply them.<br /><br />
            </p>
          </div>

          <div class="prep">
            <h3>Reading Comprehension</h3>
            <p>
              Often, this is the most challenging area for students to boost
              their scores. While we will focus on reading comprehension, we
              will focus more heavily on the other two types of questions as
              they offer more potential improvement. <br /><br />

              Unlike the critical reasoning section, these passages are too long
              to be read with intense focus and analysis. Instead, we teach
              students how to read the passages for the main ideas while paying
              attention to aspects like tone, opinion, and the types of contrast
              words the author is using.<br /><br />
            </p>
          </div>
        </div>
      </div>
    </section>
<section>
    <talkForm></talkForm>
</section>
  </div>
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
.t566-600 {
  padding: 2% 4%;
  text-align: center;
}
.t566-600 h1 {
  color: #045fcf;
  font-family: "Heebo", sans-serif;
  font-size: 40px;
  margin: 10px 0px;
 
  font-weight: 550;
}

.t566-600 h2 {
  color: #111637;
  font-family: "Roboto";

  font-size: 33px;
  margin: 25px 0px;
  line-height: 40px;
  font-weight: 600;
}

.t566-600 h3 {
  color: #111637;
  font-family: "Heebo", sans-serif;

  font-size: 25px;
  margin: 25px 0px;
  line-height: 40px;
  font-weight: 600;
}

.t566-600 p {
  color: #636363;
  font-family: "Heebo", sans-serif;
  font-size: 22px;
  margin: 30px 0px;
  line-height: 30px;
  font-weight: 500;
  text-align: left;
}

.nigSec {
  margin-top: 6%;
}

.prepsdsdf p {
  columns: 2;
}

.prepContainer {
  display: grid;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 20rem));
  grid-gap: 1rem;
  grid-column-gap: 20px;
  justify-content: center;

  padding: 20px;
}
.prep {
  padding: 10px 15px;
  justify-content: space-between;
  background: aliceblue;
  border-radius: 6px;

  border: 1px rgb(218, 218, 218) solid;

  border: 1px rgb(218, 218, 218) solid;
  -webkit-box-shadow: 1px 1px 15px 0px rgba(50, 50, 50, 0.26);
  -moz-box-shadow: 1px 1px 15px 0px rgba(50, 50, 50, 0.26);
  box-shadow: 1px 1px 15px 0px rgba(50, 50, 50, 0.26);

}



@media screen and (max-width: 420px) {

.prepsdsdf p 
{
  columns: 1;
}

}

</style>