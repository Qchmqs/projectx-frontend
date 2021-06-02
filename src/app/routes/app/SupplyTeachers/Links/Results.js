import React from 'react';

import { 
    Container,
    Row,
    CardColumns,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText
} from './../../../../components';
import { HeaderMain } from "../../../components/HeaderMain";
import { SearchResultsLeftNav } from "./components/SearchResultsLeftNav"
import { SearchResultsHeader } from "./components/SearchResultsHeader";
import { UsersResultsCard } from "./components/SupplyTeacherResultsCard";
// import { Paginations } from "../../../components/Paginations";

const UsersResults = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Supply Teachers"
                className="mb-5 mt-4"
            />
            { /* START Content */}
            <Row>
            <Col lg={ 12 }>
                <Card type="border" color="dark" className="mb-3">
                  <CardBody>
                      <CardTitle tag="h6">
                          Touch base with one of your Teachers,
                      </CardTitle>
                      Find contact details for Teachers you've built a bond with,
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
                
                <Col lg={ 3 }>
                    <SearchResultsLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <SearchResultsHeader />
                    <CardColumns>
                        <UsersResultsCard />
                        <UsersResultsCard />
                        <UsersResultsCard />
                        <UsersResultsCard />
                        <UsersResultsCard />
                        <UsersResultsCard />
                        <UsersResultsCard />
                        <UsersResultsCard />
                        <UsersResultsCard />
                        <UsersResultsCard />
                        <UsersResultsCard />
                        <UsersResultsCard />
                        <UsersResultsCard />
                        <UsersResultsCard />
                        <UsersResultsCard />
                        <UsersResultsCard />
                        <UsersResultsCard />
                        <UsersResultsCard />
                        <UsersResultsCard />
                        <UsersResultsCard />
                        <UsersResultsCard />
                    </CardColumns>
                    
                </Col>
            </Row>
            { /* END Content */}
        </Container>
    </React.Fragment>
);

export default UsersResults;