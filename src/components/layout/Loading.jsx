import Lottie from 'react-lottie-player'
import LoadingScreen from '../../assets/loading/LoadingScreen.json'
const Loading = () => {

    return (
        <Lottie
            loop
            animationData={LoadingScreen}
            play
            style={{ width: 350, height: 350 }}
        />
    );
};

export default Loading;