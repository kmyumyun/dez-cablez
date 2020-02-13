import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { AddItemComponent } from './item/add-item/add-item.component';
import { DetailsComponent } from './item/details/details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


const routes: Routes = [
    {
        path: 'store',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: StoreComponent
            },
            {
                path: 'cart',
                pathMatch: 'full',
                component: ShoppingCartComponent
            }
        ],
    },
    {
        path: 'item',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/store'
            },
            {
                path: 'add',
                pathMatch: 'full',
                component: AddItemComponent
            },
        ]
    },
    {
        path: 'item/:id',
        component: DetailsComponent
    }
];

export const StoreRoutingModule = RouterModule.forChild(routes);
