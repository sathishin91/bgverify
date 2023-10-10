import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AppsRoutingModule } from './apps-routing.module';
import { ChatComponent } from './chat/chat.component';
import { BlogComponent } from './blog/blog.component';
import { ContactGridComponent } from './contact-grid/contact-grid.component';

@NgModule({
  declarations: [ChatComponent, BlogComponent, ContactGridComponent],
  imports: [CommonModule, AppsRoutingModule, NgScrollbarModule],
})
export class AppsModule {}
