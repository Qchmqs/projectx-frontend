import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker/locale/en_US';
import _ from 'lodash';
import {
    Container,
    ButtonToolbar,
    ButtonGroup,
    CardDeck,
    CardTitle,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    FloatGrid as Grid,
    Card,
    Media,
    CardBody,
    ListGroup,
    ListGroupItem,
    Progress,
    Table,
    CardFooter,
    Button,
    CardHeader
} from './../../../../components';
// import { SimpleAreaChart } from "..//components/SimpleAreaChart";
import {SimpleBarChart} from "../../../Graphs/ReCharts/components/SimpleBarChart"
// import {SimpleAreaChart} from "../../../../routes/Graphs/ReCharts/components"
import {
  ProfileOverviewCard
} from "../../../components/Profile/ProfileOverviewCard";
import { applyColumn } from './../../../../components/FloatGrid';

import { HeaderMain } from "../../../components/HeaderMain";

import {
    MetricVsTarget
} from "../../../components/Analytics/MetricVsTarget";

import {
    WebsitePerformance
} from "../../../components/Analytics/WebsitePerformance";
import {
    AudienceMetricsChart
} from "./components/AudienceMetricsChart";
import {
    TinyAreaChart
} from "../../../components/Analytics/TinyAreaChart";

import {
    SimpleLineChart
} from "./../../../Graphs/ReCharts/components/SimpleLineChart";

import classes from './Default.scss';

const LAYOUT = {
    'metric-v-target-users': { h: 6, md: 4 },
    'metric-v-target-sessions': { h: 6, md: 4 },
    'metric-v-target-pageviews': { h: 6, md: 4 },
    'analytics-audience-metrics': { h: 9, minH: 7 },
    'traffic-channels': { md: 6, h: 6 },
    'sessions': { md: 6, h: 6, maxH: 9, minW: 3 },
    'spend':  { h: 8, md: 0 },
    'website-performance': { md: 6, h: 11 },
    'organic-traffic': { md: 6, h: 10 }
}

const SessionByDevice = (props) => (
    <div className={classes['session']}>
        <div className={classes['session__title']}>
            { props.title }
        </div>
        <div className={classes['session__values']}>
            <div className={`${classes['session__percentage']} text-${props.color}`}>
                { props.valuePercent }%
            </div>
            <div className={`${classes['session__value']} text-${props.color}`}>
                { props.value }
            </div>
        </div>
    </div>
);
SessionByDevice.propTypes = {
    title: PropTypes.node,
    color: PropTypes.string,
    valuePercent: PropTypes.string,
    value: PropTypes.string
}

export class Default extends React.Component {
    state = {
        layouts: _.clone(LAYOUT)
    }

    _resetLayout = () => {
        this.setState({
            layouts: _.clone(LAYOUT)
        })
    }

