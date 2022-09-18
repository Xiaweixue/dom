import $axios from 'axios'
const http = $axios.create({
    baseURL: 'http://leju.bufan.cloud/',
    timeout: 1000
})
http.interceptors.request.use(function (config) {
    config.headers.token = window.sessionStorage.getItem('token')
    return config
}, function (error) {
    return Promise.reject(error)
})
http.interceptors.response.use(function (response) {
    return response
}, function (error) {
    return Promise.reject(error)
})
export default http