import { Button } from '@chakra-ui/react'
import React from 'react'

type SubmitButtonProps = {
    callback: () => void
}

function SubmitButton({ callback }: SubmitButtonProps) {
    return (
        <Button color='red' margin={4} onClick={callback}>Submit</Button>
    )
}

export default SubmitButton