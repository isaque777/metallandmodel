export class Link {
  public id: string;
  public url: string;
  public description: string;

  constructor(id: string = '', url: string = '', description: string = '') {
    this.id = id;
    this.url = url;
    this.description = description;
  }
}
