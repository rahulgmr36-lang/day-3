import { Routes } from '@angular/router';
import { Districts } from './home/districts/districts';
import { Contact } from './contact/contact';
import { Home } from './home/home';

export const routes: Routes = [
    {path: '',component:Home},
    {path: "districts",component: Districts},
    {path: "contact", component: Contact}
];
