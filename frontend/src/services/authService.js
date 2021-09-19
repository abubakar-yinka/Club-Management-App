import API from './api';


const AuthService = {
    login: async (data) => {
        return await API.post('/login', data)
            .then(({ data }) => {
                API.defaults.headers['Authorization'] = `Bearer ${data.token}`
                return data
            })
            .catch(err => {
                console.log('Auth Service Error', err)
                throw err
            })
    },
    register: async (data) => {
        return await API.post('/register', data)
            .then(({ data }) => {
                console.log(data)
                API.defaults.headers['Authorization'] = `Bearer ${data.token}`
                return data
            })
            .catch(err => {
                console.log('Auth Service Error', err)
                throw err
            })
    },
    logout: () => {

    },
    
}

export default AuthService