import "./Login.css";

function Login() {

  function handleSubmit(event){
    event.preventDefault();

  }
  return (
    <div className="login-container">
      <div className="login-left">
        <h1 className="login-header">Welcome back!</h1>
        <p className="login-subText">We&apos;re so excited to see you again!</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-formText">email or phone number <span className="login-asterisk">*</span></label>
          <input className="login-formInput" type="email" required/>
          <label className="login-formText">password <span className="login-asterisk">*</span></label>
          <input className="login-formInput" type="password" />
          <p className="login-forgotPassword">Forgot your password?</p>
          <button className="login-button">Log In</button>
          <p className="login-account">Need an account? <span className="login-register">Register</span></p>
        </form>
      </div>
      <div className="login-right">
        <img className="login-qr" src="../../public/images/qrcode_linkedIn.png" alt="" />
        <h2 className="login-qr-header">Log in with QR Code</h2>
        <p className="login-qr-subText">Scan this with the <strong>Discord mobile app</strong> to log in instantly.</p>
      </div>
    </div>
  );
}

export default Login;
