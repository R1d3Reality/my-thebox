import Header from '@/app/components /Header';
import Carousel from '@/app/components /SwiperComponent';
import Info from '@/app/components /Info';
import About from '@/app/components /About';
import Services from '@/app/components /Services';
import Experience from '@/app/components /Experience';
import Advertising from '@/app/components /Advertising';
import ContactForm from '@/app/components /ContactForm';


export default function Home() {
  return (
      <>
          <Header />
          <Carousel />
          <Info />
          <About />
          <Services />
          <Experience />
          <Advertising />
          <ContactForm />
      </>
  );
}
