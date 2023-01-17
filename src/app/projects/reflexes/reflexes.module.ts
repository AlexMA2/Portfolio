import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import { ReflexesRoutingModule } from './reflexes-routing.module';

@NgModule({
  declarations: [BoardComponent],
  imports: [CommonModule, ReflexesRoutingModule],
})
export class ReflexesModule {}
