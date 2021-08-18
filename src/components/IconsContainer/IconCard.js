import React, { useState } from 'react'
import style from '../../style/IconCards.module.css'

function IconCard({ tag, copy, id }) {

    const [hover, sethover] = useState(false)

    let code = `<i class="${tag.props.class}"></i>`

    return (
        <div 
            onMouseEnter={() => sethover(true)}
            onMouseLeave={() => sethover(false)}
            className={style.card}
            onClick={() => {
                
                navigator.clipboard.writeText(code);
                copy({
                    id,
                    text:code
                })

            }}
        >
            <div className={hover ? style.pop : style.out}>
                Click to copy
            </div>

            {
                tag
            }

            <div className={style.code}>
                {code}
            </div>
        </div>
    )
}

export default IconCard