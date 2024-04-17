import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: "",redirectTo:"register",pathMatch:"full"},
  {path: "register",component:RegistrationComponent},
  {path: "search",component:SearchDeleteComponent},
  {path: "update/:id",component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
