import React, { ReactElement, useState } from 'react'
import ExpandButton from './ExpandButton/ExpandButton'
import SideBar from './SideBar/SideBar'


function SideMenu(): ReactElement {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <ExpandButton onExpand={() => setIsOpen(e => !e)} />
            <SideBar open={isOpen} />
        </>
    )
}

export default SideMenu
