
export interface INavItem {
  path: string;
  caption: string;
  icon: string;
}

export const nav: INavItem[] = [
  {
    path: '/signin',
    caption: 'Login',
    icon: 'person'
  },
  {
    path: '/signup',
    caption: 'Sing Up',
    icon: 'person_add'
  }
];

export const authNav: INavItem[] = [
  {
    path: '/training',
    caption: 'Training',
    icon: 'timer'
  }
];