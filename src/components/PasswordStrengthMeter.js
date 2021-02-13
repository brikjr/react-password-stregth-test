import React from 'react'
import './components.css'
import zxcvbn from 'zxcvbn';

const PasswordStrengthMeter = ({password}) => {

    const results = zxcvbn(password);
    const num = results.score * 100 /4 ;

    const changePasswordColor = () =>{
        switch(results.score) {
            case 0 : return '#828282' ;
            case 1 : return '#EA1111';
            case 2: return '#ffad00' ;
            case 3 : return '#9b1158';
            case 4: return '#00b500' ; 
            default : return 'none'
        }
    }
    const passwordLabel = () =>{
        switch(results.score) {
            case 0 : return '' ;
            case 1 : return 'Week';
            case 2: return 'Medium' ;
            case 3 : return 'Strong';
            case 4: return 'Very Strong' ; 
            default : return ''
        }
    }
    const passwordChangeMeter = () => ({
        width: `${num}%`,
        backgroundColor: changePasswordColor()
    })
   
    return (
        <>
            <div className="progress">
                <div className="progress-bar" style={passwordChangeMeter()}></div>
            </div>
            <p className="text-right" style={{color: changePasswordColor()}} >{passwordLabel()}</p>
        </>
    )
}

export default PasswordStrengthMeter
