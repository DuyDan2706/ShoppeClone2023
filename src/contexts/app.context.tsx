import { getAccessTokenFromLs, getProfileFromLs } from 'src/utils/auth'
import { createContext, useState } from 'react'
import { User } from 'src/types/user.type'
import { profile } from 'console'
interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  profile: User | null
  setprofile: React.Dispatch<React.SetStateAction<User | null>>
}

const initialAppContext: AppContextInterface = {
  isAuthenticated: Boolean(getAccessTokenFromLs()),
  setIsAuthenticated: () => null,
  profile: getProfileFromLs(),
  setprofile: () => null
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
  const [profile, setprofile] = useState<User | null>(initialAppContext.profile)

  return (
    <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated, profile, setprofile }}>
      {children}
    </AppContext.Provider>
  )
}
