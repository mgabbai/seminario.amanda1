import type { BoxProps } from '@mui/material'
import { Box } from '@mui/material'
import type { PropsWithChildren } from 'react'

type tStickProps = Omit<BoxProps, 'position'>

export default function Stick(props: PropsWithChildren<tStickProps>) {
    return (
        <Box
            position={'sticky'}
            {...props}
        />
    )
}
