import { Colors } from '../core/styles/colors'
import Link from './Link'
import { NetworkProps } from '../core/datas/networks'

export default function ContactPill(
  { network }: {network: NetworkProps}
) {
  return (
    <Link
      color= {Colors.PRIMARY}
      // variant='outlined'
      text={network.name}
      link={network.url}
      blank={true}
      image={network.icon}
    />
  )
}