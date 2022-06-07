import { NgModule } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { FormsModule } from '@angular/forms';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CommonModule } from '@angular/common';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { Test1ComponentComponent } from './test1-component/test1-component.component';
import { Test2ComponentComponent } from './test2-component/test2-component.component';
import { Test3ComponentComponent } from './test3-component/test3-component.component';
import { SvgtestComponentComponent } from './svgtest-component/svgtest-component.component';

@NgModule({
  imports: [
CommonModule,
    FormsModule,
    WelcomeRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzResizableModule
  ],
  declarations: [
    WelcomeComponent,
    Test1ComponentComponent,
    Test2ComponentComponent,
    Test3ComponentComponent,
    SvgtestComponentComponent
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
