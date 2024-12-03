import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BukuComponent } from './buku/buku.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path : 'admin',
    component : AdminComponent,
    children : [
      {
        path : '',
        component : DashboardComponent
      },
      {
        path : 'buku',
        component : BukuComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
