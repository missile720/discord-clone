import './Register.css'

function Register() {
  return (
    <div className='register-container'>
        <div className="discord-logo"></div>
        <h1 className='register-header'>Create an account</h1>
        <form className="register-form">
          <label className="register-formText">
            email <span className="register-asterisk">*</span>
          </label>
          <input className="register-formInput" type="email" required />
          <label className="register-formText">display name</label>
          <input className="register-formInput"/>
          <label className="register-formText">
            username <span className="register-asterisk">*</span>
          </label>
          <input className="register-formInput" required />
          <label className="register-formText">
            password <span className="register-asterisk">*</span>
          </label>
          <input className="register-formInput" type="password" required />
          <label className="register-formText">
            date of birth <span className="register-asterisk">*</span>
          </label>
          <div className='register-formInput-dateContainer'>
            <select name="month" id="month" className='register-formInput-date'>
                <option value="">Month</option>
            </select>
            <select name="day" id="day" className='register-formInput-date'>
                <option value="">Day</option>
            </select>
            <select name="year" id="year" className='register-formInput-date'>
                <option value="">Year</option>
            </select>
          </div>
          <button className="register-button">Continue</button>
          <p className='register-disclaimer'>By registering, you agree to Discord&apos;s <span className='register-link'>Terms of Service</span> and <span className='register-link'>Privacy Policy</span>.</p>
          <p className='register-link register-login'>Already have an account?</p>
        </form>
    </div>
  )
}

export default Register