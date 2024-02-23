import { Events } from '@/components/landing/components/events';
import { Footer } from '@/components/shared/footer';
import { Hero } from '@/components/landing/components/hero';

export default function Home() {
    return (
        <>
            <Hero />
            <Events />
            <Footer />
        </>
    );
}
