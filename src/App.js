import React, {useState} from 'react'
import PasswordStrengthMeter from './components/PasswordStrengthMeter' ;

const App = () => {
  const [password, setPassword] = useState('') ;
  
  return (
    <div className="container">
        <div className="row justify-content-center mt-5 ">
            <div className="col-md-6">
                  <h4 className="text-center">Password Strength</h4>
                  <div className="form-group pt-4">
                      <input type="password"
                       className="form-control py-3 my-2"
                        placeholder="user password"
                        onChange={ e => setPassword(e.target.value)}
                        />
                      <PasswordStrengthMeter password={password} />
                  </div>
                  
            </div>
        </div>
    </div>
  )
}

export default App