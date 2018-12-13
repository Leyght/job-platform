import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobAddComponent} from './add-job/job-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CalendarModule, InputTextareaModule, MessageService, ToolbarModule} from 'primeng/primeng';
import {CardModule} from 'primeng/card';
import {SharedModule} from '../shared/shared.module';
import {ToastModule} from 'primeng/toast';
import {ClientComponent} from './client/client.component';
import {ClientRoutingModule} from './client-routing.module';
import {ProviderListComponent} from './provider-list/provider-list.component';
import {ProviderCardComponent} from './provider-card/provider-card.component';
import {JobEditComponent} from './job-edit/job-edit.component';
import {ToolbarClientComponent} from './toolbar-client/toolbar-client.component';
import {JobListComponent} from './job-list/job-list.component';


@NgModule({
  imports: [
    ToolbarModule,
    CommonModule,
    FormsModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    CalendarModule,
    InputTextareaModule,
    CardModule,
    SharedModule,
    ToastModule
  ],
  declarations: [
    ProviderListComponent,
    ProviderCardComponent,
    JobAddComponent,
    JobEditComponent,
    ClientComponent,
    ToolbarClientComponent,
    JobListComponent
  ],
  exports: [ToolbarClientComponent],
  providers: [MessageService],
  entryComponents: [
    JobAddComponent,
    JobEditComponent,
    ToolbarClientComponent,
    ProviderListComponent,
    ProviderCardComponent,
    JobListComponent
  ]
})
export class ClientModule {
}
