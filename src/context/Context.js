import { THEME, LANG, LOGIN, LOGOUT, REMOVENOTIF, ADDNOTIF, NEWS } from './Types'
import { createContext, useReducer, useEffect } from "react";
import contextReducer from "./Reducer";
import store from './Store'

export const Context = createContext();

function ContextProvider({children}){

    const [ state, dispatch ] = useReducer(contextReducer, store);

    function changeTheme(bool){
        dispatch({
            type: THEME,
            data: bool
        })
    }

    function authUser(userData){
        dispatch({
            type: LOGIN,
            data: { userData, auth: true }
        })
    }

    function userLogout(){
        dispatch({
            type: LOGOUT,
            data: false
        })
    }

    function changeLang(lang, flag){

        dispatch({
            type: LANG,
            data: {lang, flag}
        })
    }

    function addNotif(tagcode){
        dispatch({
            type: ADDNOTIF,
            data: tagcode
        })
    }

    function removeNotif(id){
        dispatch({
            type: REMOVENOTIF,
            data: id
        })
    }

    useEffect(() => {

        (
            async () =>{
                const res = await fetch(process.env.REACT_APP_URL + process.env.REACT_APP_API_KEY);
                const data = await res.json()

                dispatch({
                    type: NEWS,
                    data: data.articles
                })
            }
        )()


        const theme = localStorage.getItem('theme');
        const lang = localStorage.getItem('lang');
        const userauth = localStorage.getItem('userAuth');
        const userInfo = localStorage.getItem('userInfo');
        const flg = localStorage.getItem('flag');

        if(theme || lang ) {
            changeTheme(JSON.parse(theme));
            changeLang(JSON.parse(lang), JSON.parse(flg))
        }

        if(userauth){
            authUser(JSON.parse(userInfo))
        }

    }, []);

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(state.theme));
        localStorage.setItem('lang', JSON.stringify(state.lang));
        localStorage.setItem('flag', JSON.stringify(state.flag));

        if(state.auth){

            localStorage.setItem('userAuth', JSON.stringify( state.auth ));
            localStorage.setItem('userInfo', JSON.stringify( state.userInfo ));
            
        }else{

            localStorage.removeItem('userAuth');
            localStorage.removeItem('userInfo');

        }
    })

    return(
        <Context.Provider
            value={{
                auth: state.auth,
                theme: state.theme,
                lang: state.lang,
                flag: state.flag,
                userInfo: state.userInfo,
                notifs: state.notif,
                news: state.news,

                changeTheme,
                changeLang,
                authUser,
                userLogout,
                addNotif,
                removeNotif
            }}
        >
            {children}
        </Context.Provider>
    )

}

export default ContextProvider