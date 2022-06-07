import { Component, OnInit } from '@angular/core';
import { NzResizeEvent } from 'ng-zorro-antd/resizable';


@Component({
  selector: 'app-test1-component',
  templateUrl: './test1-component.component.html',
  styleUrls: ['./test1-component.component.less']
})
export class Test1ComponentComponent implements OnInit {
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

  listOfData:Array<{key?:string,name?:string,age?:number,address?:string,width?:number}> = [
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


  constructor() {}

  ngOnInit(): void {

  }

  id=1;
  onResize({ width }: NzResizeEvent, col: string): void {
    // cancelAnimationFrame(this.id);
    // this.id = requestAnimationFrame(() => {
      this.cols.forEach((item,ind)=>{
        if(item.title===col){
          this.cols[ind].width=`${width}px`;
          this.listOfData.map((subitem:any,index)=>{
            subitem.width = width
          })
        }
      })
    // });
    
    
  }

}
