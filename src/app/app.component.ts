import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed = false;

  layout=[
    {
      title:'test1',
      route:'/welcome/test1',
    },
    {
      title:'test2',
      route:'/welcome/test2',
    },
    {
      title:'test3',
      route:'/welcome/test3',
    },
    {
      title:'svg动画示例',
      route:'/welcome/test4',
    },
  ]
}
