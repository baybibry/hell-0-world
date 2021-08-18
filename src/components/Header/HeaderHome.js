import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom';
import style from '../../style/HeaderHome.module.css';
import DateTimeCounter from './DateTimeCounter';
import { HiMenu } from "react-icons/hi";
import ChangeTheme from './ChangeTheme';
import ChangeLang from './ChangeLang';
import Login from './Login';
import { Context } from '../../context/Context';

function Header() {

    const { theme, changeTheme, flag, changeLang, auth, userInfo } = useContext(Context);
    
    const [toggle, setToggle] = useState(false);

    return (
        <div className={style.headerWrapper}>
            <div className={style.headerNav}>

                <div className={style.headerMobileDisplay}>

                    <DateTimeCounter/>

                    <label
                        htmlFor='navbar'
                        onClick={() => setToggle(!toggle)}
                        className={style.toggleBtn}
                    >
                        <HiMenu className={style.toggleBtnIcon}/>
                    </label>

                </div>

                <input
                    type='checkbox'
                    id='navbar'
                />

                <div className={style.headerDropDown}>

                    <ul>
                        
                        <NavLink to='/'>
                            <li>
                                    Home
                            </li>
                        </NavLink>

                        <NavLink to='/news'>
                            <li>
                                    News
                            </li>
                        </NavLink>

                    </ul>

                    <ul>
                        
                        {
                            auth &&
                            <li className={style.greeting}>
                                Hello! <span style={{fontWeight: 600 }}> { userInfo.name } </span>
                            </li>
                        }

                        <li>
                            <ChangeTheme theme={theme} changeTheme={changeTheme}/>
                        </li>

                        <li>
                            <ChangeLang flag={flag} changeLang={changeLang}/>
                        </li>

                        <li>
                            <Login/>
                        </li>

                    </ul>

                </div>

            </div>
        </div>
    )
}

export default Header
