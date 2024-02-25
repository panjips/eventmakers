import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import * as jose from 'jose';

export async function middleware(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    try {
        const token = cookies().get('token')?.value;
        const secretKey = new TextEncoder().encode(process.env.SECRET_KEY);

        if (!token && path.startsWith('/dashboard')) {
            return NextResponse.redirect(new URL('/login', request.url));
        } else if (
            token &&
            (path.startsWith('/login') || path.startsWith('/register'))
        ) {
            await jose.jwtVerify(token, secretKey);
            return NextResponse.redirect(new URL('/dashboard', request.url));
        } else if (token && path.startsWith('/dashboard')) {
            await jose.jwtVerify(token, secretKey);
            return NextResponse.next();
        }

    } catch (error) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
}

export const config = {
    matcher: ['/dashboard/:path*', '/login', '/register']
};
