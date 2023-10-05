import type { BoxProps } from '@mui/material'
import { Box } from '@mui/material'
import type { PropsWithChildren } from 'react'

type tAbsoluteProps = Omit<BoxProps, 'position'>

export default function Absolute(props: PropsWithChildren<tAbsoluteProps>) {
    return (
        <Box
            position={'absolute'}
            {...props}
        />
    )
}
