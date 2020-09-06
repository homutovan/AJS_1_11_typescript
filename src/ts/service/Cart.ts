import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        const targetItem = this._items.find((currItem) => currItem.id === item.id);
        if (targetItem) {
            if(targetItem.quantity) targetItem.quantity += 1;
        } else this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    getTotalCost(): number {
        return this._items.reduce((acc, el) => el.price + acc, 0);
    }
    getTotalCostIncludingDiscounts(discount: number): number {
        return ((100 - discount) / 100) * this._items.reduce((acc, el) => el.price + acc, 0);
    }

    delItem(id: number): void {
        this._items.splice(this._items.findIndex((item) => item.id === id) , 1);
    }
}