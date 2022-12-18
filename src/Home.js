import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {

    //let name = 'mario';

    const [name, setName] = useState('mario');
    const [age,setAge] = useState('25');
    const [blogs, setBlogs]=useState([
        {title: 'My new website', body: 'lorem lipsum...', author: 'mario', id : 1},
        {title: 'Welcome party', body: 'lorem lipsum...', author: 'yoshi', id : 2},
        {title: 'Web dev top tips', body: 'lorem lipsum...', author: 'mario', id : 3}

    ]);

    const [nume, setNume]=useState('mario');

    const handleClick = () =>{
        setName('luigi');
        setAge(30);
    }

    const handClickAgain = (name) =>{
        console.log("Hello" + " " + name);
    }

    const handleDelete = (id)=>{
        const newBlogs = blogs.filter( blog => blog.id !== id);
        setBlogs(newBlogs);
         
    }

    useEffect(()=>{
        console.log("useEffect ran");
        console.log(nume);
    }, [nume]);

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p> {name} is {age} old</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={()=>(handClickAgain('ab'))}>Click me again</button>
            
            <BlogList blogs ={blogs} title="All blogs!" handleDelete={handleDelete} />
            <BlogList blogs ={blogs.filter((blog)=> blog.author==='mario')} title="Mario's blogs"  />
            <button onClick={()=>{setNume('luigi')}}>Change name</button>
            <p>{nume}</p>
            
        </div>
     );
}
 
export default Home;