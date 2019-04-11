import { Injectable } from '@angular/core';
import { User } from '../objects/users';

@Injectable()
export class LoginService{
    isAuth = false;
    userlist: Array<User> = [];7

    login(user, pswd){
        if(this.userlist.length>0){
            for (let i = 0; i < this.userlist.length, this.isAuth==false; i++) {
                if((this.userlist[i].username==user)&&(this.userlist[i].password==pswd)){
                    sessionStorage.username = user;
                    sessionStorage.password = pswd;
                    this.isAuth=true;
                    
                    localStorage.name = this.userlist[i].name;
                    localStorage.surname = this.userlist[i].surname;
                    localStorage.sex = this.userlist[i].sex;
                    localStorage.email = this.userlist[i].email;
                    localStorage.phone = this.userlist[i].phone;
                }
                else{
                    alert("Utente non esistente")
                }
            }
        }
        else
            alert("Non ci sono utenti, creane alcuni");
    }

    logout(){
        localStorage.clear();
        sessionStorage.clear();
        this.isAuth=false;
    }

    addUser(name: string, surname: string, username: string, password: string, email: string, sex: string, phone: string){
        this.userlist.push(new User(name, surname, username, password, email, sex, phone));
    }
    
}