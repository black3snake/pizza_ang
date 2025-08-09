import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviation'
})
export class AbbreviationPipe implements PipeTransform {

  transform(value: string): string {
    let strArray: string[] = value.split(' ');
    value = '';
    strArray.forEach(item => {
      if (item.length > 1) {
        value += item.slice(0, 1).toUpperCase();
      } else {
        value += item;
      }
    })
    return value;
  }
}
