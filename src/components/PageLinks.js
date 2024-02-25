import { pageLinks } from '../data'
import PageLink from './PageLink'
const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        return (
          <PageLink key={link.id} href={link.href} itemClass={link.itemClass} />
        )
      })}
    </ul>
  )
}
export default PageLinks
