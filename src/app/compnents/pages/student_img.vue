<template>
  <div class="studentsImg">
    <h1>Students Gallery</h1>
    <div class="imgContainber">
      <div class="imgDivsec" v-for="(imgses, idx) in 21" :key="idx">
        <img
          :src="require(`../../../assets/gallery/s${idx + 1}.webp`)"
          alt=""
        />
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {};
  },
};
</script>



<style scoped>
.studentsImg {
  text-align: center;
}

h1 {
  font-family: "Roboto";
  font-size: 35px;
  color: #2991f3;
  font-weight: 700;
  margin-top: 4%;
}
.imgContainber {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 25rem));
  grid-gap: 1rem;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  justify-content: center;
  align-items: center;
  margin: 3% 0px;
}

.imgContainber img {
  width: 100%;
  border-radius: 15px;
  -webkit-box-shadow: 1px 1px 15px 0px rgba(50, 50, 50, 0.26);
  -moz-box-shadow: 1px 1px 15px 0px rgba(50, 50, 50, 0.26);
  box-shadow: 1px 1px 15px 0px rgba(50, 50, 50, 0.26);
  border: 15px rgb(255, 255, 255) solid;
}
</style>