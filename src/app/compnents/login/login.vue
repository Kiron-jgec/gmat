<template>
  <div class="login">
    <div class="loginContainer">
      <img src="../../../assets/logo/CAIPA MSO-Turq (Logo)  1.svg" alt="" />
      <div class="loginform">
        <div class="logintext">
          <h4>Sign in to your account</h4>
        </div>

        <div class="logintype">
          <span>I am :</span>
          <label> <input type="radio" name="loginType" id="" />Manager </label>

          <label>
          <input type="radio" name="loginType" id="" />Administrator
          </label>

          <label> <input type="radio" name="loginType" id="" />Provider </label>
        </div>

        <div class="inputfields">
          <label>
            <span>Email </span>
            <input type="email" name="" id="" />
          </label>

          <label>
            <span>Password <a href=""> Forgot your password?</a></span>

            <input type="password" name="" id="" />
          </label>
        </div>
        <br />
        <label>
          <input type="checkbox" name="" id="" />
          Remember Me
        </label>

        <button>Sign in</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.login {
  width: 100%;
  height: 100vh;
 
  background: linear-gradient(rgb(255, 255, 255), #85b0ff);
  text-align: center;
  display: flex;
  
  align-items: center;
  justify-content: center;
}

.loginform {
  /* White */
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(139, 152, 177, 0.25),
    0px 5px 10px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: left;
  margin: 20px 0px 0px 0px;
  padding: 0px 20px;
}
.loginform span {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  letter-spacing: 0.025em;

  /* Gray/900 */
  color: #222834;
  display: block;
  margin: 8px 0px;
}

.logintext {
  text-align: center;
  width: 100%;
  padding: 20px 0px;
}

.logintext h4 {
  /* Sign in to your account */

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;

  /* Gray/900 */
  color: #222834;
}

.logintype {
  padding: 10px 0px;
  text-align: left;
}
.logintype label {
  margin: 0px 0px;
  cursor: pointer;
}

.logintype label input {
  margin: 0px 5px;
}

.inputfields {
  text-align: left;
}
.inputfields input {
  width: 100%;
  padding: 8px 5px;
  font-size: 15px;

  /* Rectangle 1 */

  /* White */
  background: #ffffff;
  /* Gray/100 */
  border: 1px solid #a3a6ac;
  box-sizing: border-box;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  outline: none;
}

.inputfields label a {
  float: right;

  /* Forgot your password? */

  /* Body/M Regular */
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  /* Blue/600 */
  color: #0054ff;
}

.loginform button {
  width: 100%;
  margin: 20px 0px;
  padding: 10px;

  outline: none;
  border: none;
  cursor: pointer;
  /* Blue/600 */
  background: #0054ff;
  border-radius: 6px;

  /* Sign in */
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  text-align: center;
  letter-spacing: 0.025em;

  /* White */
  color: #ffffff;
}
</style>