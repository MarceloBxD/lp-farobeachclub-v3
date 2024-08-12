import { FacebookIcon } from "@/assets/icons/FacebookIcon";
import { InstagramIcon } from "@/assets/icons/InstagramIcon";
import { LinkedinIcon } from "@/assets/icons/LinkedinIcon";
import { TwitterIcon } from "@/assets/icons/TwitterIcon";
import { TiktokIcon } from "@/assets/icons/TiktokIcon";
import YoutubeIcon from "@/assets/icons/YoutubeIcon";
import LinktreeIcon from "@/assets/icons/LinktreeIcon";

export const footerData = [
  {
    name: "Termos de uso",
    link: "/termos",
  },
  {
    name: "Política de Privacidade",
    link: "/privacy",
  },
  {
    name: "Política de Cookies",
    link: "#cookie-policy",
  },
];

interface mediaProps {
  id: number;
  name: string;
  link: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  bgColor: string;
  GA_id?: string;
}

export const mediaFooterData: mediaProps[] = [
  {
    id: 1,
    name: "Facebook",
    link: "https://www.facebook.com/faro-beach-club",
    icon: FacebookIcon,
    bgColor: "#3b5998",
    GA_id: "fb_click",
  },
  {
    id: 2,
    name: "Instagram",
    link: "https://www.instagram.com/farobeachclub",
    icon: InstagramIcon,
    bgColor: "#e4405f",
    GA_id: "ig_click",
  },
  {
    id: 3,
    name: "Linkedin",
    link: "https://www.linkedin.com/company/faro-beach-club",
    icon: LinkedinIcon,
    bgColor: "#0077b5",
    GA_id: "linkedin_click",
  },
  {
    id: 4,
    name: "Yotube",
    link: "https://www.youtube.com/@farobeachclub",
    icon: YoutubeIcon,
    bgColor: "#ff0000",
    GA_id: "yt_click",
  },
  {
    id: 5,
    name: "Tiktok",
    link: "https://www.tiktok.com/@farobeachclub",
    icon: TiktokIcon,
    bgColor: "#000",
    GA_id: "tt_click",
  },
  {
    id: 6,
    name: "Linketree",
    link: "https://linktr.ee/farobeachclub.rj",
    icon: LinktreeIcon,
    bgColor: "#39e09b",
    GA_id: "linktree_click",
  },
];
