import Axios from 'axios'

const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
const USER_TOKEN = 'token'

class AuthenticationService {

    registerSuccessfulLoginForJwt(username, token) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        sessionStorage.setItem(USER_TOKEN, token)
    }

    createJWTToken() {
        return 'Bearer ' + sessionStorage.getItem(USER_TOKEN)
    }

    setupAxiosInterceptors() {
        Axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = this.createJWTToken()
                }
                return config
            }
        )
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        sessionStorage.removeItem(USER_TOKEN);
    }
}

export default new AuthenticationService()