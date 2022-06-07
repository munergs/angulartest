import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SvgtestComponentComponent } from './svgtest-component/svgtest-component.component';
import { Test1ComponentComponent } from './test1-component/test1-component.component';
import { Test2ComponentComponent } from './test2-component/test2-component.component';
import { Test3ComponentComponent } from './test3-component/test3-component.component';
import { WelcomeComponent } from './welcome.component';


const routes: Routes = [
  { path: 'test', component: WelcomeComponent },
  { path: 'test1',component:Test1ComponentComponent },
  { path: 'test2',component:Test2ComponentComponent },
  { path: 'test3',component:Test3ComponentComponent },
  { path: 'test4',component:SvgtestComponentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
