import axios from 'axios'

class TodoService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/todos`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    createTodo(todoData) {
        return this.api.post(`/save`, {todoData})
    }

    getTodosByCreator(id) {
        return this.api.get(`/${id}`)
    }

    editTodoById(id, todoData) {
        return this.api.put(`/${id}/edit`, {todoData} )
    }
    
    deleteTodoById(id) {
        return this.api.delete(`/${id}/delete`)
    }
}

const todoService = new TodoService()

export default todoService