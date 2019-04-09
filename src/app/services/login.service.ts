import { Injectable } from '@angular/core';
import { User } from '../objects/users';

@Injectable()
export class LoginService{
    isAuth = false;
    userlist: Array<User> = [];

    login(user, pswd){
        if(this.userlist.length>0){
            for (let i = 0; i < this.userlist.length, this.isAuth==false; i++) {
                if((this.userlist[i].username==user)&&(this.userlist[i].password==pswd)){
                    sessionStorage.username = user;
                    sessionStorage.password = pswd;
                    this.isAuth=true;
                    //(Renny) ecco i dati nel sessionStorage per il component Profilo 
                    sessionStorage.name = this.userlist[i].name;
                    sessionStorage.surname = this.userlist[i].surname;
                    sessionStorage.sex = this.userlist[i].sex;
                    sessionStorage.email = this.userlist[i].email;
                    sessionStorage.phone = this.userlist[i].phone;
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
        sessionStorage.clear();
        this.isAuth=false;
    }

    addUser(name: string, surname: string, username: string, password: string, email: string, sex: string, phone: string){
        this.userlist.push(new User(name, surname, username, password, email, sex, phone));
    }
    
}