"use client"

import { useEffect } from "react"
import {Crisp} from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("4dfdaf35-0e19-451c-a732-a5701197afcd")
    }, [])

    return null
}