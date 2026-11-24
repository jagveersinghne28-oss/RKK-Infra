import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'

export const CONTACT_EMAIL = 'dr.rakeshkhali@gmail.com'

const ContactContext = createContext({ openContact: () => {} })
export const useContact = () => useContext(ContactContext)

export function ContactProvider({ children }) {
  const [open, setOpen] = useState(false)
  const openContact = useCallback(() => setOpen(true), [])
  return (
    <ContactContext.Provider value={{ openContact }}>
      {children}
      {open && <ContactModal onClose={() => setOpen(false)} />}
    </ContactContext.Provider>
  )
}

function ContactModal({ onClose }) {
  const [copied, setCopied] = useState(false)
  const closeRef = useRef(null)

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.prompt('Copy email address:', CONTACT_EMAIL)
    }
  }

  return (
    <div className="modal" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal__card" role="dialog" aria-modal="true" aria-labelledby="contact-title">
        <button ref={closeRef} className="modal__close" onClick={onClose} aria-label="Close">
          <Icon name="close" />
        </button>
        <span className="eyebrow">DIRECT EXECUTIVE CONTACT // ADVISORY LIAISON</span>
        <h2 id="contact-title" className="modal__title">
          Get in Touch with Dr. Rakesh Kumar Khali
        </h2>
        <p className="body">
          For technical advisory, strategic peer reviews, keynote addresses, or geotechnical project governance, you
          can reach Dr. Rakesh Kumar Khali directly via email.
        </p>

        <div className="modal__mail">
          <span className="mono">PRIMARY CORRESPONDENCE</span>
          <span className="tag tag--dark">EXECUTIVE INBOX</span>
          <div className="modal__mail-row">
            <a className="modal__address" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            <button className="btn btn--soft btn--sm" onClick={copy}>
              <Icon name="copy" className="icon icon--sm" /> {copied ? 'Copied' : 'Copy'}
            </button>
            <a
              className="btn btn--dark btn--sm"
              href={`mailto:${CONTACT_EMAIL}?subject=Enquiry%20for%20Dr.%20Rakesh%20Kumar%20Khali`}
            >
              <Icon name="mail" className="icon icon--sm" /> Send Email
            </a>
          </div>
        </div>

        <div className="modal__loc">
          <span className="mono">LOCATION &amp; OPERATIONAL SCOPE</span>
          <p>New Delhi, India // Operational Head: Underground Works &amp; Hydro Power</p>
        </div>
      </div>
    </div>
  )
}
