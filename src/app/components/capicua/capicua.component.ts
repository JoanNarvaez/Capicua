import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-capicua',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './capicua.component.html',
  styleUrl: './capicua.component.scss'
})
export class CapicuaComponent {

  input: string=''
  esCapicua: boolean = false
  mensaje: string=''

  verificarCapicua(input: string): boolean {
    const palabraInvertida = input.split('').reverse().join('');
    return input === palabraInvertida;
  }
   
  onVerificar() {
    this.esCapicua = this.verificarCapicua(this.input);
  }


}
