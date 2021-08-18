import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';
import style from '../style/Home.module.css';
import { useTranslation } from 'react-i18next';
import IconContainer from '../components/IconsContainer/IconContainer';
import fontIcons from '../iconsData';
import Notification from '../components/Notification/Notification';

function Home() {

    const { theme, addNotif, removeNotif, notifs } = useContext(Context);

    const [search, setsearch] = useState('')
    const [icons, seticons] =  useState()

    const { t } = useTranslation();

    useEffect(() => {

        let reg = new RegExp(search, 'i')
        
        if(!search){
            return seticons([...fontIcons])
        }

        let filteredData = fontIcons.filter((item) => item.props.class.match(reg));

        return seticons([...filteredData]);


    }, [search])

    return (

        <div
            className={`${theme ? 'text-dark dark' : 'text-light light'} ${style.body}`}
        >


            {/* <HeaderHome/> */}

            <div className={style.bodyMaxWidth}>

                <div className={style.notificationCon}>
                    {
                        notifs.map((obj, i) => (
                            <Notification 
                                key={i + obj.text}
                                text={obj.text}
                                id={obj.id}
                                removed={removeNotif}
                            />
                        ))
                    }
                </div>

                <h1 className={style.title}>
                    Aios Font Icons
                </h1>

                <div className={style.search}>

                    <input 
                        type='text' 
                        onChange={ e => setsearch(e.target.value)}
                        placeholder={t('search')}
                    />
                    
                    <i className="ai-font-magnifying-glass-a"></i>

                </div>

                <IconContainer 
                    data={icons}
                    copied={addNotif}
                />


                <footer className={style.footer}>
                    
                    <hr className={style.hr}/>

                    <h3 className={style.footerLink}>

                        Font Source <a 
                            
                            target='__blank' 
                            className={`${theme ? 'text-dark' : 'text-light'}`}
                            href='https://resources.agentimage.com/fonts/agentimage.font.icons.css?ver=5.3.4'
                            
                            > https://resources.agentimage.com/fonts/agentimage.font.icons.css?ver=5.3.4 
                            
                            </a>
                    
                    </h3>
                </footer>

            </div> 

        </div>
    )
}

export default Home
