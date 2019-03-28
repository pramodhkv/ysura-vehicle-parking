import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'searchPipe'
})
export class searchPipe implements PipeTransform {
    transform(value: any, searchText: string) {
        if (searchText) {
            searchText = searchText.toLowerCase();
            return value.filter(
                (element: any) => {
                    return element.licensePlateNumber.toLowerCase().indexOf(searchText) > -1;
                }
            );
        }
        return value;
    }
} 