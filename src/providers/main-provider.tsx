import type { PropsWithChildren } from 'react'
import MaterialUiProvider from './material-ui-provider'

export default function MainProvider(props: PropsWithChildren) {
    return <MaterialUiProvider options={{ key: 'mui' }}>{props.children}</MaterialUiProvider>
}
