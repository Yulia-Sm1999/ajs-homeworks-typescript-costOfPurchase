import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  getTotalCost(): number{
    return this._items.reduce((acc, item) => acc + item.price, 0);
  }

  getCostWithDiscount(discount: number): number {
    let totalCost = this.getTotalCost();
    return totalCost -= (totalCost * discount / 100);
  }

  deleteFromCart(id: number): void {
    const itemToDelete = this._items.findIndex(item => item.id === id);
    this._items.splice(itemToDelete, 1);
  }
}