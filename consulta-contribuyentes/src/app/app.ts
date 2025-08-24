import { Component, signal } from '@angular/core';
import { ContribuyentesView } from './components/contribuyentes-view/contribuyentes-view';

@Component({
  selector: 'app-root',
  imports: [ContribuyentesView],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('consulta-contribuyentes');
}
