import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './components/listing/listing.component';
import { CreatePackageComponent } from './components/create-package/create-package.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {path:'',
    component:ListingComponent,
    
  },
  {
    path:'create',
    component:CreatePackageComponent
  },
  {
    path:'details',
    component:DetailsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackagesRoutingModule { }
