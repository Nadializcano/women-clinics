import {Pipe, PipeTransform } from '@angular/core';
import { Clinic } from './models/clinic.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Pipe({

  name: "SortByRatePipe",
  pure: false

})

export class SortByRatePipe implements PipeTransform{
    clinics: FirebaseListObservable<any[]>;
  transform(input: Clinic[], filterType){
    var output: Clinic[]=[];

    function comparatorName(a,b)
    {
      return (a.name<b.name?-1:(a.name>b.name?1:0));
    }

    if(filterType==="Low-High")
    {
      output=input.sort(comparatorName);
    }

    if(filterType==="High-Low")
    {
      output = input.sort(comparatorName).reverse();
    }
    return output;
  }
}
