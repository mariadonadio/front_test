import { Directive, Injectable, forwardRef, Input } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProvidersService } from '../services/providers.service';


@Injectable({ providedIn: 'root' })
export class DuplicateCuitValidator implements AsyncValidator {
  constructor(private service: ProvidersService) {}

  validate(
    ctrl: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.service.getProvidersCuits().pipe(
        map( resp => {
          if(resp.success){
            let duplicate = resp.providers.find((prov)=>{ return prov.cuit == ctrl.value });
            if(duplicate){
              return { duplicated: true }; 
            }
          }
          return null;           
        }),
        catchError(() => of(null))
    );
  }
}

@Directive({
  selector: '[duplicated]',
  providers: [{
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => DuplicateCuitValidator),
      multi: true
  }]

})

export class DuplicatedCuitDirective{
  constructor(private validator: DuplicateCuitValidator) {}
  
  validate(control: AbstractControl) {
    this.validator.validate(control);
  }

}
