import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Create = () => {
    const[title, setTitle]=useState('');
    const[body, setBody]=useState('');
    const[author, setAuthor]=useState('Milan');
    const[isPending, setIsPending]=useState(false)
    const history=useHistory();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog ={title,body,author};
        setIsPending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            header:{"Content.Type":"application.json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added')
            setIsPending(false);
            //history.go(-1);
            history.push('/');
        })
      
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}></input>

                <label>Blog body:</label>
                <textarea type="text" value={body} onChange={(e)=>setBody(e.target.value)} required></textarea>

                <label>Blog author:</label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="Milan">Milan</option>
                    <option value = "Shelby">Shelby</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Loading Adding....</button>}
            </form>
        </div>


     );
}
 
export default Create;