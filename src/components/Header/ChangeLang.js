import React, { useEffect, useState} from 'react';
import style from '../../style/ChangeLang.module.css';
import { Ch, Th, En, Vn } from '../../img';
import { NavLink, useLocation } from 'react-router-dom';

function ChangeLang({ flag, changeLang }) {

    const [hover, sethover] = useState(false);
    
    const { pathname } = useLocation();

    const lang = [
        {
            flg: En,
            name:'English',
            lng: 'en'
        },
        {
            flg: Vn,
            name:'Tiếng Việt',
            lng: 'vn'
        }, 
        {
            flg: Th,
            name:'ไทย',
            lng: 'th'
        }, 
        {
            flg: Ch,
            name:'中国',
            lng: 'ch'
        }
    ];
    
    return (
        <div 
            onMouseEnter={() => sethover(true)}

            onMouseLeave={() => sethover(false)}
            className={style.langWrapper}
        >
            
            <label 
                htmlFor='langPicker'
            >
                <div
                    className={style.langPicked}
                >
                    <img
                        src={flag}
                        alt='flag picked'
                    />
                </div>
            </label>

            <input
                type='checkbox' 
                id='langPicker'
                onChange={e => {}}
                checked={hover}
            />

            <div className={style.langPickerWrapper}>

                {
                    lang.map((obj, i) => {

                        let loc = pathname.includes('/news') ? `${pathname.replace(pathname, '/news')}/` : '/'
                        
                        let pth = obj.lng === 'en' ? `${loc}` : `${loc}${obj.lng}`;

                        return (
                            obj.flg !== flag &&
                            
                            <div  
                                key={i}
                                className={style.langColor}
                                onClick={() => changeLang(obj.lng , obj.flg) }
                            >

                                <NavLink 
                                    to={pth}
                                    style={{ color: 'white' }}
                                >
                                    
                                    <span> { obj.name } </span>

                                    <img src={obj.flg} alt='english'/>

                                </NavLink>

                            </div> 
                        )

                    })
                }

            </div>
        </div>
    )
}

export default ChangeLang