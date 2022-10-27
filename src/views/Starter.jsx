import { Col, Row, Form, FormGroup, Label, Input } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";
import TopCards from "../components/dashboard/TopCards";
import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";

const BlogData = [
  {
    image: bg1,
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Lets be simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Don't Lamp blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Simple is beautiful",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
];

const Starter = () => {
  return (
    <div>
         <Form style={{ marginTop: "-7%"}}>
      <Row className="mt-3"  > 
   
        <Col  xs="7" style={{ marginBottom: "10%"}}>
       
            <FormGroup>
              <Input  style={{ width: "125%" ,borderRadius :"10px"}} id="seachid" placeholder="Search" type="text" />
            </FormGroup>
        

        
        </Col>
        <Col  xs="2"  >
          </Col>
        <Col  xs="1"  >
     
            
                <Input  style={{backgroundColor:"transparent",borderColor:"transparent"}} id="exampleSelect" name="select" type="select">
                  <option>EN</option>
                  <option>FR</option>
                </Input>
         
        </Col>

      </Row>

      </Form>

      
      {/***Top Cards***/}
      <Row style={{ marginTop: "1%"}}>
        <Col sm="6" lg="6" xl="7" xxl="8"></Col>
      </Row>
      <Row  >
        <Col sm="6" lg="2">
          <TopCards 
            bg="bg-light-success text-success"
            title="Profit"
            subtitle="Sales"
            earning="$21k"
            icon="bi bi-currency-euro"
            borderRadius="20px"
          />
        </Col>
        <Col sm="6" lg="2">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Refunds"
            subtitle="Sales number"
            earning="$1k"
            icon="bi bi-coin"
          />
        </Col>
        <Col sm="7" lg="2">
          <TopCards
            bg="bg-light-warning text-warning"
            title="New Project"
            subtitle="Influencer"
            earning="456"
            icon="bi bi-basket3"
          />
        </Col>
        <Col sm="6" lg="2">
          <TopCards
            bg="bg-light-info text-into"
            title="Sales"
            subtitle="Commision"
            earning="210"
            icon="bi bi-bag"
          />
        </Col>
        <Col sm="6" lg="2">
          <TopCards
            bg="bg-light-info text-into"
            title="Sales"
            subtitle="Influencer Commision"
            earning="210"
            icon="bi bi-bag"
          />
        </Col>
        <Col sm="6" lg="2">
          <TopCards
            bg="bg-light-info text-into"
            title="Sales"
            subtitle="Sold products number"
            earning="210"
            icon="bi bi-bag"
          />
        </Col>
      </Row>
      {/***Sales & Feed***/}
      <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          <SalesChart />
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds />
        </Col>
      </Row>
      {/***Table ***/}
      <Row>
        <Col lg="12">
          <ProjectTables />
        </Col>
      </Row>
      {/***Blog Cards***/}
      <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Starter;
