
import api from './api'

export const loginRequest =  async (  email: string, password : string)  => {
    return api.post('/auth/login' ,{
        email, password
    });
  
}