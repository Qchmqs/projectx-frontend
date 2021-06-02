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

import { HeaderMain } from "../../../components/HeaderMain"
import { SearchResultsLeftNav } from "./components/SearchResultsLeftNav";
import { SearchResultsHeader } from "./components/SearchResultsHeader";
import { UsersResultsCard } from "./components/TeacherResultsCard";

const UsersResults = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Teachers"
                 className="mb-5 mt-4"
            />
            { /* START Content */}
            <Row>
            <Col lg={ 12 }>
                <Card type="border" color="dark" className="mb-3">
                  <CardBody>
                      <CardTitle tag="h6">
                          Let's find you a Supply Teacher,
                      </CardTitle>
                      Use this page to catch up who's available or will be available for a role you may have or use this to check in on people to make sure they're happy in their placement.
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
                <Col lg={ 12 }>
                    
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
                    <div className="d-flex justify-content-center">
                        
                    </div>
                </Col>
            </Row>
            { /* END Content */}
        </Container>
    </React.Fragment>
);

export default UsersResults;