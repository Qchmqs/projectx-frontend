import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker/locale/en_US';
import _ from 'lodash';
import {
    Container,
    ButtonToolbar,
    ButtonGroup,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    FloatGrid as Grid,
    Card,
    Media,
    CardBody,
    CardDeck,
    CardTitle,
    ListGroup,
    ListGroupItem,
    Progress,
    Table,
    CardFooter,
    Button,
    CardHeader
} from './../../../../components';
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
            { /* START Card Widget */}
            { /* START Card Widget */}
            <Card className="mb-4">
                <CardBody>
                    <ProfileOverviewCard 
                        title="Total Teachers"
                        badgeTitle=""
                        badgeColor="info"
                        value="75"
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
            <Card className="mb-4">
                <CardBody>
                    <ProfileOverviewCard 
                        title="Total Profile Views"
                        badgeTitle=""
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
            <Card className="mb-4">
                <CardBody>
                    <ProfileOverviewCard 
                        title="Total Snippets"
                        badgeTitle=""
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
        </Container>
            </React.Fragment>
        );
    }
}
