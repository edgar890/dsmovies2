import {ReactComponent as Githubicon} from 'assets/img/Github.svg';
import './styles.css';

function Navbar () {


    return (
      <header>
        <nav className="container">
          <div className="dsmovie-nav-content">
            <h1>DS Movies Alpha</h1>
            <a href="https://github.com/edgar890">
               <div className="dsmovie-contact-container">
                  <Githubicon />
                  <p className="dsmovie-contact-link"> /edgar890</p>
               </div>
          
            </a> 
           
          </div>

        </nav>
      </header>
    );

}


export default Navbar;