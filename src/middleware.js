import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import * as jose from 'jose';

export async function middleware(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path.startsWith('/dashboard')) {
        try {
            const token = cookies().get('token')?.value;
            const secretKey = new TextEncoder().encode(process.env.SECRET_KEY);

            if (!token) {
                return NextResponse.redirect(new URL('/login', request.url));
                // TODO: Bug, log in & register page still can be access after log in
            } else if (
                token &&
                (path.startsWith('/login') || path.startsWith('/register'))
            ) {
                return NextResponse.redirect(
                    new URL('/dashboard', request.url)
                );
            }

            await jose.jwtVerify(token, secretKey);
            return NextResponse.next();
        } catch (error) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }
}

export const config = {
    matcher: '/dashboard/:path*'
};
