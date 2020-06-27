import { Component } from '@angular/core';
import { AuthService } from '../sdk/core/auth.service';
import { Storage } from '@ionic/storage';
import { exec } from 'child_process';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
login;
name;
letter;
changeText: boolean;
  constructor(private storage: Storage,private authService:AuthService) {}
async ngOnInit(){
 this.exec();
 this.name = await this.storage.get('username');
 console.log(this.name);
 
 this.changeText = false;

 this.letter=this.name[0];

 this.letter=this.letter.toUpperCase()

 console.log(this.letter);
}
logoutt(){
   this.authService.logout();
 }
 async exec(){
 this.login = await this.storage.get('login');
 console.log(this.login);
 }
}
