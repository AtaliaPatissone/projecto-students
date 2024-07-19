import student from '../assets/student.png'
import { Footer } from '../components/foter';
import Header from '../components/header/Header';


 export const Home = () => {
    return ( 
        <>
        
        <Header/>

    <div className="flex">
        <div className='mt-32 w-1/2 ml-24 flex justify-end'>
            <div className='w-64'>
            <h2 className='text-4xl font-bold'> Best Project</h2>
            <p> The present student is a good one stood out for the production of organic biofertilizer from FAMCEM </p>
            </div>
        </div>
        <div className=' w-1/2'>
            <img src={student} alt="" />
        </div>
    </div>
    <Footer/>
     </>);
}
 
export default Home;