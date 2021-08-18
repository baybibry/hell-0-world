import React, { useContext } from 'react'
import NewsCon from '../components/NewsContainer/NewsCon'
import { Context } from '../context/Context';

function News() {

    const { theme, news } = useContext(Context);
    
    console.log(process.env.URL)

    return (
        <div
            className={`${theme ? 'text-dark dark' : 'text-light light'}`}
        >
            <NewsCon news={news}/>

        </div>
    )
}

export default News
