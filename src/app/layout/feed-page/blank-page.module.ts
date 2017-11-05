import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';
import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
import {DataTableModule} from "angular2-datatable";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';
import {MediauploaderComponent} from '../../helpers/mediauploader/mediauploader.component';
import { FileDropDirective } from '../../directives/file-drop.directive';
@NgModule({
  imports: [
    CommonModule,
    BlankPageRoutingModule,
    PageHeaderModule,
    DataTableModule,
    CKEditorModule,
    NgbModule.forRoot(),
    FormsModule
  
  ],
  declarations: [BlankPageComponent,MediauploaderComponent,FileDropDirective],
  entryComponents:[]
})
export class BlankPageModule { }
