import axios from 'axios'

class UserService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/users`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getUserById(id) {
        return this.api.get(`/${id}`)
    }

    editUserById(editData) {
        return this.api.put(`/edit`, editData)
    }
}

const userService = new UserService()

export default userService 