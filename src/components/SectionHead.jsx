import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

export default function SectionHead({ eyebrow, title, desc, action }) {
  return (
    <div className="section-head">
      <div className="section-head__text">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="h2">{title}</h2>
        {desc && <p className="body section-head__desc">{desc}</p>}
      </div>
      {action && (
        <Link to={action.to} className={`btn ${action.variant || 'btn--soft'}`}>
          {action.label} <Icon name="arrow" />
        </Link>
      )}
    </div>
  )
}
