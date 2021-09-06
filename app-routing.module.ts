import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DolistComponent } from './dolist/dolist.component';
import { InfoInputComponent } from './info-input/info-input.component';

const routes: Routes = [
{path:'info-input', component: InfoInputComponent},
{path:'app-root', component: AppComponent},
{path:'dolist', component: DolistComponent},
{path:'', component:InfoInputComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
