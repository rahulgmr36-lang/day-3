import { Component } from '@angular/core';
import { Car } from "../car/car";

@Component({
  selector: 'app-home',
  imports: [Car],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
