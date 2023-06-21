import { FC } from "react"
import { useLocation } from "react-router-dom"
import { AccountHeader } from "./detail/AccountHeader"
import { Overview } from "./detail/Overview"
import { Subscriptions } from "./detail/Subscriptions"


type LocationState = {
    id: any
    }
export const UserDetail: FC = () => {
    const location = useLocation()
    const user = location.state as LocationState
    return (
       <>
       <AccountHeader user_id={user.id}/>
       {/* <Overview/> */}
       <Subscriptions/>
       </>


    )}