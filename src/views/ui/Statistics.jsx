import { Container, Col, Row, Card, CardBody, CardTitle, Form,FormGroup,Label,Input } from "reactstrap";
import React, { useState ,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getbrands } from "../../actions/brand";
import { getDomainbrands } from "../../actions/domainBrand";
import { useParams, useHistory } from "react-router-dom";
import Chart from "react-apexcharts";
import Loader from "../../layouts/loader/Loader";
import TopCards from "../../components/dashboard/TopCards";
const Statistics = () => {

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.domainbrands?.loading);
  const brands = useSelector((state) => state.brands?.items);
  // const loading = useSelector((state) => state.brands?.loading);
 
  
  const [age, setAge] = useState(0);
  const [userId, setUserId] = useState("");
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const [value, setValue] = useState(0);
  const [amounts, setAmounts] = useState(0);

  const domainbrands = useSelector((state) => state.domainbrands.item);
  
   const  handleChange = (event) => {
    setValue(event.target.value);
    dispatch(getDomainbrands(event.target.value));
    setAmounts(domainbrands.Amounts)
    console.log(event.target.value)
  };
 

  useEffect(() => { 
   
  
  }, [dispatch, value]);

  useEffect(() => {
    dispatch(getbrands());
  }, [dispatch]);

  useEffect(() => {
    console.log('loading', loading)
    if (!loading) {
      setOpen(loading);
    }
  }, [loading]);

  console.log("Amounts",domainbrands.Amounts) 
  // useEffect(() => {
  //   dispatch(getDomainbrands(value));
 
  // }, [dispatch, value]);

  
  const [chartDate] = useState({
    options: {
      xaxis: {
        categories: [2022],
        axisBorder: { show: true },
        axisTicks: { show: false },
        labels: { show: true }
      },
      yaxis: { show: false },
      grid: { show: false },
      chart: {
        sparkline: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      }
    },
    series: [
    
      {
        name: "series-1",
        data: [435216.92]
      }
    ]
  });
  
  // console.log("ij",brands)
 
  // console.log("sssss",domainbrands)

  return (
    <div>
       
      {/* --------------------------------------------------------------------------------*/}
      {/* Start Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          Brand Statistic
        </CardTitle>
        <CardBody className="">
          <Container>
          <Row className="mt-3">
              <Col xs="6">
             <Form>
             <FormGroup>
                <Label for="exampleSelect">Choice a brand :</Label>
                <Input id="exampleSelect" name="select"  onChange={handleChange}    type="select">
            
        {brands.map(profile => <option   value={profile.offerId
}>{profile.name}</option>)}
                </Input>
              </FormGroup>
             </Form>
              </Col>
              <Col xs="3">
                From :
              <Input id="exampleSelect" name="select" type="date"></Input>
              </Col>
              <Col xs="3">
                To :
              <Input id="exampleSelect" name="select" type="date"></Input>
              </Col>
            </Row>
          </Container>
        </CardBody>
      </Card>

      <Row style={{ marginTop: "1%"}}>
        <Col sm="6" lg="6" xl="7" xxl="8"></Col>
      

      </Row>
     
      <Row  >
    
      <Col sm="6" lg="3">
          <TopCards 
            bg="bg-light-success text-success"
            title="Profit"
            subtitle="BrandName"
            earning= {domainbrands.brandName} 
            icon="bi bi-currency-euro"
            borderRadius="20px"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards 
            bg="bg-light-success text-success"
            title="Profit"
            subtitle="Amounts"
            earning= {domainbrands.Amounts} 
            icon="bi bi-bag"
            borderRadius="20px"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Commissions"
            subtitle="Commissions"
            earning={domainbrands.Commissions}
            icon="bi bi-coin"
          />
        </Col>
        <Col sm="7" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="New Project"
            subtitle="CommissionAffiliates"
            earning={domainbrands.CommissionAffiliates}
            icon="bi bi-basket3"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards 
            bg="bg-light-success text-success"
            title="Profit"
            subtitle="Size Sales"
            earning= {domainbrands.sizeSales} 
            icon="bi bi-basket3"
            borderRadius="20px"
          />
        </Col>
        {loading && (
          <Loader  />
        )}
         <Chart
        options={chartDate.options}
        series={chartDate.series}
        type="bar"
        width="500"
      />
        
      </Row>
     
             
    
      <div>
   
     
    </div>
    </div>
    
  );
  
};

export default Statistics;
