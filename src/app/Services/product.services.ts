import { Injectable } from '@angular/core';

import { Product } from '../entity/product.entity';

@Injectable()
export class ProductService {

    private products: Product[];

    constructor() {
        this.products = [
            { id: '1', name: '7½oz Beef Burger', price: 7.00, photo: '/assets/images/burger_1.png' },
            { id: '2', name: '5oz Bacon & Cheese Burger', price: 5.00, photo: '/assets/images/burger_2.png' },
            { id: '3', name: '5oz Beef Burger', price: 6.00, photo: '/assets/images/burger_3.png' },
            { id: '4', name: 'Veggie Burger', price: 5.00, photo: '/assets/images/burger_4.png' },
            { id: '5', name: 'Smokey Bacon Burger', price: 8.00, photo: '/assets/images/burger_5.png' },
            { id: '6', name: 'Regular Burger', price: 6.00, photo: '/assets/images/burger_6.png' },
            { id: '7', name: 'Mighty Mac', price: 6.00, photo: '/assets/images/burger_7.png' },
            { id: '8', name: 'Cheese Burger', price: 7.00, photo: '/assets/images/burger_8.png' }

        ];
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}