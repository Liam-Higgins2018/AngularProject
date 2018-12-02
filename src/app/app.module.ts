import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {PostService} from './services/post.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from "@angular/forms";
import { MatInputModule,MatMenuModule,MatCardModule,MatButtonModule,MatIconModule,MatToolbarModule,MatExpansionModule} from '@angular/material';
import { PostCreateComponent } from 'src/app/Create-Post/create-post.component';
import { PostEditComponent } from 'src/app/Edit-Post/edit-post.component';
import { PostDetailsComponent } from 'src/app/Post-Details/post-details.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { ProductService } from './Services/product.services';
import { InformationComponent } from './information/information.component';

const appRoutes: Routes = [
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'post-create',
    component: PostCreateComponent
  },

  {
    path: 'post-edit/:id',
    component: PostEditComponent
  },

  {
    path: 'post-details',
    component: PostDetailsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
{
    path: 'info',
    component: InformationComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    PostDetailsComponent,
    PostCreateComponent,
    PostEditComponent,
    MenuComponent,
    CartComponent,
    InformationComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatMenuModule
  ],
  providers: [PostService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

