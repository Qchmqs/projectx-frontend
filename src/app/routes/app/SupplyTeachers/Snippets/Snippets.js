import React from 'react';
import PropTypes from 'prop-types';

import { 
    Container,
    Row,
    Col
} from './../../../../components';

import { HeaderMain } from "../../../components/HeaderMain";

import TasksList from './TasksList';
import { ProjectsLeftNav } from "../../../components/Projects/ProjectsLeftNav";
import { ProjectsSmHeader } from "./components/ProjectsSmHeader";

const Tasks = (props) => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Snippets"
                className="mb-5 mt-4"
            />
            <Row>
                <Col lg={ 12 }>
                    <ProjectsSmHeader
                        subTitle="Snippet"
                        title={props.match.params.type === "list"?"Tasks List":"Tasks Grid"} 
                        linkList="/apps/tasks/list"
                    />

                    <TasksList />
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);
Tasks.propTypes = {
    match: PropTypes.object.isRequired
};

export default Tasks;