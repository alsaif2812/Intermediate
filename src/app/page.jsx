import MainContent from "@/components/MainContent";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

library.add(faLinkedin, faInstagram, faFacebook);

export default function Home() {
  return (
    <>
      <MainContent />

    </>
  );
}