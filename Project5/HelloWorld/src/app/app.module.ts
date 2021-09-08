import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponentComponent } from './text-component/text-component.component';
import { ImageComponentComponent } from './image-component/image-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { DirectiveComponent } from './directive/directive.component';
import { DirectoryComponent } from './directory/directory.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule} from  '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    TextComponentComponent,
    ImageComponentComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    ProfileComponent,
    FormComponent,
    UserComponent,
    HomeComponent,
    DirectiveComponent,
    DirectoryComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
