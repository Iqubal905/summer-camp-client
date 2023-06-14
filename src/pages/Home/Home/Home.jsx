
import Banner from '../Banner/Banner';
import InstructorPart from '../InstractorPart/InstructorPart';
import ClassPart from '../ClassPart/ClassPart';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ClassPart></ClassPart>
            <InstructorPart></InstructorPart>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;