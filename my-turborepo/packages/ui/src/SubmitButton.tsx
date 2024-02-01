import { Button } from '@chakra-ui/react'
import React from 'react'

type SubmitButtonProps = {
    callback: () => void
}

function SubmitButton({ callback }: SubmitButtonProps) {
    return (
        <Button onClick={callback}>test</Button>
    )
}

export default SubmitButton