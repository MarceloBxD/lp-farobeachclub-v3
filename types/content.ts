export type ContentProps = {
  anchorId?: string;
  title: string;
  tag: string;
  date: string;
  description: any;
  banner: string;
  link?: string;
  fixed?: boolean;
  type: "Midia" | "Programação";
  category?:
    | "EVENTOS REALIZADOS"
    | "SHOWS REALIZADOS"
    | "ASSESSORIA DE IMPRENSA";
  instagram?: string;
  bannerCard?: boolean;
  pixieSet?: string;
  disclosure?: boolean;
};

export type CustomerProps = {
  title: string;
  banner: string;
};

export type DataProps = {
  customers: CustomerProps[];
};
