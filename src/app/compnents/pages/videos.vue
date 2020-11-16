<template>
    <div class="videos">
        <div class="youtubevide">

<div class="videoCintainer" v-for="(video,idx) in videos" :key="idx">
<iframe :src="video" class="videosy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

        </div>
    </div>
</template>

<script>
export default {
    data()
    {
        return{
            videos:[
                "https://www.youtube.com/embed/NyjuJ3dUIPA",
                "https://www.youtube.com/embed/ITHJpcuwtlM",
                "https://www.youtube.com/embed/vvSCvWim5yw",
                "https://www.youtube.com/embed/pCYCdMpdwlg",
                "https://www.youtube.com/embed/XavNjmMiiWQ",
                "https://www.youtube.com/embed/lYt9hnLVc3M"


            ]
        }
    }
}
</script>



<style scoped>
.youtubevide
{
padding: 4%;
text-align: center;
}
.youtubevide
{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 37rem));
  grid-column-gap: 40px;
  grid-row-gap: 80px;
  justify-content: center;
  align-items: center;
}
.videosy
{
width: 100%;
height: 400px;
border-radius: 15px;
 -webkit-box-shadow: 1px 1px 15px 0px rgba(50, 50, 50, 0.26);
-moz-box-shadow:    1px 1px 15px 0px rgba(50, 50, 50, 0.26);
box-shadow:         1px 1px 15px 0px rgba(50, 50, 50, 0.26);
border: 15px rgb(255, 255, 255) solid;
}
</style>