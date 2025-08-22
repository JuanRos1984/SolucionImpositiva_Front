import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContribuyentesView } from './components/contribuyentes-view/contribuyentes-view';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContribuyentesView],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('consulta-contribuyentes');
}
