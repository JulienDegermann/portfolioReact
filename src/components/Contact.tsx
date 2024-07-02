import { Colors } from '../core/colors'
import Link from './Link'

export default function Contact(
  { network }: contactProps
) {
  return (
    <Link
      color= {Colors.PRIMARY}
      // variant='outlined'
      text={network.name}
      link={network.url}
      blank={true}
    />
  )
}

interface networkProps {
  name: string
  url: string
  icon: string
}

interface contactProps {
  network: networkProps
}
