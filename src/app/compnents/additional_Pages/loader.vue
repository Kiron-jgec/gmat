<template>
    <div class="loaderSec">
    <div class="loader"></div>
    </div>
</template>

<style scoped>

.loaderSec
{
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.575);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
}



.loader {
  border: 10px solid  #ffffff;
  border-radius: 50%;
  border-top: 10px solid  #ff8800;
  width: 100px;
  height: 100px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}



</style>