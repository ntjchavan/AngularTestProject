import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanValue'
})
export class BooleanValuePipe implements PipeTransform {

  transform(value: boolean): string {
    if( value == true){
      return 'Yes';
    }
    return 'No';
  }

}
