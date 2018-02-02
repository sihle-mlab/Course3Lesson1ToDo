import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewToDoPage } from './new-to-do';

@NgModule({
  declarations: [
    NewToDoPage,
  ],
  imports: [
    IonicPageModule.forChild(NewToDoPage),
  ],
})
export class NewToDoPageModule {}
