import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Provider } from 'src/app/interfaces/provider';
import { faSearch, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit,OnChanges {
   @Input() list : Provider[] = [];
   @Output() create = new EventEmitter();
   @Output() open = new EventEmitter();
   @Output() delete = new EventEmitter();
   filteredList:Provider[] = [];

   //Icons
   searchIcon = faSearch;
   plusIcon = faPlus;
   timesIcon = faTimes;

  constructor() { }

  ngOnInit(): void {
    this.assignCopy();
  }


  ngOnChanges(changes:SimpleChanges): void {
      for(let prop in changes){
        if(prop == 'list'){
          this.assignCopy();
        }
      }
  }


  onCreate(){
    this.create.emit('create');
  }

  onOpen(item){
    this.open.emit(item);
  }

  onDelete(item){
    this.delete.emit(item);
  }

  filterChange(input){
    console.log('filtered by:', input.value)
    if (!input.value) {
      this.assignCopy();
    } // when nothing has typed
    this.filteredList = Object.assign([], this.list).filter(
      item => item.name.toLowerCase().indexOf(input.value.toLowerCase()) > -1
    )
  }

  assignCopy() {
    this.filteredList = Object.assign([], this.list);
  }


}
