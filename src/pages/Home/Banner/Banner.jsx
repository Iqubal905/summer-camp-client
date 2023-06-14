
import slider1 from '../../../assets/slider/s-1.jpg'
import slider2 from '../../../assets/slider/ba-1.jpg'
import slider3 from '../../../assets/slider/ba-4.jpg'
import slider4 from '../../../assets/slider/b-5.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div>
         
            <div className="carousel   max-h-screen ">
  <div id="slide1" className="carousel-item relative w-full slider-container ">
    <img src={slider1} className="w-full pt-24 md:pt-0" />
    <h2></h2>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className=' banner-text w-full h-screen  '>
 <div className=' md:p-48 sm:p-24'>
 <h2 className='text-2xl font-bold pb-10 '><span className='text-3xl text-orange-400'>Unleash Your </span><br /> Creativityat Our Art and Craft Camp</h2>
<p>Join us for an exciting summer camp filled with artistic adventures and crafty creations.
   Unleash your creativity and explore various art forms in a fun and supportive environment.</p>
 </div>
 </div>
  <img src={slider2} className="w-full" />
 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className=' banner-text w-full h-screen  '>
 <div className=' md:p-48 sm:p-24'>
 <h2 className='text-2xl font-bold pb-10 '><span className='text-3xl text-orange-400'>Discover </span><br />  the Joy of Art and Craft at Our Camp School</h2>
<p>Experience the magic of art and craft at our camp school! From painting and sculpture to jewelry-making and paper crafts,
   embark on a creative journey where you can learn new skills, make friends, and let your imagination soar.</p>
 </div>
 </div>
  <img src={slider3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <div className=' banner-text w-full h-screen  '>
 <div className=' md:p-48 sm:p-24'>
 <h2 className='text-2xl font-bold pb-10 '><span className='text-3xl text-orange-400'>Immerse Yourself </span><br />  in the World of Art and Craft at Our Camp</h2>
<p>Immerse yourself in the world of art and craft at our camp! Dive into a colorful and enriching experience where you'll learn various techniques, experiment with different materials,
   and create unique works of art. Join us for an unforgettable summer of creativity and inspiration.</p>
 </div>
 </div>
  <img src={slider4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;