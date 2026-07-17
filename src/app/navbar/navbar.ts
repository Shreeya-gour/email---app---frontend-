import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'navbar',
  imports: [MatButtonModule,
  MatIconModule,
MatToolbarModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
