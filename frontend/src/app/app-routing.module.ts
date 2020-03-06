import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProvidersListComponent } from './pages/providers-list/providers-list.component';
import { ProviderDetailsComponent } from './pages/provider-details/provider-details.component';


const routes: Routes = [
  { path: '',pathMatch:'prefix', redirectTo:'providers' },
  { path: 'providers', component: ProvidersListComponent },
  { path: 'provider/:id', component: ProviderDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
