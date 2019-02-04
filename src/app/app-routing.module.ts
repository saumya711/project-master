import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdDashbordComponent } from './admin/ad-dashbord/ad-dashbord.component';
import { AdAdvertsmntComponent } from './admin/ad-advertsmnt/ad-advertsmnt.component';
import { AdCustListComponent } from './admin/ad-cust-list/ad-cust-list.component';
import { AdSupListComponent } from './admin/ad-sup-list/ad-sup-list.component';
import { AdProfileComponent } from './admin/ad-profile/ad-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
},
{
  path: "admin",
  component: AdminComponent,
  children: [
      {path:"dashboard", component: AdDashbordComponent},
      {path:"advertisement", component: AdAdvertsmntComponent},
      {path:"customerlist", component: AdCustListComponent},           
      {path:"supplierlist", component: AdSupListComponent},           
      {path:"profile", component: AdProfileComponent},           
        
  ]
},
{
  path: '**',
  component: PageNotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
