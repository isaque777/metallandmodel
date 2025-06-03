export class Breadcrumb {
  active: string;
  link: string;
  icon: string;
  description: string;
  routerLinkActive: string;
  constructor(
    active: string,
    link: string,
    icon: string,
    description: string,
    routerLinkActive: string,
  ) {
    this.active = active;
    this.link = link;
    this.icon = icon;
    this.description = description;
    this.routerLinkActive = routerLinkActive;
  }
}
