
import { AppBar, Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div>
            <AppBar>
                <Box>
                    <Link href={'./from-file'} >from file</Link>
                </Box>
            </AppBar>
        </div>
    )
}

export default Navbar