import React from 'react'
import NewsCard from './NewsCard'
import style from '../../style/News.module.css'

function NewsCon({ news }) {
    return (
        <div className={ style.newsWrapper }>
            {
                news.length !== 0 ?

                news.map((obj, i) => {
                
                    const {author, content, description, 
                            publishAt, source, title, 
                            url, urlToImage} = obj;

                    return(
                        <NewsCard
                            key={i}
                            author={author}
                            desc={description}
                            title={title}
                            url={url}
                            image={urlToImage}
                        />
                    )
                    
                })

                :

                <div className={style.loading}>
                    Loading ...
                </div>    
            }
        </div>
    )
}

export default NewsCon
