import './globals.css'
import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import MaterialUiProvider from '../providers/material-ui-provider'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Seminário - Ala Jd. Amanda I',
    description: 'Criado com amor e carinho para o seminário da Ala Jardim Amanda I de a Igreja de Jesus Cristo dos Santos dos Últimos Dias.',
    creator: 'Marcio Gabbai Gonçalves e Anaile Gonçalves',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={lexend.className}>
                <MaterialUiProvider options={{ key: 'mui' }}>{children}</MaterialUiProvider>
            </body>
        </html>
    )
}
