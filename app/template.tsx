import React from "react";
import {UserProvider} from '@auth0/nextjs-auth0/client';

export default function Template({
                                     children,
                                 }: {
    children: React.ReactNode
}) {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}

// <UserProvider loginUrl="/api/auth/login">
//             {children}
//         </UserProvider>
