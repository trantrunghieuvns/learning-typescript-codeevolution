import React from 'react'
import { Login } from './LoginAuth'
import { ProfileProps } from './Profile'

type PrivateProps = {
    isLoggedinAuth: boolean
    Component: React.ComponentType<ProfileProps>
} // destructuring >>>> 

export const Private = ({ isLoggedinAuth, Component }: PrivateProps) => {
    if (isLoggedinAuth) { return <Component name='hieu' /> } else { return <Login /> }
}

