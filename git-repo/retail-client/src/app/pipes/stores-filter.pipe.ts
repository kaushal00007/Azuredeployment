import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'storesFilter'
})
export class StoresFilterPipe implements PipeTransform {

  transform(items: any[], keyword: any, properties: string[]): any[] {
    if (!items) {
      return [];
    }
    if (!keyword) {
      return items;
    }
    return items.filter(item => {
      let itemFound: boolean;
      let val: any;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < properties.length; i++) {
        try {
          val = item[properties[i]].toString();
          keyword = keyword.toString();
          if (val.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
            itemFound = true;
            break;
          }
        } catch (e) {
        }
      }
      return itemFound;
    });
  }

}
