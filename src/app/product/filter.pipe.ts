import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filtrtString: String, propName: any): any {

    //initialize an empty array to store filtered products
    const result: any = []


    if (!value || filtrtString == "" || propName == "") {

      return value;

    }

    else {

      value.forEach((item: any) => {

        if (item[propName].trim().toLowerCase().includes(filtrtString.trim().toLowerCase())) {
          result.push(item)
        }

      })

      return result;
      
    }

  }

}
