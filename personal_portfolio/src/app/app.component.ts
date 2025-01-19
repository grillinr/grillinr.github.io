import { Component } from '@angular/core';
import { MaterialNavigationComponent } from './material-navigation/material-navigation.component';

@Component({
  selector: 'app-root',
  imports: [MaterialNavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'personal_portfolio';
}
