import type { BoxProps } from '@mui/material'
import { Box } from '@mui/material'
import type { PropsWithChildren } from 'react'

type tColumnProps = Omit<BoxProps, 'flexDirection' | 'display'> & {
    flexDirection?: 'row' | 'row-reverse'
}

export default function Row({ flexDirection = 'row', ...props }: PropsWithChildren<tColumnProps>) {
    return (
        <Box
            {...props}
            display={'flex'}
            flexDirection={flexDirection}
        />
    )
}
