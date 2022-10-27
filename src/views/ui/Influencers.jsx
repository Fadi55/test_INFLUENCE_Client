import ProjectTables from "../../components/dashboard/ProjectTable";
 
import {  Row, Col ,Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import React, { useState ,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInfluencers } from "../../actions/influencer";
 
import Pagination from "react-js-pagination";


function Influencers() {
   // current page
   const [currentPage, setCurrentPage] = useState(1);

   // total records per page to display
   const recordPerPage = 10;
 
   // total number of the records
   const totalRecords = 850;
 
   // range of pages in paginator
   const pageRange = 10;
   const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
    // call API to get data based on pageNumber
  }
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.influencers?.loading);
  const influencers = useSelector((state) => state.influencers?.items);
  const [userId, setUserId] = useState("");
  const [open, setOpen] = useState(false);
 
  useEffect(() => {
    dispatch(getInfluencers());
  }, [dispatch]);

  useEffect(() => {
    console.log('loading', loading)
    if (!loading) {
      setOpen(loading);
    }
  }, [loading]);
 
  const openDialog = (_id) => {
    setOpen(true);
    setUserId(_id);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  // const confirmDelete = () => {
  //   dispatch(deleteUserById(userId));
  // };

  return (
    <Row>
    {/* --------------------------------------------------------------------------------*/}
    {/* table-1*/}
    {/* --------------------------------------------------------------------------------*/}
    <Col lg="12">
    <Card>
      <CardBody>
        <CardTitle tag="h5">Influencers</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          List of all Influencers
        </CardSubtitle>

        <Table className="no-wrap mt-3 align-middle" responsive borderless>
          <thead>
            <tr>
            <th>influencer ID</th>
            <th>Banner</th>
              <th>affiliate ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date Created</th>
         
           
            </tr>
          </thead>
          <tbody>
         
            {influencers.map((tdata, index) => (
              <tr key={index} className="border-top">
                         <td>{tdata.influencerId}</td>
                <td>
                  <div className="d-flex align-items-center p-2">
                    <img
                      src={tdata.banner}
                      className="rounded-circle"
                      alt="avatar"
                      width="45"
                      height="45"
                    />
                   
                  </div>
                </td>
                <td>
                  

                  {tdata.affiliate_id}
                                  </td>
                                  <td>
                  
                                  name
                  {tdata.name}
                                  </td>
                <td>
                  

{tdata.email}
                </td>
       
                <td>{tdata.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>      </Col>
  
    <div className="center">
        <b>Current Page:</b><span className="ml-2">{currentPage}</span>
      </div>

      <Pagination
        itemClass="page-item" // add it for bootstrap 4
        linkClass="page-link" // add it for bootstrap 4
        activePage={currentPage}
        itemsCountPerPage={recordPerPage}
        totalItemsCount={totalRecords}
        pageRangeDisplayed={pageRange}
        onChange={handlePageChange}
      />
  </Row>


  );
}

export default Influencers;
