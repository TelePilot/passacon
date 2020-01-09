import React, { useState, useRef, useEffect } from 'react'
import Burger from '../burger/burger.component'
import Menu from '../menu/menu.component'
import { useOnClickOutside } from '../../hooks'
import sanityClient from '../../Client'
import Logo from '../logo/logo.component'

const Header = () => {
    const [open, setOpen] = useState(false)
    const [header, setHeader] = useState({
        meny: [],
        logga: ''
    })
    const node = useRef()
    useOnClickOutside(node, () => setOpen(false))
    useEffect(() => {
        const headerQuery = `*[_type == "navigation"]`

        sanityClient.fetch(headerQuery).then(header => {
            
          header.forEach(header => {
              setHeader(header)
          })
        })

        return
      }, [])

    return (
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu header={header} open={open} setOpen={setOpen} />
          <Logo logo={header.logga} setOpen={setOpen} />
        </div>
    )
}

export default Header
