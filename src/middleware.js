import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import * as jose from 'jose';

export async function middleware(request) {
    const token = cookies().get('token')?.value;
    const secretKey = new TextEncoder().encode(process.env.SECRET_KEY);

    try {
        await jose.jwtVerify(token, secretKey);
        return NextResponse.next();
    } catch (error) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
}

export const config = {
    matcher: '/dashboard/:path*'
};
