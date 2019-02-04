import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdDashbordComponent } from './admin/ad-dashbord/ad-dashbord.component';
import { AdProfileComponent } from './admin/ad-profile/ad-profile.component';
import { AdSidebarComponent } from './admin/ad-sidebar/ad-sidebar.component';
import { AdAdvertsmntComponent } from './admin/ad-advertsmnt/ad-advertsmnt.component';
import { AdCustListComponent } from './admin/ad-cust-list/ad-cust-list.component';
import { AdSupListComponent } from './admin/ad-sup-list/ad-sup-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    AdDashbordComponent,
    AdProfileComponent,
    AdSidebarComponent,
    AdAdvertsmntComponent,
    AdCustListComponent,
    AdSupListComponent,
    PageNotFoundComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpModule,
    HttpClientModule
  ],
  providers: [AuthService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
