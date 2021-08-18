import React, { useRef, useState, useContext } from 'react'
import { Context } from '../../context/Context'
import style from '../../style/Login.module.css'
import { HiOutlineChevronDown, HiOutlineChevronLeft, HiUser, HiOutlineLockClosed } from "react-icons/hi";

function Login() {

    const { auth, authUser, userLogout } = useContext(Context);

    const user = useRef();
    const pass = useRef();
    const [toggle, settoggle] = useState(false)

    function handlelogin(e){
        e.preventDefault();

        authUser({
            name: user.current.value
        })
    }

    return (
        <div className={style.authWrapper}>
            {
                auth ?
                
                <button 
                    onClick={() => userLogout()}
                    className={style.logoutBtn}
                >
                    <HiOutlineChevronLeft style={{ marginRight: '7px', fontSize: '1rem' }} /> Log out
                </button>

                :

                <>
                    <button className={style.loginBtn} onClick={() => settoggle(!toggle)}>
                        Log in <HiOutlineChevronDown style={{ marginLeft: '7px', fontSize: '1rem' }}/>
                    </button>
                    
                    <div className={`${style.triangle} ${toggle ? style.FormWrapperShow : style.FormWrapperHide}`}>
                        <form 
                            onSubmit={handlelogin}
                            className={`${ style.loginForm } ${toggle ? style.loginFormShow : style.loginFormHide}`}
                        >
                            <h5>
                                Login to your Account
                            </h5>

                            <div className={style.inputWrapper}>
                                <div className={style.inputIcon}>
                                    <HiUser/>
                                </div>
                                
                                <input ref={user} type='text' placeholder='username' required/>
                            </div>

                            <div className={style.inputWrapper}>

                                <div className={style.inputIcon}>
                                    <HiOutlineLockClosed/>
                                </div>

                                <input ref={pass} type='password' placeholder='password' required/>
                            </div>

                            <input type='submit' value='LOG IN'/>

                            <div className={style.formFooter}>
                                <p>
                                    Forgot <a href='/'> Password? </a>
                                </p>

                                <p>
                                    Do not have account yet? <a href='/'> Click Here </a>
                                </p>
                            </div>

                        </form>
                    </div>
                </>

            }
        </div>
    )
}

export default Login