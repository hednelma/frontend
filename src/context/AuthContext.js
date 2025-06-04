import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const checkAuth = async () => {
            const userToken = await AsyncStorage.getItem('userToken')
            const getUser = async () => {
                setUser(JSON.parse(await AsyncStorage.getItem('user')))
            }
            if (userToken) {
                setIsAuthenticated(true)
            }

            getUser()
        }

        checkAuth()
    }, [])

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}