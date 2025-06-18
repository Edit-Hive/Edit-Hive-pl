import Head from "next/head"; // Add this importAdd commentMore actions
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import Canvas with ssr: false to disable SSR
const Canvas = dynamic(() => import('@react-three/fiber').then((mod) => mod.Canvas), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="RIpeAJrAyIDgpHXTWevo5AT45gMepH_n6p25fdvajXI"
        />
      </Head>

      <div className="relative min-h-screen bg-[#0d0d0d] text-white">
        {/* Fixed 3D Background */}
        <div className="fixed inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.9} />
              <directionalLight position={[10, 10, 5]} intensity={0.9} />
              <pointLight position={[-10, -10, -5]} intensity={0.3} />
              <Model3D />
            </Suspense>
          </Canvas>
        </div>

        {/* Content overlay */}
        <div className="relative z-10">
          <Header />
          <main>
            <HeroSection />
            <WorkSection />
            <ServicesSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
