export interface NetworkProps {
  name: string,
  url: string,
  icon: string
}

export const networks: NetworkProps[] = [
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