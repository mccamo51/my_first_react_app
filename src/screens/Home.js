const Home = () => {
    return ( 
        <div className='home'>
            <h1>Home</h1>
            <button onClick = {(e)=>{clickMe(e)}} >Click Me</button>
        </div>
     );
}
 
export default Home;

function clickMe(e){
    alert('Hello' + e.target);
}