import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {Navbar} from './navbar/navbar';
import { Home } from './home/home';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet ,
    Navbar,
    Home,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  MatFormFieldModule,
  MatInputModule,
 FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('emailgui');
}
