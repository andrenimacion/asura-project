import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      // { path: 'Conf', component: ConfigurationsComponent },
      // { path: 'HomeView', component: HomeViewComponent },
      // { path: 'Reporte', component: ReporteComponent },
       { path: 'ThinkBoard', component: DashboardComponent },
       { path: 'Login', component: LoginComponent, pathMatch: 'full' },
       { path: '**', pathMatch: 'full', redirectTo: 'Login'  }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
