import React from 'react';

import { 
    Card,
    CardFooter,
    Table,
    
} from './../../../../components';

import { TrTableTasksList } from "./components/TrTableTasksList";

const TasksList = () => (
        
        <Card className="mb-3">
                        
            { /* START Table */}
            <div className="table-responsive-xl">
                <Table className="mb-0" hover>
                    <thead>
                        <tr>
                            <th className="align-middle bt-0">#</th>
                            <th className="align-middle bt-0">Snippet</th>
                            <th className="align-middle bt-0">Date</th> 
                            <th className="align-middle bt-0 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TrTableTasksList />
                        <TrTableTasksList 
                            id="2"
                        />
                        <TrTableTasksList 
                            id="3"
                        />
                        <TrTableTasksList 
                            id="4"
                        />
                        <TrTableTasksList 
                            id="5"
                        />
                        <TrTableTasksList 
                            id="6"
                        />
                        <TrTableTasksList 
                            id="7"
                        />
                        <TrTableTasksList 
                            id="8"
                        />
                        <TrTableTasksList 
                            id="9"
                        />
                        <TrTableTasksList 
                            id="10"
                        />
                    </tbody>
                </Table>
            </div>
            { /* END Table */}
            <CardFooter className="d-flex justify-content-center pb-0"></CardFooter>
        </Card>

);

export default TasksList;
