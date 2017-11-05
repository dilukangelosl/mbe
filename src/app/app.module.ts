import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { CommonGuard } from './shared';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuth } from 'angularfire2/auth';
import {DataTableModule} from "angular2-datatable";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { CKEditorModule } from 'ng2-ckeditor';
import { FileDropDirective } from './directives/file-drop.directive';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-4/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
@NgModule({
    declarations: [
        AppComponent,
        
    
        
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        DataTableModule,
        AppRoutingModule,
        CKEditorModule,
        FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        })
    ],
   
    providers: [AuthGuard,AngularFireAuth,CommonGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
