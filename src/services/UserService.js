import axios from "axios";

const localHost="192.168.1.105";
const urlapi="http://"+localHost+":";


export default class EmployeeService {
   
    async signIn(data) {
      return axios({
        method:'POST',
        url:urlapi+"8092/api/user/signIn",
        data:data
      }).then(function(response){
        return response.data
      }).catch(function(error){
        
        console.log(error);
      })
    }
    

    
    async login(data) {
        return axios({
          method:'POST',
        
           url:urlapi+"8092/api/user/login?email="+data.email+"&password="+data.password,
          data:data
        }).then(function(response){
            
          return response
        }).catch(function(error){
          
          console.log(error);
        })
      }
      async getEmployee(email) {
        return axios({
          method:'GET',
          
          url:urlapi+"8092/api/user/getEmployee?email="+email,
          data:email
        }).then(function(response){
          return response.data
        }).catch(function(error){
          
          console.log(error);
        })
      }
}