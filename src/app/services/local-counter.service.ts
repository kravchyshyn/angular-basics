import { Injectable } from '@angular/core';
import {LogService} from "./log.service";

@Injectable()
export class LocalCounterService {

  constructor(private logService: LogService){

  }

  counter = 0

  inrease() {
    this.logService.log('Counter inreased...')
    this.counter++
  }

  decrease() {
    this.logService.log('Counter inreased...')
    this.counter--
  }
}
