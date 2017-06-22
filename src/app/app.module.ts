import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//services
import { PostCommentService } from './services/post-comment-service.service';

let services = [
  PostCommentService,
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ...services,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
