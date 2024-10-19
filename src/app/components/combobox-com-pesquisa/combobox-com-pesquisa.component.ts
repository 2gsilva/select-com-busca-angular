import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-combobox-com-pesquisa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './combobox-com-pesquisa.component.html',
  styleUrl: './combobox-com-pesquisa.component.css'
})
export class ComboboxComPesquisaComponent implements OnInit {
  responsePesquisa: any = [];
  form!: FormGroup;
  modalRef!: NgbModalRef;
  
  constructor(
    private _modalService: NgbModal,
    private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this._formBuilder.group({
      item: ['']
    });
  }

  open(content: any) {
    this.getItem('teste');
    this.modalRef = this._modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  close(): void {
    this.modalRef.close();
  }

  getItem(item : string): void {
    this.responsePesquisa = this.pesquisarItem(item);
  }

  pesquisarItem(search : string) : any[]{
    let  response : any[] = [
      {
        codigo: 1,
         titulo: 'teste 1'
      },
      {
        codigo: 2,
        titulo: 'teste 2'
      }
    ];
    return response.filter(res => res.titulo.includes(search));
  }

  select(item: any) {
    window.alert(item.titulo + ', foi selecionado!')
    this.close();
  }
}
