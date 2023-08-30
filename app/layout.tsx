import React from "react";
import './globals.css';
import Header from "./components/header";

export default function test({
    children
}:{
    children:React.ReactNode
}){
    return(
        <html lang='en'>
            <body>
            <Header/>
            {children}
            </body>
        </html>
    )
}