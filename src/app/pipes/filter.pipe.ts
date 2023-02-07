import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(episodes: string[]) {
    // return episodes.slice(-5).map((url) => {
    //   return url.split('/').slice(-1)[0];
    // });
    return episodes.reduce((acc: Array<string>, url: string, i, arr) => {
      if (i < arr.length - 5) {
        return acc;
      } else {
        acc.push(url.split('/').slice(-1)[0]);
        return acc;
      }
    }, []);
  }
}
