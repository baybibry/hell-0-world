import { Context } from '../context/Context';
import React, { useContext, useRef, useState } from 'react';
import DateTimeCounter from './DateTimeCounter';
import { NavLink, Link } from 'react-router-dom';
import sunIcon from '../img/sun.png';
import style from '../style/Navbar.module.css';
import i18n from '../i18n';
import { Ch, Th, En, Vn } from '../img'
import { HiEyeOff, HiEye, HiOutlineChevronDown, HiUser, HiLockClosed } from "react-icons/hi";

const baseUrl = i18n.language === 'en' ? '/' : `/${i18n.language}`

function NavMenu() {

    const { theme, changeTheme, authUser, 
            auth, userLogout, userInfo, 
            changeLang, flag } = useContext(Context);

    console.log(flag)

    const username = useRef();
    const pass = useRef();

    const [login, setlogin] = useState(false);
    const [togglepass, settogglepass] = useState(false);
    const [toggletheme, settoggletheme] = useState(false);
    const [togglelang, settogglelang] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        
        let info = {
            username: username.current.value,
            pass: pass.current.value 
        }

        authUser(info);

        setlogin(!login)
    }

    function changeLanguage(lang){
        i18n.changeLanguage(lang)
    }

    function handleLang(lang, flag){
        changeLang(lang, flag)
        // settogglelang(!toggletheme)
    }

    function handlePass(){
        settogglepass(!togglepass)
    }

    return (
        <>
            <div 
                className='nav'
                // className={`${theme ? 'text-dark dark' : 'text-light light'}`}
            >

                <input 
                    type='checkbox' 
                    id='toggleNav'
                    className='hidden'
                />

                <div className='mobile-nav'>

                    <label htmlFor='toggleNav' className='toggle-nav-btn'>
                        <i className="ai-font-arrow-h-p"></i>
                    </label>

                </div>

                <nav>

                    <DateTimeCounter/>

                    <ul>
                        <li>
                            <NavLink 
                                className='uppercase text-white'
                                to='/'
                            >
                                home
                            </NavLink>
                        </li> 

                        <li>
                            <NavLink 
                                className='uppercase text-white'
                                to='/news'
                            >
                                News
                            </NavLink>
                        </li> 
                    </ul>

                    <div className='nav-modify'>
                        

                        {/* <h3 className={`greet-con ${auth ? 'display' : 'hide' }`}> */}
                            {/* {
                                auth && 
                                <h3 className='greet'> */}
                                    {/* Hello! {userInfo?.username} */}
                                {/* </h3>
                            } */}
                        {/* </h3> */}

                        <div className='select-theme'>
                            <div 
                                onClick={() => settoggletheme(!toggletheme)}
                                onMouseLeave={() => settoggletheme(false)}
                                onMouseEnter={() => settoggletheme(true)}
                                className={`selected-theme ${theme ?  'dark' : 'light' }`}
                            >
                            </div>

                            <div 
                                onMouseEnter={() => settoggletheme(true)}
                                onMouseLeave={() => settoggletheme(false)}
                                className={`${toggletheme ? 'option-theme-display' : 'option-theme-hide'}`}
                            >

                                <div 
                                    onClick={() => {
                                        changeTheme(true)
                                        settoggletheme(!toggletheme)
                                    }}
                                    className='dark option-color'
                                ></div>

                                <div 
                                    onClick={() => {
                                        changeTheme(false)
                                        settoggletheme(!toggletheme)
                                    }}
                                    className='light option-color'
                                ></div>
                            
                            </div>

                        </div>

                        <div className='lang-btn' >
                            <div 
                                onClick={() => settogglelang(!togglelang)}
                                onMouseEnter={() => settogglelang(true)}
                                onMouseLeave={() => settogglelang(false)}
                                className='selected-lang'
                            >
                                <img 
                                    src={flag} 
                                    alt='flag'
                                />
                                
                            </div>

                            <div
                                onMouseEnter={() => settogglelang(true)}
                                onMouseLeave={() => settogglelang(false)}
                                className={`${togglelang ? 'option-lang-display' : 'option-lang-hide'}`}
                            >

                                <div 
                                    onClick={() => {
                                        handleLang('EN', En)
                                        changeLanguage('en')
                                    }}
                                    className='option-lang'
                                > 
                                   English <img src={En} alt='en'/>
                                </div>

                                <div 
                                    onClick={() => {
                                        handleLang('VN', Vn)
                                        changeLanguage('vn')
                                    }}
                                    className='option-lang'
                                > 
                                    {/* <Link to={baseUrl + '/'}> */}
                                        Tiếng Việtไทย <img src={Vn} alt='vn'/>
                                    {/* </Link> */}
                                </div>

                                <div 
                                    onClick={() => {
                                        handleLang('TH', Th)
                                        changeLanguage('th')
                                    }}
                                    className='option-lang'
                                > 
                                    ไทย <img src={Th} alt='th'/>
                                </div>

                                <div 
                                    onClick={() => {
                                        handleLang('CN', Ch)
                                        changeLanguage('ch')
                                    }}
                                    className='option-lang'
                                > 
                                    中国 <img src={Ch} alt='ch'/>
                                </div>

                            </div>

                        </div>
                        
                        {
                            auth ?

                            <button
                                onClick={userLogout}
                                className='login-btn text-dark btn-dark'
                            >
                                <i className="ai-font-person-a-alt "></i>

                                <span>
                                    Log out
                                </span>
                            </button>
                            
                            :
                            
                            <div className='login-con'>
                                <button
                                    onClick={() => setlogin(!login)}
                                    className='login-btn text-dark btn-dark'
                                >
                                    <span >
                                        LOG IN
                                    </span>

                                    <HiOutlineChevronDown className='chevron'/>

                                </button>

                                {/* {
                                        login &&  ${login ? 'login-show' : 'login-hide' }  */}

                                        <div className={`${login ? 'login-d' : 'login-h' }`}>

                                            <form
                                                onSubmit={handleSubmit}
                                                className={`${login ? 'login-show' : 'login-hide' }`}
                                            >

                                                <h4>
                                                    Login to your Account
                                                </h4>

                                                {/* ${login ? 'input-con-show' : 'input-con-hide' } */}

                                                <div className={` ${login ? 'input-con-show' : 'input-con-hide' }`}>

                                                    <div className='input-icon'>
                                                        <HiUser/>
                                                    </div>

                                                    <input 
                                                        ref={username}
                                                        name='username'
                                                        placeholder='Username'
                                                        type='text' 
                                                        required
                                                    />
                                                </div>
                                                
                                                <div className={`${login ? 'input-con-show' : 'input-con-hide' } `}>

                                                    <div className='input-icon'>
                                                        <HiLockClosed/>
                                                    </div>

                                                    <input 
                                                        ref={pass}
                                                        name='password'
                                                        placeholder='password'
                                                        type='password'
                                                        required
                                                    />

                                                </div>

                                                <input 
                                                    type='submit' 
                                                    value='LOG IN'
                                                    className={`${login ? 'input-con-show' : 'input-con-hide' } `}
                                                />

                                                <div className={`${login ? 'footer-form-show' : 'footer-form-hide' }`}>
                                                    <p>
                                                        Forgot <a className={`${theme ? 'text-dark-sec' : 'text-light-sec' }`} href='#'> Password </a>
                                                    </p>

                                                    <p>
                                                        Do not have account yet? <a className={`${theme ? 'text-dark-sec' : 'text-light-sec' }`} href='#'> Click Here </a>
                                                    </p>
                                                </div>

                                            </form>


                                        </div>
                                    {/* } */}
                            </div>
                        }

                    </div>

                </nav>

            </div>

        </>
    )
}

export default NavMenu
