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
    title: "Eventos",
    href: "/#eventos",
  },
  {
    id: 2,
    title: "Quem Somos",
    href: "/#quem-somos",
  },
  {
    id: 3,
    title: "Serviços",
    href: "/#servicos",
  },
  {
    id: 4,
    title: "Programação",
    href: "/programacao"
  },
  {
    id: 5,
    title: "Contato",
    href: "/#contato",
  },
];
