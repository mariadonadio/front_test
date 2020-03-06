import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import { ProvidersListComponent } from './pages/providers-list/providers-list.component';
import { ProviderDetailsComponent } from './pages/provider-details/provider-details.component';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { DuplicatedCuitDirective } from './directives/duplicated-cuit.directive';
//material
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ProvidersListComponent,
    ProviderDetailsComponent,
    TableComponent,
    FormComponent,
    DuplicatedCuitDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
