import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import {ShowTaskComponent} from './show-task/show-task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { DeleteTaskComponent} from './delete-task/delete-task.component';
import {UpdateTaskComponent} from './update-task/update-task.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ShowTaskComponent,
    CreateTaskComponent,
    DeleteTaskComponent,
    UpdateTaskComponent
    
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'show-task', component: ShowTaskComponent},
      { path: 'create-task', component: CreateTaskComponent},
      { path: 'delete-task', component: DeleteTaskComponent},
      {path: 'update-task', component: UpdateTaskComponent}
      
    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

