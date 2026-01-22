import React from 'react'
import navbar from "../components/Navbar";
import "../global.css";
const laytout = (children) => {
    return (
        <div>
            <html>
                <body>
                    <navbar />
                    {children}
                </body>
            </html>
        </div>
    )
}

export default laytout