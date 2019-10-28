import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'power'
})
export class PowPipe implements PipeTransform{
    transform(num: number, pow: number = 1): number {
        return num ** pow
    }

}