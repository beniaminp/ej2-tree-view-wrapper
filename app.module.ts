import { TemplateTreeViewComponent } from './template.component';








import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from "@angular/common";












import { SharedModule } from './common/shared.module';

import {TreeViewWrapperComponent} from './custom-tree-view/tree-view-wrapper/tree-view-wrapper.component';



@NgModule({
    imports: [SharedModule , CommonModule, BrowserModule, HttpModule, JsonpModule, BrowserModule],
declarations: [TemplateTreeViewComponent, TreeViewWrapperComponent],
bootstrap: [TemplateTreeViewComponent]
})
export class AppModule { }