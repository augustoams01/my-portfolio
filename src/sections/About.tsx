import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import BookImage from "@/assets/images/book-cover.png"
import Image from "next/image";
import StarIcon from "@/assets/icons/star.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg"
import MapImage from "@/assets/images/map.png";
import SmilingMemoji from "@/assets/images/memoji-smile.png"
import { TechIcon } from "@/components/TechIcon";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxitems";

const toolBoxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
]

const hobbies = [
  {
    title: 'Instrumentos',
    emoji: '🎸'
  },
  {
    title: 'Jogos',
    emoji: '🎮'
  },
  {
    title: 'Musica',
    emoji:'🎶'
  },
  {
    title: 'Leitura',
    emoji: '📚'
  },
]

export const AboutSection = () => {
  return (
    <div className="py-20">

      <div className="container">
        <SectionHeader eyebrow="Sobre Mim" title="Um pouco do meu mundo" description="Veja mais sobre quem eu sou, o que eu faço e o que me inspira"/>
        <div className="mt-20">
          
          <Card>
            <CardHeader title="Minhas Leituras" description="veja como os livros moldam minhas ações"/>
            <div className="w-40 mx-auto mt-8">
              <Image src={BookImage} alt="Livro"/>
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader title="Minhas Ferramentas" description="explore as tecnologias e ferramentas que eu uso para criar experiências digitais" className="px-6 pt-6"/>
            <ToolBoxItems items={toolBoxItems} className="mt-6"/>
            <ToolBoxItems items={toolBoxItems} className="mt-6"/>
          </Card>

          <Card>
            
            <CardHeader title="Além da Programação"  description="conheça meus hobbies e interesses além do mundo tecnológico"/>
              <div>
                {hobbies.map(hobby => (
                  <div key={hobby.title}>
                    <span>{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
          </Card>

          <Card>
            <Image src={MapImage} alt="Imagem mapa"/>
            <Image src={SmilingMemoji} alt="Icone"/>
          </Card>

        </div>
      </div>
    </div>
  );
};
