import React from 'react'
import NewsCard from './NewsCard'
import style from '../../style/News.module.css'

function NewsCon({ news }) {
    return (
        <div 
        className={ style.newsWrapper }
        >

            {
                news ?

                news?.map((obj, i) => {
                
                    const {author, description, title, url, urlToImage} = obj;

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
