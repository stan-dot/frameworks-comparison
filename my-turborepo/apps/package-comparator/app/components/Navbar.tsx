
import { AppBar } from '@mui/material'
import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div>
            <AppBar>
                <Link href={'./from-file'} >from file</Link>
            </AppBar>
        </div>
    )
}

export default Navbar