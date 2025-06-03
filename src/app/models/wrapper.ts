export class Wrapper<T> {
  items: T[] = [];

  constructor(items?: T[]) {
    if (items) {
      this.items = items;
    }
  }

  getItems(): T[] {
    return this.items;
  }

  setItems(items: T[]): void {
    this.items = items;
  }
}
