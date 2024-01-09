import axios from "axios"

const AuthService = {
    async userRegister() {
        const response = await axios.post('/users')
        return response
    },
    async userLogin() {
        const response = await axios.post('/users/login')
    },
    async getUser() {
        const response = await axios.get('/user')
    }
}