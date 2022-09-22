import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './form/edit/edit.component';
import { FormComponent } from './form/form.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { AuthGuard } from './shared/auth.guard';
import { LoginService } from './shared/login.service';

const routes: Routes = [
  { path:'form', component:FormComponent , canActivate:[AuthGuard] },
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'update/:id',component:EditComponent},
  {path:'login', component:LoginRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
