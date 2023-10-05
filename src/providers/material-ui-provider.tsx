'use client'
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles'
import { useState, type PropsWithChildren } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import colors from '../styles/colors.module.scss'

const theme = createTheme({
    typography: {
        fontFamily: "'PT Sans', 'sans-serif'",
    },
    palette: {
        primary: {
            main: colors.turquoiseSurf,
            contrastText: colors.white,
        },
    },
})

export default function MaterialUiProvider(props: PropsWithChildren<{ options: any }>) {
    const { options, children } = props

    const [{ cache, flush }] = useState(() => {
        const cache = createCache(options)
        cache.compat = true
        // eslint-disable-next-line @typescript-eslint/unbound-method
        const prevInsert = cache.insert
        let inserted: string[] = []
        cache.insert = (...args) => {
            const serialized = args[1]
            if (cache.inserted[serialized.name] === undefined) {
                inserted.push(serialized.name)
            }
            return prevInsert(...args)
        }
        const flush = () => {
            const prevInserted = inserted
            inserted = []
            return prevInserted
        }
        return { cache, flush }
    })

    useServerInsertedHTML(() => {
        const names = flush()
        if (names.length === 0) {
            return null
        }
        let styles = ''
        for (const name of names) {
            styles += cache.inserted[name]
        }
        return (
            <style
                key={cache.key}
                data-emotion={`${cache.key} ${names.join(' ')}`}
                dangerouslySetInnerHTML={{
                    __html: styles,
                }}
            />
        )
    })

    return (
        <CacheProvider value={cache}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </StyledEngineProvider>
        </CacheProvider>
    )
}
