import { ReactNode } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { currentToken, logOut } from '../../redux/features/authSlice'
import { Navigate } from 'react-router'
import { verifyToken } from '../../Utiles/verifyToken'

export default function ProtectedRoute({children, role}: {children: ReactNode, role: string | undefined}) {

    const token = useAppSelector(currentToken)

    let user;
    console.log(user)

    if(token){
        user = verifyToken(token);
    }

    const dispatch = useAppDispatch();

    if (role !== undefined && role !== user?.role) {
        dispatch(logOut())
        return<Navigate to="/login" replace={true} />
    }

    if(!token){
        return<Navigate to="/login" replace={true} />
    }
  return children
}
