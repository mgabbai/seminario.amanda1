'use client'
import Row from './row'
import styles from '../../styles/components/layout/navbar.module.scss'
import Link from 'next/link'
import { Box } from '@mui/material'
import { usePathname } from 'next/navigation'
import colors from '../../styles/colors.module.scss'

const links = [
    { href: '/', name: 'Home' },
    { href: '/quem-somos', name: 'Quem Somos' },
    { href: '/estudos', name: 'Estudos' },
    { href: '/nosso-proposito', name: 'Nosso Proposito' },
    { href: '/faca-sua-encomenda', name: 'Faça sua encomenda' },
]

export default function Navbar() {
    const pathname = usePathname()

    return (
        <Row
            component={'header'}
            className={styles.navbar}
        >
            {links.map((link) => (
                <Box
                    key={link.name}
                    sx={{
                        transition: '300ms',
                        color: pathname === link.href ? colors.burntOrange : 'inherit',
                    }}
                >
                    <Link href={link.href}>{link.name}</Link>
                </Box>
            ))}
        </Row>
    )
}
