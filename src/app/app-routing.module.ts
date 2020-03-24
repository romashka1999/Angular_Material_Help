import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatsidenvComponent } from './matsidenv/matsidenv.component';


const routes: Routes = [
  // {path: 'buttonsAndIndicators', component: },
  {path: 'navigation', component: MatsidenvComponent},
  // {path: 'layout', component: },
  // {path: 'formControls', component: },
  // {path: 'popupsAndModlas', component: },
  // {path: 'dataTables', component: },
  // {path: '', component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
