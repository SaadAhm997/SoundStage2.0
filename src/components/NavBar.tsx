import { Link } from "react-router-dom";


  const NavBar = () => {
    return (
      <div className="header">
        <style className="font">
          @import
          url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');
        </style>
          <Link to = '/'> 
        </Link>
        {/* <h2>SoundStage</h2> */}
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              {/* {" "} */}
              <Link to="/HowItWorks">HOW IT WORKS</Link>
            </li>
            <li>
              <Link to="/concerts">CONCERTS</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  };

export default NavBar;
