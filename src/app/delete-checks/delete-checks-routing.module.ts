import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DeleteChecksComponent } from "./delete-checks.component";

const routes: Routes = [{ path: "", component: DeleteChecksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteChecksRoutingModule {}
