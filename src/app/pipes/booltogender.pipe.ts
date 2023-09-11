import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booltogender'
})
export class BooltogenderPipe implements PipeTransform {

  transform(val: boolean): string {
    if(val == true){
      return "Male";
    } else {
        return "Female"
      }
  }

}
