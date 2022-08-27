import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './form/edit/edit.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path:'form', component:FormComponent},
  {path:'', redirectTo:'form', pathMatch:'full'},
  {path:'update/:id',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
