import 'bootstrap/dist/css/bootstrap.min.css';
import vintage from './image/vintage-logo.png';
import './navbar/nav.css';

const Navbar = () =>{
    return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="!#"></a>
        <img src={vintage} width="30" height="30" class="d-inline-block align-top" alt=""></img>
          Monment
    
        <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
            <a class="nav-link" href="!#">Home <span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="!#">Sign up</a>
            </li>
            
            <li class="nav-item">
            <a class="nav-link " href="!#">Log in</a>
            </li>
            <li class="nav-item-space">
            <a class="nav-link disabled" href="!#">   </a>
            </li>
            <li class="nav-item-space">
            <a class="nav-link disabled" href="!#">   </a>
            </li>
        </ul>
        
        </div>
    </nav>
    )
}

export default Navbar;