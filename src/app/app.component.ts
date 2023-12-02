import { Component } from '@angular/core';
import { User, UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TempleWebsite';
  constructor(private userService: UserService){
    this.registerNewUser({name: 'Chapal', email: 'chapalbuet@yahoo.com', age: 35});
  }

  registerNewUser(user: User){
    this.userService.registerUser(user).subscribe({
      next: result=>{
          console.log('User registered successfully');
        },
      error: error=>{
        console.log('User could not be registered: ', error);
      }
    })
  }
}
