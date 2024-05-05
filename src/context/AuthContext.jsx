import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [signed, setSigned] = useState(false)
    const [user, setUser] = useState({
        email: '',
        password: ''
    })


  return (
    <AuthContext.Provider value={{user, setUser, signed, setSigned}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider



