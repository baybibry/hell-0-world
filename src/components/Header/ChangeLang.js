import React, { useState} from 'react';
import style from '../../style/ChangeLang.module.css';
import { Ch, Th, En, Vn } from '../../img';
import { NavLink } from 'react-router-dom';

function ChangeLang({ flag, changeLang }) {

    const [hover, sethover] = useState(false);

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

                        let url = obj.lng === 'en' ? '/' : '/' + obj.lng

                        // return (
                        //     obj.flg !== flag &&
                            
                            return (<div  
                                key={i}
                                className={style.langColor}
                                onClick={() => changeLang(obj.lng , obj.flg) }
                            >

                                <NavLink 
                                    to={url}
                                    style={{ color: 'white' }}
                                >
                                    
                                    <span> { obj.name } </span>

                                    <img src={obj.flg} alt='english'/>

                                </NavLink>

                            </div> )
                        // )

                    })
                }

            </div>
        </div>
    )
}

export default ChangeLang
