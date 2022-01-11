const BlogList = ({ blogs , title, onDelete }) => {
    // const blog = props.blogs;
    // { blog,title }

  
    
    return (
       <div className="blog_list">
           <h1>{ title }</h1>
           {
                blogs.map((data)=>(
                    <div className="blog_id" key={data.id}>
                        <h1>{ data.title }</h1>
                        <p>{ data.body }</p>
                        <button onClick={()=>{onDelete(data.id)}}>Delete Blog</button>
                    </div>
                ))
           }
       </div>
    );
}
export default BlogList