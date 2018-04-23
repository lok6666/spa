import { NgModule } from '@angular/core';
import { ListComponent } from './list/list';
import { DetailsComponent } from './details/details';
import { InfosComponent } from './infos/infos';
@NgModule({
	declarations: [ListComponent,
    DetailsComponent,
    InfosComponent],
	imports: [],
	exports: [ListComponent,
    DetailsComponent,
    InfosComponent]
})
export class ComponentsModule {}
