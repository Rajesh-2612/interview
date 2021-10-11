import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiIntegrateService {

  constructor(
    private http: HttpClient,
  ) { }
  
  getalldetails(sort: any, order: any){
    return this.http.get<any>('https://api.openbrewerydb.org/breweries?sort='+ sort +',name:'+order);
  }
  
  getbyperpage(perpage: any){
      return this.http.get<any>('https://api.openbrewerydb.org/breweries?per_page=' + perpage);
  }
}
