import Header from './Components/Header';
import HeroSection from './Components/HeroSection';

export default function Page() {
    return (
    <div>
        <Header/>
        <div className='flex items-center justify-around'>
        <HeroSection/>
        </div>
    </div>
    );
}