import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  const [displayNameFocused, setDisplayNameFocused] = useState(false);
  const [userNameFocused, setUserNameFocused] = useState(false);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const days = [];
  const years = [];

  for(let day = 1; day <= 31; day++){
    days.push(
      <option key={day} value={day}>
        {day}
      </option>
    );
  }

  for(let year = 2020; year >= 1871; year--){
    years.push(
      <option key={year} value={year}>
        {year}
      </option>
    );
  }

  function handleFocus(setFocused, isFocused) {
    setFocused(!isFocused);
  }

  function getStyles(isFocused) {
    return {
      height: isFocused ? '18px' : '0px',
      opacity: isFocused ? '1' : '0',
      paddingBottom: isFocused ? '20px' : '0px',
      marginTop: isFocused ? '-12px' : '0px',
    };
  }

  const displayStyle = getStyles(displayNameFocused);
  const nameStyle = getStyles(userNameFocused);

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
          <input className="register-formInput"
            onFocus={() => handleFocus(setDisplayNameFocused, displayNameFocused)}
            onBlur={() => handleFocus(setDisplayNameFocused, displayNameFocused)}
          />
          <p style={displayStyle} className='register-input-subtext'>This is how others see you. You can use special characters and emoji.</p>
          <label className="register-formText">
            username <span className="register-asterisk">*</span>
          </label>
          <input className="register-formInput"
            required
            onFocus={() => handleFocus(setUserNameFocused, userNameFocused)}
            onBlur={() => handleFocus(setUserNameFocused, userNameFocused)}
          />
          <p style={nameStyle} className='register-input-subtext'>Please only use numbers, letters, underscores _ , or periods.</p>
          <label className="register-formText">
            password <span className="register-asterisk">*</span>
          </label>
          <input className="register-formInput" type="password" required />
          <label className="register-formText">
            date of birth <span className="register-asterisk">*</span>
          </label>
          <div className='register-formInput-dateContainer'>
            <div className='register-custom-select' id='month-dropdown'>
              <select name="month" id="month" className='register-formInput-date' required>
                  <option value="" selected disabled hidden>Month</option>
                  {months.map((month,index) => (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  ))}
              </select>
            </div>
            <select name="day" id="day" className='register-formInput-date' required>
                <option value="" selected disabled hidden>Day</option>
                {days}
            </select>
            <select name="year" id="year" className='register-formInput-date' required>
                <option value="" selected disabled hidden>Year</option>
                {years}
            </select>
          </div>
          <button className="register-button">Continue</button>
          <p className='register-disclaimer'>By registering, you agree to Discord&apos;s <a href='https://discord.com/terms' target="_blank" rel="noreferrer" className='register-link'>Terms of Service</a> and <a href='https://discord.com/privacy' target="_blank" rel="noreferrer" className='register-link'>Privacy Policy</a>.</p>
          <Link to="/" style={{ textDecoration: 'none' }}><p className='register-link register-login'>Already have an account?</p></Link>
        </form>
    </div>
  )
}

export default Register