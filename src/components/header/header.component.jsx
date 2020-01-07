import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import Burger from '../burger/burger.component'
import Menu from '../menu/menu.component'
import { useOnClickOutside } from '../../hooks'

const Header = () => {
    const [open, setOpen] = useState(false)
    const node = useRef()
    useOnClickOutside(node, () => setOpen(false))
    return (
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
    )
}

export default Header
