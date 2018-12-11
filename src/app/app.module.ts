import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from  '@angular/forms';
import { AppComponent } from './app.component';
import { AddComponent } from './UI/add/add.component';
import { UpdateComponent } from './UI/update/update.component';
import { ViewComponent } from './UI/view/view.component';
import { appRoute } from './app.routing'
import { RouterModule, Routes  } from "@angular/router";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from 'src/app/task.service';
import { TaskSearchPipe } from 'src/app/Pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    UpdateComponent,
    ViewComponent,
    TaskSearchPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
