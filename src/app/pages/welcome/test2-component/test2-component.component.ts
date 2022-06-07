import { Component, OnInit } from '@angular/core';
import { NzResizeEvent } from 'ng-zorro-antd/resizable';

@Component({
  selector: 'app-test2-component',
  templateUrl: './test2-component.component.html',
  styleUrls: ['./test2-component.component.less']
})
export class Test2ComponentComponent implements OnInit {
  ngOnInit(): void {
    
  }
  cols = [
    {
      title: 'Name',
      width: '180px'
    },
    {
      title: 'Age',
      width: '180px'
    },
    {
      title: 'Address',
      width: '200px'
    },
    {
      title: 'Actions'
    }
  ];

  listOfData:any = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  onResize({ width }: NzResizeEvent, col: string): void {
    // this.cols = this.cols.map(e => (e.title === col ? { ...e, width: `${width}px` } : e));
    this.cols.map(e=>{
      if(e.title===col){
        e.width=`${width}px`;
        this.listOfData.map((item:any)=>{
          item.width = `${width}px`;
        })
      }
    })
  }
 

}
