import React from 'react'
import style from '../../style/News.module.css'

function NewsCard({ author, desc, title, url, image}) 
{
    return (
            <div className={style.cardWrapper}>

                <div className={style.cardImgWrapper}>
                    <img
                        src={image}
                        alt={title}
                    />
                </div>

                <div className={style.cardContentWrapper}>
                    <h1>
                       {title}
                    </h1>

                    <h3>
                        By <span> {author} </span>
                    </h3>
                
                    <p>
                        {desc}
                    </p>
                </div>

                <a target='__blank' href={url}>   
                    Read More
                </a>

            </div>
    )
}

export default NewsCard
