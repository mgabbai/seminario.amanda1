import type { BoxProps } from '@mui/material'
import { Box } from '@mui/material'
import type { PropsWithChildren } from 'react'

type tColumnProps = Omit<BoxProps, 'flexDirection' | 'display'> & {
    flexDirection?: 'column' | 'column-reverse'
}

export default function Column({ flexDirection = 'column', ...props }: PropsWithChildren<tColumnProps>) {
    return (
        <Box
            {...props}
            display={'flex'}
            flexDirection={flexDirection}
        />
    )
}
