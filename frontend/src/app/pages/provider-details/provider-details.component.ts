import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProvidersService } from 'src/app/services/providers.service';

@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.scss']
})
export class ProviderDetailsComponent implements OnInit {

  provider:any;
  providerId:string;

  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private service:ProvidersService
  ) { }

  ngOnInit(): void {
    this.providerId = this.activatedRoute.snapshot.paramMap.get('id');
    this.provider = this.service.initProvider();
    if(this.providerId != 'NEW'){
      this.getProvider();
    }
  }

  getProvider(){
    this.service.getProvidersById(this.providerId).subscribe(
      (data)=>{
        this.provider = data.provider;
      },
      (error)=>{
        alert('error al obtener proveedor');
      }
    )
  }


  save(provider){
    if(this.providerId == 'NEW'){
      this.create(provider);
      return;
    }

    this.service.putProvider(this.providerId,provider).subscribe(
      (data)=>{
        alert('el proveedor se ha guardado con éxito');
      },
      (error)=>{
        alert('error al obtener proveedor');
      }
    )
  }

  create(provider){
    this.service.postProvider(provider).subscribe(
      (data)=>{
        alert('el proveedor se ha creado con éxito');
      },
      (error)=>{
        alert('error al obtener proveedor');
      }
    )
  }

  cancel(){
    //console.log('return to providers-list');
    this.router.navigateByUrl('/providers')
  }

}
