import { RouterModule, Routes  } from '@angular/router';
import { AddComponent } from './UI/add/add.component';
import { ViewComponent } from 'src/app/UI/view/view.component';
import { UpdateComponent } from 'src/app/UI/update/update.component';
import { AppComponent } from 'src/app/app.component';


export const appRoute: Routes = [
 { path: 'add', component: AddComponent },
 { path: 'view', component: ViewComponent },
 { path: 'update/:id', component: UpdateComponent}
 
];
