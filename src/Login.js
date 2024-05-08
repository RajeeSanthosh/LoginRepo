import "./Login.css";
import untitled from './assets/Untitled-3 2.png';
import rightcard from './assets/Right Card.svg';
import bgcolor from './assets/Background.svg';
import background from './assets/Bgground.svg';
import untitledd from './assets/Untitled-1 1.svg';
import twit from './assets/twitter.svg';
import goog from './assets/google.svg';
import social from './assets/social-media 3.svg';
const Login = () => {
  return (
    <div className="login">
      <img className="untitled-3-2-icon" alt="" src={untitled} />
      <div className="main">
        <div className="background" />
        <img className="right-card-icon" alt="" src={rightcard} />
        <div className="form">
          <div className="buttonfull-widith">
            <div className="button">
              <img
                className="background-color-icon"
                alt=""
                src={bgcolor}
              />
              <b className="title">Create an account</b>
            </div>
          </div>
          <div className="buttonfull-widith1">
            <div className="button">
              <img
                className="background-color-icon"
                alt=""
                src={background}
              />
              <b className="title1">Login</b>
            </div>
          </div>
          <div className="forgot-password">Forgot Password?</div>
          <div className="componentsform">
            <div className="field" />
            <div className="input-data">● ● ● ● ● ●</div>
            <b className="lable">password</b>
          </div>
          <div className="componentsform1">
            <div className="field" />
            <div className="input-data1">davin.wong@mail.com</div>
            <div className="lable">email</div>
          </div>
          <div className="title2">
            <div className="sign-in-to">{`Sign in to continue `}</div>
            <div className="welcome-back">Welcome Back!</div>
          </div>
          <div className="form-child" />
        </div>
        <div className="asatera-parent">
          <b className="asatera">Asatera</b>
          <img className="untitled-1-1-icon" alt="" src={untitledd}/>
        </div>
        <div className="social">
          <div className="or-sign-in">Or sign in with</div>
          <div className="icon">
            <div className="bg" />
            <img className="twitter-icon" alt="" src={twit} />
          </div>
          <div className="icon1">
            <div className="bg" />
            <img className="google-icon" alt="" src={goog} />
          </div>
          <div className="icon2">
            <div className="bg" />
          </div>
          <img
            className="social-media-3-icon"
            alt=""
            src={social}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
