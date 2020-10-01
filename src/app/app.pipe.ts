import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'app'
})
export class AppPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    var strs = value.split(args[0], 3);
    return strs[2] + args[1] + strs[1] + args[1]+ strs[0];
  }

}
