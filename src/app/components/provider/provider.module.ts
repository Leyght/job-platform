import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProviderComponent} from './provider/provider.component';
import {ProviderSearchComponent} from './provider-search/provider-search.component';
import {ProviderRoutingModule} from './provider-routing.module';
import {ButtonModule, ToolbarModule} from 'primeng/primeng';
import {ToolbarProviderComponent} from './toolbar-provider/toolbar-provider.component';
import {RequestListComponent} from './request-list/request-list.component';
import {TableModule} from 'primeng/table';
import {ProviderSettingsComponent} from './provider-settings/provider-settings.component';
import {ToastModule} from 'primeng/toast';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddedReviewListComponent} from './added-review-list/added-review-list.component';
import {ReceivedReviewListComponent} from './received-review-list/received-review-list.component';
import {SharedModule} from '../shared/shared.module';
import {MultiSelectModule} from 'primeng/multiselect';

@NgModule({
  imports: [
    CommonModule,
    ProviderRoutingModule,
    ToolbarModule,
    TableModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    SharedModule,
    MultiSelectModule
  ],
  declarations: [
    ProviderComponent,
    ToolbarProviderComponent,
    RequestListComponent,
    ProviderSettingsComponent,
    AddedReviewListComponent,
    ReceivedReviewListComponent,
    ProviderSearchComponent,
  ],
  exports: [ToolbarProviderComponent,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
  entryComponents: [
    ProviderComponent,
    RequestListComponent
  ]
})
export class ProviderModule {
}
