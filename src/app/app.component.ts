import { Component } from '@angular/core';
import { GraphsModule } from './graphs/graphs.module';

@Component({
  selector: 'app-root',
  imports: [GraphsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'graph-dashboard';
}
