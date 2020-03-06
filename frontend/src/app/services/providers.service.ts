import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProviderRoot, Provider } from '../interfaces/provider';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  sUrl:string;

  constructor(
    private http:HttpClient
  ) {
    this.sUrl = `${window.location.origin}${environment.API_PATH}/provider`;
  }

  getProviders(){
    let q = `${this.sUrl}`;
    return this.http.get<ProviderRoot>(q);
  }
  
  getProvidersById(id){
    let q = `${this.sUrl}/${id}`;
    return this.http.get<ProviderRoot>(q);
  }
  
  getProvidersCuits(){
    let q = `${this.sUrl}/cuit`;
    return this.http.get<ProviderRoot>(q);
  }
  
  postProvider(provider){
    let q = `${this.sUrl}`;
    return this.http.post<ProviderRoot>(q,provider);
  }
  
  putProvider(id,provider){
    let q = `${this.sUrl}/${id}`;
    return this.http.put<ProviderRoot>(q,provider);
  }
  
  deleteProvider(id){
    let q = `${this.sUrl}/${id}`;
    return this.http.delete<ProviderRoot>(q);
  }

  initProvider(){
    return <Provider> {
      name:'Nuevo Provedor',
      cuit:null,
      email:'',
      address:'',
      phone:null,
      ri:false
    }
  }

}


