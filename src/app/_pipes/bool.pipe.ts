import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'myBoolPipe' })
export class BoolPipe implements PipeTransform {
  transform(value: boolean, args: string[]): any {
    if (value) {
      return 'Si';
    } else {
      return 'No';
    }
  }
}
