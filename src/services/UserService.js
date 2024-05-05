import axios from "axios";

const localHost="10.95.19.72";
const urlapi="http://"+localHost+":";


export default class EmployeeService {
   
    async signIn(data) {
      return axios({
        method:'POST',
        url:urlapi+"8092/api/employee/signIn",
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
            url:urlapi+"44311/api/UserControllers/login?email="+data.email+"&password="+data.password,
          //url:"https://10.95.19.72:44311/api/UserControllers/login?email=melos2%40gmail.com&password=Askım.96",
          data:data
        }).then(function(response){
            console.log(response);
          return response
        }).catch(function(error){
          
          console.log(error);
        })
      }
      async getEmployee(email) {
        return axios({
          method:'GET',
          
          url:urlapi+"8092/api/employee/getEmployee?email="+email,
          data:email
        }).then(function(response){
          return response.data
        }).catch(function(error){
          
          console.log(error);
        })
      }
}