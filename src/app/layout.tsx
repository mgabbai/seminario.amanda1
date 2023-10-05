import './globals.css'
import type { Metadata } from 'next'
import MainProvider from '../providers/main-provider'
import { Box } from '@mui/material'
import Column from '../components/layout/column'
import Navbar from '../components/layout/navbar'
import Footer from '../components/layout/footer'

export const metadata: Metadata = {
    title: 'Seminário - Ala Jd. Amanda I',
    description: 'Criado com amor e carinho para o seminário da Ala Jardim Amanda I de a Igreja de Jesus Cristo dos Santos dos Últimos Dias.',
    creator: 'Marcio Gabbai Gonçalves e Anaile Gonçalves',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <MainProvider>
                    <Column
                        component={'main'}
                        height={'100%'}
                        width={'100%'}
                    >
                        <Navbar />
                        <Box flex={1}>{children}</Box>
                        <Footer />
                    </Column>
                </MainProvider>
            </body>
        </html>
    )
}
