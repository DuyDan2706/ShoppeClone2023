import React from 'react'
import { Link } from 'react-router-dom'
import { useFloating, FloatingPortal, arrow, shift, offset } from '@floating-ui/react-dom-interactions'
import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState , useId} from 'react'

interface Props {
  children: React.ReactNode
  renderPopover: React.ReactNode
  className?: string
}

export default function Popover({ children, className, renderPopover }: Props) {
  const [open, setOpen] = useState(false)
  const arrowRef = useRef<HTMLElement>(null)
  const { x, y, reference, floating, strategy, middlewareData } = useFloating({
    middleware: [offset(10), shift(), arrow({ element: arrowRef })]
  })

   const id = useId()
  const showPopver = () => {
    setOpen(true)
  }
  const hidePopver = () => {
    setOpen(false)
  }
  return (
    <div className={className} ref={reference} onMouseEnter={showPopver} onMouseLeave={hidePopver}>
      {children}
      <FloatingPortal id='1'>
        <AnimatePresence>
          {open && (
            <motion.div
              ref={floating}
              style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
                width: 'max-content',
                transformOrigin: `${middlewareData.arrow?.x}px top`
              }}
              initial={{ opacity: 0, transform: 'scale(0)' }}
              animate={{ opacity: 1, transform: 'scale(1)' }}
              exit={{ opacity: 0, transform: 'scale(0)' }}
              transition={{ duration: 0.2 }}
            >
              <span
                ref={arrowRef}
                className='absolute -translate-y-full border-[11px] border-x-transparent border-b-white border-t-transparent'
                style={{
                  left: middlewareData.arrow?.x,
                  top: middlewareData.arrow?.y
                }}
              />
              {renderPopover}
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </div>
  )
}
