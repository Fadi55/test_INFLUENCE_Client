import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Influencers",
    href: "/Influencers",
    icon: "bi bi-people-fill",
  },
  {
    title: "Statiscs",
    href: "/Statistics",
    icon: "bi bi-activity",
  },
  {
    title: "Log out",
    href: "/login",
    icon: "bi bi-power",
 
  },

];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical  className="sidebarNav">
          {navigation.map((navi, index,row) => (
            <NavItem style={{marginBottom:"15px"  }} key={index} className="sidenav-bg">
   
              
              <Link 
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-side  sidenav-a nav-link py-3" 
                    : "nav-link text-secondary py-3"
                }
              > 
                <i className={navi.icon}></i>
                <span  className={
              index+ 1 === row.length
                    ?"text-danger   ms-3 d-inline-block" 
                    :"  ms-3 d-inline-block" 
                }>{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          {/* <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://www.wrappixel.com/templates/xtreme-react-redux-admin/?ref=33"
          >
            Upgrade To Pro
          </Button> */}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
