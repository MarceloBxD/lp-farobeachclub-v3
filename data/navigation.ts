interface NavigationItem {
  id: number;
  title: string;
  href: string;
  subMenu?: NavigationItem[];
}

export const navigation: NavigationItem[] = [
  {
    id: 0,
    title: "Home",
    href: "/",
  },
  {
    id: 1,
    title: "Conheça o espaço",
    href: "/#beachclub",
  },
  {
    id: 2,
    title: "Eventos Realizados",
    href: "/#eventos-privados",
  },
  {
    id: 3,
    title: "Programação",
    href: "/programacao",
  },
  {
    id: 4,
    title: "Contato",
    href: "#contato",
  },
];
