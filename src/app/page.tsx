import Hero from '@/components/Hero/Hero';
import History from '@/components/History/History';
import Roster from '@/components/Roster/Roster';
import Sponsors from '@/components/Sponsors/Sponsors';
import Guests from '@/components/Guests/Guests';
import Media from '@/components/Media/Media';
import Join from '@/components/Join/Join';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <History />
      <Roster />
        <Guests />
      <Sponsors />
      <Media />
      <Join />
      <Footer />
    </main>
  );
}