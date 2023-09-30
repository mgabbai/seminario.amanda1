declare module '@mui/material/styles' {
    interface CustomPalette {
        summary?: PaletteColorOptions
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Palette extends CustomPalette {}
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface PaletteOptions extends CustomPalette {}
}

export {}
