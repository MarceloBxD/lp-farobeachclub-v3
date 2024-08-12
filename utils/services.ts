import GeneratorIcon from "@/assets/icons/GeneratorIcon";
import CleanIcon from "@/assets/icons/CleanIcon";
import IluminationIcon from "@/assets/icons/Ilumination";
import GradesIcon from "@/assets/icons/GradesIcon";
import MedicalSupportIcon from "@/assets/icons/MedicalSupportIcon";
import ServiceIcon from "@/assets/icons/ServiceIcon";
import SecurityIcon from "@/assets/icons/SecurityIcon";
import RadioIcon from "@/assets/icons/RadioIcon";

type ServiceProps = {
  id: number;
  icon: () => JSX.Element;
  text: string;
};

export const servicesData: ServiceProps[] = [
  {
    id: 1,
    icon: GeneratorIcon,
    text: "Gerador 180kva",
  },
  {
    id: 2,
    icon: CleanIcon,
    text: `
    Equipe de limpeza`,
  },

  {
    id: 4,
    icon: GradesIcon,
    text: `Grades`,
  },
  {
    id: 5,
    icon: ServiceIcon,
    text: `Serviço de A & B (Buffet)
    `,
  },
  {
    id: 6,
    icon: SecurityIcon,
    text: `Equipe de segurança`,
  },
  {
    id: 7,
    icon: MedicalSupportIcon,
    text: `Equipe médica, brigada 
    e salva vida
    `,
  },
  {
    id: 8,
    icon: IluminationIcon,
    text: `Som, luz, painel 
    de led e palco
    `,
  },
];
