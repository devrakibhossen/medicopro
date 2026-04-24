import Hero from './../components/Hero';
import Features from './../components/Features';
import Stats from './../components/Stats';
import Testimonials from './../components/Testimonials';

export default function Home() {
  return (
   <div className="space-y-10">
      <Hero/>
      <Features/>
      <Stats/>
      <Testimonials/>
      </div>
  );
}
