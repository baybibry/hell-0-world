import React from 'react'
import style from '../../style/IconCards.module.css';
import IconCard from './IconCard';

function IconContainer({data, copied}) {

    return (
        <div 
            className={ data?.length !== 0 ? style.container : style.noContent}
        >
            {
                data?.map((obj, i) => (
                    <IconCard
                        id={(i * Math.random()) + obj.props.class}
                        key={i + obj.props.class}
                        tag={obj}
                        copy={copied}
                    />
                ))
            }
        </div>
    )
}

export default IconContainer
