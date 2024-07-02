import { useState, useEffect, useMemo, useRef } from "react";
import Header from "./components/Header/Header";
import Section from "./components/Section";
import { Colors } from "./core/colors";
import ProjectCarousel from "./components/ProjectCarousel/ProjectCarousel";
import Card from "./components/Cards/Card";
import Skill from "./components/Skills/Skills";
import Contact from "./components/Contact";
import { SkillsProps } from "./components/Skills/index";
import Image from "./assets/images/me.webp";


export default function App() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [visibility, setVisibility] = useState(false)
  const lastTitle = useRef(document.title)
  console.log(lastTitle)

  // calculate scroll percentage
  const scrollPercentage = useMemo(() => {
    const documentHeight = document.documentElement.scrollHeight
    const windowHeight = window.innerHeight
    const scroll = (scrollPosition / (documentHeight - windowHeight)) * 100
    return scroll
  }, [scrollPosition])

  const skills = useMemo(() => {
    const skillList: SkillsProps[] = [
      {
        name: 'php',
        category: 'back'
      },
      {
        name: 'symfony',
        category: 'back'
      },
      {
        name: 'twig',
        category: 'front'
      },
      // {
      //   name: 'html',
      //   category: 'front'
      // },
      {
        name: 'javascript',
        category: 'front'
      },
      {
        name: 'typescript',
        category: 'front'
      },
      {
        name: 'react',
        category: 'front'
      },
      // {
      //   name: 'css',
      //   category: 'front'
      // },
      {
        name: 'sass',
        category: 'front'
      },
      {
        name: 'git',
        category: 'tool'
      },
      {
        name: 'github',
        category: 'tool'
      },
      {
        name: 'gitflow',
        category: 'backend'
      },
      {
        name: 'sql',
        category: 'back'
      },
      {
        name: 'mysql',
        category: 'back'
      },
      {
        name: 'wordpress',
        category: 'back'
      },
      {
        name: 'bootstrap',
        category: 'front'
      },
      {
        name: 'material-ui',
        category: 'front'
      },
      {
        name: 'api',
        category: 'back'
      },
      {
        name: 'api-platform',
        category: 'back'
      },
      {
        name: 'seo',
        category: 'front'
      },
      {
        name: 'vs code',
        category: 'tool'
      },
      {
        name: 'teams',
        category: 'communication'
      },
      {
        name: 'slack',
        category: 'communication'
      },
      {
        name: 'discord',
        category: 'communication'
      },
      {
        name: 'notion',
        category: 'tool'
      },
      {
        name: 'kanban',
        category: 'tool'
      },
      {
        name: 'scrum',
        category: 'tool'
      },
      {
        name: 'agile',
        category: 'tool'
      },
      {
        name: 'figma',
        category: 'design'
      },
      {
        name: 'ui',
        category: 'design'
      },
      {
        name: 'ux',
        category: 'design'
      },
    ]
    return skillList.sort(() => Math.random() - 0.5)
  }, [])

  const networks: networkProps[] = [
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/julien-degermann/',
      icon: 'linkedin.svg'
    },
    {
      name: 'github',
      url: 'https://github.com/JulienDegermann',
      icon: 'github.svg'
    },
    {
      name: 'e-mail',
      url: 'mailto:degermann.julien@gmail.com',
      icon: 'email.svg'
    },
    {
      name: 'phone',
      url: 'tel:+336 72 80 45 63',
      icon: 'phone.svg'
    },
  ]
  useEffect(() => {
    const handleVisibility = () => {
      console.log(visibility)
      document.title = visibility ? lastTitle.current : 'REVIENS !'


      visibility ? setVisibility(false) : setVisibility(true)
    }

    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [visibility])

  // listen scroll and return scroll position in px
  useEffect(() => {
    const scrollPosition = () => { setScrollPosition(window.scrollY) };
    window.addEventListener('scroll', scrollPosition);

    // remove event listener
    return () => {
      window.removeEventListener('scroll', scrollPosition);
    }
  }, [])

  return (
    <>
      {/* display scrollBar */}
      <div
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: `${scrollPercentage}%`,
          height: '5px',
          backgroundColor: Colors.PRIMARY,
          borderRadius: '0 5px 5px 0',
          boxShadow: `0 0 10px 4px ${Colors.PRIMARY}`,
          zIndex: 1000,
        }}
      >
      </div>
      <Header />
      <Section id="about" title="Me, Myself and I">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <img
            src={Image}
            alt="Photo de moi"
            style={{
              maxWidth: '300px',
            }}
          />
          <div
            style={{
              color: Colors.DARK,
              lineHeight: '2',
              width: '100%',
              marginLeft: '2rem',
            }}
          >
            <h3>Quelques infos sur moi</h3>
            <p>Prénom : Julien</p>
            <p>Nom : Degermann</p>
            <p>Âge : 35 ans</p>
            <p></p>
            <p>Prénom : Julien</p>
            <p>Prénom : Julien</p>
          </div>
        </div>
      </Section>
      <Section id="services" title='Mes valeur de dév' large={true}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
            color: Colors.DARK,
            height: '400px',
          }}
        >
          <Card
            title="Rigueur"
            image="web.jpg"
          >
            <p>
              La rigueur est une qualité essentielle. Elle permet de garantir un code de qualité, respectant .


            </p>
          </Card>
          <Card title="Curiosité" image="curious.jpg">
            <p>
              La volonté d'apprendre, de comprendre et de s'améliorer est une qualité essentielle pour un développeur.
            </p>
          </Card>
          <Card
            title="Adpatabilité"
            image="ditto.jpeg"
          >
            <p>
              Dans un monde où tout change rapidement, il est important de savoir s'adapter pour rester compétitif.
              Que ce soit la technologie, les besoins ou encore les normes,
            </p>
          </Card>
          <Card
            title="Esprit d'équipe"
            image="team.jpg"
          >
            <p>
              Travailler en équipe est une des clés du succès. C'est pourquoi il est important de savoir communiquer, écouter et collaborer.
            </p>
          </Card>
        </div>
      </Section>
      <Section id="projects" title="Projets" large={true}>
        <ProjectCarousel />
      </Section>
      ceci est un texte foncé
      <Section id="skills" title="Mon Nuage de Compétences">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {
            skills.map((skill, index) => (
              <Skill
                key={index}
                skill={skill}
              />
            ))
          }
        </div>
      </Section>
      <Section
        id="contact"
        title="Contact"
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {
            networks.map((network, index) => {
              return (
                <Contact
                  key={index}
                  network={network}
                />
              )
            })
          }

        </div>
      </Section>
    </>
  )
}



interface networkProps {
  name: string
  url: string
  icon: string
}