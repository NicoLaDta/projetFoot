import Api from '@/components/Api'

export default{
    Login(credentials){
        return Api().get('admin',credentials)
    }
}

// AuthenthificationServive.register({
//     name:'victor',
//     codeAdmin:'EMP82'
// })