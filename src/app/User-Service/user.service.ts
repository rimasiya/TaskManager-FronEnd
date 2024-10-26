import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  UserUrl="http://localhost:5134/api/Users"
  constructor(private http:HttpClient) {

   }


   getuser(){
    return this.http.get<any[]>(this.UserUrl)
   }

   PostUser(user:User){
    return this.http.post(this.UserUrl,user)
   }

   DeleteByid(id:number){
    return this.http.delete(this.UserUrl+"/"+id)
   }
   getUserById(id:number){
    return this.http.get<User>(this.UserUrl + '/' + id);
  }

  addUser(addUser:User){
    return this.http.post(this.UserUrl,addUser);
  }

  updateUser(id:number, updateUser:User){
    return this.http.put(this.UserUrl+ '/' +id,updateUser);
  }

  deleteUser(id:number){
    return this.http.delete(this.UserUrl +'/'+ id);
  }

}

export interface User{
  id:number,
  nic:string,
  firstName:string,
  lastName:string,
  email:string,
  password:string,
  address?:Address
}

export interface Address{
id:number,
addressline1:string,
addressline2:string,
city:string
}