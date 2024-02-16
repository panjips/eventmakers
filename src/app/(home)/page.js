import Image from 'next/image';
import { Carousel } from '@/components/landing/components/carousel';
import { Container } from '@/components/shared/container';
import { Events } from '@/components/landing/components/events';
import { Banner } from '@/components/landing/components/banner';
import { Footer } from '@/components/shared/footer';

export default function Home() {
    return (
        <>
            <Container>
                <Carousel />
                <Events />
                <Banner />
                <Footer />
            </Container>
        </>
    );
}
