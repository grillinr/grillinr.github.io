import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';

/**
 * @title Card with footer
 */
@Component({
  selector: 'about-me',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.scss',
  imports: [
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatGridListModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
