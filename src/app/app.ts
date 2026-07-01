import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from '../shared/components/side-bar/side-bar';
import { FormsModule } from '@angular/forms';
import { Heading } from './Learming/heading/heading';
import { User } from '../shared/models/user.model';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBar, FormsModule, Heading],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Angular_Application';//signal('Angular_Application');
  Heading = 'My Main Heading';
  user: User = {
    name: 'Arunkumar',
    age: 35,
    gender: 'Male'
  }

  onSuccess($e: boolean) {
    console.log($e)
  }
}
