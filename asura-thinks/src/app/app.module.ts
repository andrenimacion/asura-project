import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { WorkAreaComponent } from './work-area/work-area.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WorkAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'Work', component: WorkAreaComponent },
      { path: 'Login', component: LoginComponent, pathMatch: 'full' },
      { path: '**', pathMatch: 'full', redirectTo: 'Login'  }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
