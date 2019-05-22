import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tree-view-wrapper',
  templateUrl: './tree-view-wrapper.component.html',
  styleUrls: ['./tree-view-wrapper.component.css']
})
export class TreeViewWrapperComponent implements OnInit {
  @Input('fields')
  public fields: any[];

  @ContentChild('template')
  public template: TemplateRef<string>;

  constructor() { }

  ngOnInit() {
  }

}