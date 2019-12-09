import {getLogin} from '../../api/login.api'

export function authentificatePage(login){
    return getLogin(login);
}