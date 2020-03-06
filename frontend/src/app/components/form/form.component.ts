import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Provider } from 'src/app/interfaces/provider';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() id:any = null;
  @Input() item:Provider = null;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    
  }


  onSubmit(){
    this.save.emit(this.item);
  }

  onCancel(){
    this.cancel.emit();
  }

}
