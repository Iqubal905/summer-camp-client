
import Banner from '../Banner/Banner';
import InstructorPart from '../InstractorPart/InstructorPart';
import ClassPart from '../ClassPart/ClassPart';
import Gallery from '../Gallery/Gallery';
import './Home.css'
import { useState } from 'react';
const Home = () => {

const [theme, setTheme] = useState(false)

const handleMode = () =>{
    setTheme(!theme)
}



console.log(theme);


    return (
        <div  className={theme ? 'dark-mode' : 'light-mode'}>
          <div className='relative-my'>
       
            <Banner></Banner>
            <button className='absolute-my btn btn-sm btn-outline btn-info' onClick={handleMode}>Change Theme</button>
            <ClassPart></ClassPart>
            <InstructorPart></InstructorPart>
            <Gallery></Gallery>
          </div>
        </div>
    );
};

export default Home;