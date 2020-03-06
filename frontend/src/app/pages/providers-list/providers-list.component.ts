import { Component, OnInit } from '@angular/core';
import { Provider } from 'src/app/interfaces/provider';
import { ProvidersService } from 'src/app/services/providers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.scss']
})
export class ProvidersListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'cuit'];
  dataSource:Provider[];
  loading:boolean = false;
  constructor(
    private service:ProvidersService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getProviders();
  }

  getProviders(){
    this.loading = true;
    this.service.getProviders().subscribe(
      (data)=>{
        this.loading = false;
        if(data.success){
          this.dataSource = data.providers;
          return;
        }
        console.error('Ha ocurrido un error:',data);
      },
      (error)=>{
        this.loading = false;
        console.error('Ha ocurrido un error:',error);
      }
    );
  }


  createProvider(ev){
    console.log(ev);
    this.router.navigateByUrl('/provider/'+'NEW')
  }

  openProvider(item){
    console.log(item);
    this.router.navigateByUrl('/provider/'+item._id)
  }
  
  deleteProvider(item){
    this.service.deleteProvider(item._id).subscribe(
      (data)=>{
        this.loading = false;
        if(data.success){
          console.log('Se ha borrado el elemento correctamente');
          this.getProviders();
          return
        }
        console.error('Ha ocurrido un error:',data);
      },
      (error)=>{
        this.loading = false;
        console.error('Ha ocurrido un error:',error);
      }
    );
    
  }

}
