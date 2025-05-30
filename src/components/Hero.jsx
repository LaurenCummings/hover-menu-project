import phoneImg from '../images/phone.svg';
import { useGlobalContext } from '../Context';

function Hero() {
    const data = useGlobalContext();
    console.log(data);

    return (
        <div>
            Hero
        </div>
    )
}

export default Hero;