import { useContext } from 'react'

import { ThemeContext } from '../providers/theme-provider/ThemeProvider'

export const useTheme = () => useContext(ThemeContext)
