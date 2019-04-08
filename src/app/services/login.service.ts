import { Injectable } from '@angular/core';

@Injectable()
export class LoginService{
    isAuth = false;
    
    login(user, pswd){
        if(user!=""&&pswd!=""){
            sessionStorage.username = user;
            sessionStorage.password = pswd;
            this.isAuth=true;
        }
    }

    logout(){
        sessionStorage.clear();
        this.isAuth=false;
    }

    getUsername(){
        return sessionStorage.username;
    }
}