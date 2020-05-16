import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'deviceKeyfilter',
    pure: false
})
export class DeviceKeyFilterPipe implements PipeTransform {
    transform(items: any[], filter: string[]): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => filter.find(value => value === item.key) === undefined);
    }
}
