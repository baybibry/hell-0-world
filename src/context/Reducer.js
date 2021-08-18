import { THEME, LANG, LOGIN, LOGOUT, REMOVENOTIF, ADDNOTIF, NEWS } from './Types'

export default function contextReducer(state , action){
    let data = action.data;

    switch (action.type) {

        case THEME:
            return {
                ...state,
                theme: data
            }
        
        case LANG:
            return{
                ...state,
                lang: data.lang,
                flag: data.flag
            }
        
        case LOGOUT:
            return {
                ...state,
                auth: data,
                useInfo: {}
            }
        
        case LOGIN:
            return {
                ...state,
                auth: data.auth,
                userInfo: data.userData
            }

        case ADDNOTIF:
            return{
                ...state,
                notif: [...state.notif, data]
            }

        case REMOVENOTIF:
            return{
                ...state,
                notif: state.notif.filter(obj => obj.id !== data)
            }

        case NEWS:
            return{
                ...state,
                news: data
            }

        default:
            return state;

    }
}