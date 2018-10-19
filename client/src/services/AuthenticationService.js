import Api from '@/services/Api'

export default {
    register (credentials) {
        return Api().post('register', credentials)
    }
}


// AunthenticationService.register({
//     email: 'Shaan.anshu@gmail.com',
//     password: '123456'
// })