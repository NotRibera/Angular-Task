import { Pipe, PipeTransform } from '@angular/core';
import { debounceTime, map, Observable } from 'rxjs';

@Pipe({
  name: 'filterEmp'
})
export class FilterPipe implements PipeTransform {

  transform(employee: any, filterText: string): any {
    if (employee.length === 0 || filterText === '') {
      return new Promise((resolve,reject)=>{
        resolve(employee);
      });
    } else { 
      console.log(employee);
      return this.filterPromise(employee,filterText);
      // return employee.filter((employee: { name: any; }) => {
      //   return employee.name.toLowerCase() === filterText.toLowerCase()
      // })
    }
  }

  filterPromise(employee:any,filterText:string){
    let timer: any;
    console.log(' Emp ');
    console.log(employee);
    let filteredEmp= employee.filter((emp: { name: string; })=>emp.name.toLowerCase().includes(filterText.toLocaleLowerCase()));
    console.log('filtered Emp ');
    console.log(filteredEmp);
    return new Promise((resolve,reject)=>{
      clearTimeout(timer);
      timer =setTimeout(()=>{
        resolve(filteredEmp);
      },500)
    });
  }

// ______________________________________________________________

    // transform(employee$: Observable<any[]>,searchText:string): Observable<any[]> {
    //   return employee$.pipe(
    //     debounceTime(300),
    //     map(employee => {
    //       if (!searchText){
    //         return employee;
    //       }
    //       searchText = searchText.toLowerCase();
    //       return employee.filter(item => employee.name.toLowerCase().includes(searchText)
    //       );
    //     })
    //   );
    // }
}
