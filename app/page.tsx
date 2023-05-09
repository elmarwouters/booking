"use client"

import Calendar from "@/components/Calendar";
import Profile from "@/components/Profile";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <Link href={'/api/auth/login'}>Login</Link>
                {/*<Calendar/>*/}
                <Profile />
            </div>
        </main>
    )
}
