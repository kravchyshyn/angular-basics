import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pageName'
})
export class PageNamePipe implements PipeTransform {

  transform(str: string): string {
    return str + '!!!'
  }

}
