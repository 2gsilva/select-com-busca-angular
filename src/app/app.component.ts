import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComboboxComPesquisaComponent } from "./components/combobox-com-pesquisa/combobox-com-pesquisa.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComboboxComPesquisaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'combobox-com-pesquisa';
}
