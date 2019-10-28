import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tonumber'
})
export class TonumberPipe implements PipeTransform {

  transform(str: string): number {
    return +str
  }

}
