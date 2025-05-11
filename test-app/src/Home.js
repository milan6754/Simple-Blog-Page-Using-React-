
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    const{data:blogs, isPending,error}=useFetch('http://localhost:8000/blogs');
    //const [name, setName]=useState('Milan')

    //let name = 'Milan'
    //const [name, setName] = useState('Milan');
    //const [age,setAge]= useState(25);
    //const [count, setCount]= useState(0)
    //const handleClick =() =>{
       // setName('Milan');
       // setAge(30)
       // setCount(count +1)
    return (
        <div className="Home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}


        {blogs && <BlogList blogs={blogs} title="All Blogs !" />}
            
            


            {/*
            
            
            <p>My name is {name} and my age is {age}</p>
            //<p>The number of Click {count}</p>
            <button onClick={()=>setName('Milan Thapa')}>Change name</button>
            <p>{name}</p>
            
            //<button onClick={handleClick}>click me </button>*/}
            </div>
    );
}
export default Home;