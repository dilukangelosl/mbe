import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        NgbModule.forRoot()
    ],
    declarations: [LoginComponent]
})
export class LoginModule {
}
