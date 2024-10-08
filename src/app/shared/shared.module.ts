import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { BtnComponent } from './components/btn/btn.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { StatusDirective } from './directives/status.directive';
import { TotalPipe } from './pipes/total.pipe';

@NgModule({
  declarations: [BtnComponent, TableLightComponent, TotalPipe, StatusDirective],
  imports: [CommonModule, RouterModule],
  exports: [
    TemplatesModule,
    IconsModule,
    BtnComponent,
    TableLightComponent,
    TotalPipe,
    StatusDirective,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
