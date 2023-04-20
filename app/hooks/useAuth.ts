import { useContext } from 'react'

import { AuthContext } from '../providers/auth-provider/AuthProvider'

export const useAuth = () => useContext(AuthContext)
