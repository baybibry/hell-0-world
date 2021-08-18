import React, { useState } from 'react'
import style from '../../style/ChangeTheme.module.css'

function ChangeTheme({ theme, changeTheme }) {

    const [hover, sethover] = useState(false);

    return (
        <div 
            onMouseEnter={() => sethover(true)}
            onMouseLeave={() => sethover(false)}
            className={style.themeWrapper}
        >
            
            <label 
                htmlFor='themePicker'
            >
                <div
                    className={`${style.themePicked} ${theme ? 'dark' : 'light'}`}
                >
                </div>
            </label>

            <input
                type='checkbox' 
                id='themePicker'
                onChange={() => console.log('theme')}
                checked={hover}
            />

            <div className={style.themePickerWrapper}>

                <div 
                    onClick={() => changeTheme(true)}
                    className={`${style.themeColor} dark`}
                >
                </div>

                <div 
                    onClick={() => changeTheme(false)}
                    className={`${style.themeColor} light`}
                >
                </div>

            </div>
        </div>
    )
}

export default ChangeTheme