    render() {
        const { layouts } = this.state;

        return (
            <React.Fragment>
                <Container fluid={ false }>
                    <div className="d-flex mt-3 mb-5">
                        <HeaderMain 
                            title="Dashboard"
                            className="mt-0"
                        />
                    </div>
                
                <CardDeck>
            { /* START Card Widget */}
            {/* <Card className="mb-3">
                <CardBody>
                    <ProfileOverviewCard 
                        title="Total Supply Teachers"
                        badgeTitle="Monthly"
                        badgeColor="primary"
                        value="312"
                        valueTitle=""
                        footerTitle=""
                        footerTitleClassName="text-success"
                        footerValue="23%"
                        footerIcon="caret-up"
                    />
                </CardBody>
            </Card> */}
            <Card className="mb-3">
                    <CardBody>
                        <div className="d-flex mb-4">
                            <CardTitle tag="h6">
                                Total Supply Teachers
                            </CardTitle>                            
                        </div>
                        <div className="text-center mb-4">
                            <h2>
                               $2,890.12
                            </h2>
                            <div className="mb-1 text-success">
                                <i className="fa mr-1 fa-caret-up"></i>
                                23.34%
                            </div>
                        </div>
                    </CardBody>
                    <CardBody className="p-0">
                        <TinyAreaChart />
                    </CardBody>
                </Card>
            { /* START Card Widget */}
            { /* START Card Widget */}
            <Card className="mb-3">
                <CardBody>
                    <ProfileOverviewCard 
                        title="Snippet Updates"
                        badgeTitle="Annual"
                        badgeColor="info"
                        value="75.938"
                        valueTitle="vs 55.002 prev."
                        footerTitle=""
                        footerTitleClassName="text-danger"
                        footerValue="12%"
                        footerIcon="caret-down"
                    />
                </CardBody>
                    <CardBody className="p-0">
                        <TinyAreaChart />
                    </CardBody>
            </Card>
            { /* START Card Widget */}
            { /* START Card Widget */}
            <Card className="mb-3">
                <CardBody>
                    <ProfileOverviewCard 
                        title="Availability Forecast"
                        badgeTitle="14 Days"
                        badgeColor="danger"
                        value={faker.random.number({ 'min': 10, 'max': 50 })}
                        valueTitle={`vs ${faker.random.number({ 'min': 10, 'max': 50 })} prev`}
                        footerTitle=""
                        footerTitleClassName="text-success"
                        footerValue=""
                        footerIcon=""
                    />
                </CardBody>
                    <CardBody className="p-0">
                        <TinyAreaChart />
                    </CardBody>
            </Card>
            { /* START Card Widget */}
            
            { /* START Card Widget */}
            <Card className="mb-3">
                <CardBody>
                    <ProfileOverviewCard 
                        title="Availability Forecast"
                        badgeTitle="60 Days"
                        badgeColor="info"
                        value={faker.random.number({ 'min': 90, 'max': 200 })}
                        valueTitle={`vs ${faker.random.number({ 'min': 10, 'max': 50 })} prev`}
                        footerTitle=""
                        footerTitleClassName="text-success"
                        footerValue=""
                        footerIcon=""
                    />
                </CardBody>
                    <CardBody className="p-0">
                        <TinyAreaChart />
                    </CardBody>
            </Card>
            { /* START Card Widget */}
            
        </CardDeck>
        {/* <Row>
            <Col lg={ 12 }>
                <HeaderDemo 
                    no={3} 
                    title="Area Charts" 
                    className="mt-5"
                    subTitle={(
                        <React.Fragment>
                            Quickly build your charts with decoupled, reusable React components.
                        </React.Fragment>
                    )}
                />
            </Col>
        </Row> */}
        { /* END Header 3 */}
        { /* START Section 3 */}
        <CardDeck>
            { /* START Card Graph */}
            <Card className="mb-3">
                <CardBody>
                    <div className="d-flex">
                        <div>
                            <h6 className="card-title mb-1">
                                Supply Teacher Tag Exposure
                            </h6>
                            <p>A bar chart illustrating how many supply teachers have experience</p>
                        </div>
                        <span className="ml-auto">
                            <Button color="link" href="https://jsfiddle.net/alidingling/Lrffmzfc/" target="_blank">
                                <i className="fa fa-external-link"></i>
                            </Button>
                        </span>
                    </div>
                    <SimpleBarChart />
                </CardBody>
            </Card>
          </CardDeck>
        </Container>
        { /* START Section 1 */}
                {/* <Grid>
                    <Grid.Row
                        onLayoutChange={ layouts => this.setState({ layouts }) }
                        columnSizes={ this.state.layouts }
                        rowHeight={ 55 }
                    >
                        <Grid.Col { ...(applyColumn('metric-v-target-users', layouts)) }>
                            <Card>
                                <CardHeader className="bb-0 pt-3 pb-0 bg-none" tag="h6">
                                    <i className="fa fa-ellipsis-v text-body mr-2"></i> Users
                                </CardHeader>
                                <CardBody className="pt-2">
                                    <MetricVsTarget 
                                        title="Supply Teachers"
                                        value="168"
                                        progressbarColor="danger"
                                        targetValue="169,001"
                                    />
                                </CardBody>
                                <CardFooter>
                                    <Media className="small">
                                        <Media left>
                                            <i className="fa fa-fw fa-info-circle mr-2"></i>
                                        </Media>
                                        <Media body>
                                            How do your users (visitors), sessions (visits) and pageviews 
                                            metrics for <abbr title="attribute" className="text-dark">www.webkom.com</abbr> compare to your targets over the last 30 days?
                                        </Media>
                                    </Media>
                                </CardFooter>
                            </Card>
                        </Grid.Col>
                        
                        
                        <Grid.Col { ...(applyColumn('spend', layouts)) }>
                            <Card>
                                <CardHeader className="bb-0 pt-3 pb-0 bg-none">
                                    <span className="h6">
                                        <i className="fa fa-ellipsis-v text-body mr-2"></i> Teachers
                                    </span>
                                    <span className="ml-auto text-right">
                                        (This Month)
                                    </span>
                                </CardHeader>
                                <CardBody>
                                    <div className="text-center mb-4">
                                        <h2>
                                          { faker.random.number(100) }
                                        </h2>
                                        <div className="mb-1 text-danger">
                                            <i className="fa mr-1 fa-caret-down"></i>
                                            { faker.random.number(10) }%
                                        </div>
                                        <div>
                                            vs { faker.random.number(100) } (last month.)
                                        </div>
                                    </div>
                                </CardBody>
                                <CardBody className="p-0">
                                    <TinyAreaChart height={ 70 } />
                                </CardBody>
                                <CardFooter>
                                    <Media className="small">
                                        <Media left>
                                            <i className="fa fa-fw fa-info-circle mr-2"></i>
                                        </Media>
                                        <Media body>
                                            How do your users (visitors), sessions (visits) and pageviews 
                                            metrics for <abbr title="attribute" className="text-dark">www.webkom.com</abbr> compare to your targets over the last 30 days?
                                        </Media>
                                    </Media>
                                </CardFooter>
                            </Card>
                        </Grid.Col>


                        <Grid.Col { ...(applyColumn('analytics-audience-metrics', layouts)) }>
                            <Card>
                                <CardHeader className="bb-0 pt-3 pb-4 bg-none" tag="h6">
                                    <i className="fa fa-ellipsis-v mr-2 text-body"></i> Analytics Audience Metrics
                                </CardHeader>
                                <CardBody className="d-flex flex-column">
                                    <Grid.Ready>
                                        <AudienceMetricsChart height="100%" className="flex-fill" />
                                    </Grid.Ready>
                                </CardBody>
                                <CardFooter>
                                    <Media className="small">
                                        <Media left>
                                            <i className="fa fa-fw fa-info-circle mr-2"></i>
                                        </Media>
                                        <Media body>
                                            How do your users (visitors), sessions (visits) and pageviews 
                                            metrics for <abbr title="attribute" className="text-dark">www.webkom.com</abbr> compare to your targets over the last 30 days?
                                        </Media>
                                    </Media>
                                </CardFooter>
                            </Card>
                        </Grid.Col>
                        
                        <Grid.Col { ...(applyColumn('website-performance', layouts)) }>
                            <Card>
                                <CardHeader className="bb-0 pt-3 bg-none" tag="h6">
                                    <i className="fa fa-ellipsis-v mr-2"></i> Website Performance
                                </CardHeader>
                                <ListGroup flush>
                                    <ListGroupItem className="bt-0">
                                        <WebsitePerformance 
                                            title="Bounce Rate (Avg)"
                                            value="46,893"
                                            valuePercentIcon="caret-up"
                                            valuePercentColor="text-success"
                                            valuePercent="23,91"
                                        />
                                    </ListGroupItem>
                                    <ListGroupItem className="bt-0">
                                        <WebsitePerformance 
                                            title="Pageviews (Avg)"
                                            value="2.15"
                                            valuePercentColor="text-danger"
                                            valuePercent="42,82"
                                        />
                                    </ListGroupItem>
                                    <ListGroupItem className="bt-0">
                                        <WebsitePerformance 
                                            title="New Sessions"
                                            value="76,40"
                                            valuePercentIcon="caret-up"
                                            valuePercentColor="text-success"
                                            valuePercent="23,91"
                                        />
                                    </ListGroupItem>
                                    <ListGroupItem className="bt-0 bb-0">
                                        <WebsitePerformance 
                                            title="Time on Site (Avg)"
                                            value="2m:16s"
                                            valuePercentColor="text-danger"
                                            valuePercent="65,28"
                                        />
                                    </ListGroupItem>
                                </ListGroup>
                                <CardFooter className="flex-grow-0 mt-auto">
                                    <Media className="small">
                                        <Media left>
                                            <i className="fa fa-fw fa-info-circle mr-2"></i>
                                        </Media>
                                        <Media body>
                                            How do your users (visitors), sessions (visits) and pageviews 
                                            metrics for <abbr title="attribute" className="text-dark">www.webkom.com</abbr> compare to your targets over the last 30 days?
                                        </Media>
                                    </Media>
                                </CardFooter>
                            </Card>
                        </Grid.Col>
                        <Grid.Col { ...(applyColumn('organic-traffic', layouts)) }>
                            <Card>
                                <CardHeader className="d-flex bb-0 pt-3 bg-none">
                                    <Media>
                                        <Media left className="mr-3">
                                            <i className="fa fa-ellipsis-v"></i> 
                                        </Media>
                                        <Media body>
                                            <span className="h6">
                                                How did my organic traffic perform?
                                            </span>
                                            <br />
                                            <span>
                                                Dec 22, 2016 to Dec 31, 2016 <i>(prev.)</i>
                                            </span>
                                        </Media>
                                    </Media>
                                </CardHeader>
                                <CardBody className="d-flex flex-column">
                                    <div className="text-center mb-4">
                                        <h6>Organics Sessons</h6>
                                        <h2>
                                        46,982
                                        </h2>
                                        <div className="mb-1 text-success">
                                            <i className="fa mr-1 fa-caret-up"></i>
                                            23.34% <span> vs { faker.finance .amount() } <i>(prev.)</i>
                                            </span>
                                        </div>
                                    </div>
                                    <Grid.Ready>
                                        <SimpleLineChart height="100%" className="flex-fill"/>
                                    </Grid.Ready>
                                </CardBody>
                                <CardFooter>
                                    <Media className="small">
                                        <Media left>
                                            <i className="fa fa-fw fa-info-circle mr-2"></i>
                                        </Media>
                                        <Media body>
                                            How do your users (visitors), sessions (visits) and pageviews 
                                            metrics for <abbr title="attribute" className="text-dark">www.webkom.com</abbr> compare to your targets over the last 30 days?
                                        </Media>
                                    </Media>
                                </CardFooter>
                            </Card>
                        </Grid.Col>
                    </Grid.Row>
                </Grid> */}
            </React.Fragment>
        );
    }
}
