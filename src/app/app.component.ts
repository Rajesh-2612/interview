import { Component, OnInit } from '@angular/core';
import { ApiIntegrateService } from './api-integrate.service' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  breweries: any;
  order = 'asc';
  sort: any;
  constructor(private Api :ApiIntegrateService){
  }

  ngOnInit(){
    this.getAllDetails()
  }

  orderby(value: any){
    this.order = value
    this.getAllDetails()
  }

  sortby(value: any){
    this.sort = value
    this.getAllDetails()
  }

  getAllDetails(){
    this.Api.getalldetails(this.sort, this.order).subscribe(
      res => {
        this.breweries = res
        console.log(this.breweries)
      },
      error=>{
        console.log(error)
      }
    )
  }

  getperpage(page: any){
    this.Api.getbyperpage(page).subscribe(
      res => {
        this.breweries = res
        console.log(this.breweries)
      },
      error=>{
        console.log(error)
      }
    )
  }
  
}
