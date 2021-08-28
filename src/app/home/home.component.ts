import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient,
    private spinner: NgxSpinnerService) { }
  imageList=[
    {
      img:"../../assets/icons/Lorem-ipsum.png",
      name:"LONAVALA"
    },
    {
      img:"../../assets/icons/Lorem-ipsum.png",
      name:"PUNE"
    },
    {
      img:"../../assets/icons/Lorem-ipsum.png",
      name:"NAINITAL"
    },
    {
      img:"../../assets/icons/Lorem-ipsum.png",
      name:"MAHABALESHWAR"
    },
    {
      img:"../../assets/icons/Lorem-ipsum.png",
      name:"JAIPUR"
    },
    {
      img:"../../assets/icons/Lorem-ipsum.png",
      name:"SHIMLA"
    },
    {
      img:"../../assets/icons/Lorem-ipsum.png",
      name:"GOA"
    },
    {
      img:"../../assets/icons/Lorem-ipsum.png",
      name:"DELHI"
    },
    {
      img:"../../assets/icons/Lorem-ipsum.png",
      name:"BANGALORE"
    },
    {
      img:"../../assets/icons/Lorem-ipsum.png",
      name:"UDAIPUR"
    },
    {
      img:"../../assets/icons/Lorem-ipsum.png",
      name:"ALIBAUG"
    },
    {
      img:"../../assets/icons/Lorem-ipsum.png",
      name:"OOTY"
    },
    {
      img:"../../assets/icons/Lorem-ipsum.png",
      name:"COORG"
    },
    {
      img:"../../assets/icons/Lorem-ipsum.png",
      name:"LAVASA"
    }
  ]
  spinnerFlag=true
  tableData:any
  ngOnInit(): void {
    this.getData()
  }
  getWidth(){
    return window.innerWidth - 250
  }
  getData(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data:any)=>{
      console.log(data)
      this.tableData=data
      setTimeout(() => {
        this.spinnerFlag=false
      }, 1000);
    })
  }
}
