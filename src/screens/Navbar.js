const Navbar = () => {
    return ( 
        <nav className='navbar'>
            <h1>Bismark <span>Amo</span></h1>
            <div className='links'>
                <a href ="/" >Services</a>
                <a href ="/">Work</a>
                <a href ="/">Note</a>
                <a href ="/">Contact</a>
            </div>
            <div className='socials'>
                <a href="/"><small>Twitter</small></a>
                <a href="/"><small>Github</small></a>
                <a href="/"><small>Email</small></a>
            </div>

        </nav>
     );
}
 
export default Navbar;