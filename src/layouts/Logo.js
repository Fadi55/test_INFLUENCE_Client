import { ReactComponent as LogoDark } from "../assets/images/logos/xtremelogo.svg";
import bg1 from "../assets/images/logos/shop.png"
import { Link } from "react-router-dom";
 
const Logo = () => {
  return (
    <Link to="/">
      <img style={{display:"block",marginLeft:"auto",marginRight:"auto"}}
                        src={bg1}
                   
                        width="60%"
                   
                      />
    </Link>
  );
};

export default Logo;
