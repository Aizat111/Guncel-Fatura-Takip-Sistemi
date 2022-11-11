import { FC } from "react"

import { AccountHeader } from "./AccountHeader"
import { Overview } from "./components/Overview"

export const Profile: FC = () => {
    return (
       <>
       <AccountHeader/>
       {/* <Overview/> */}
       <Overview/>
       </>


    )}