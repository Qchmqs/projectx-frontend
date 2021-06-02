import React from 'react';
import faker from 'faker/locale/en_US';

import { 
    Card,
    UncontrolledTooltip,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
    Badge,
    CardBody
} from './../../../../../components';

import {
    Profile
} from "../../../../components/Profile";

import { randomArray } from './../../../../../utilities';
import { fake } from 'faker/locale/en_US';
const badgesColors = [
    "info",
    "primary",
    "secondary"
];


const UsersResultsCard = () => (
   
    <React.Fragment>
        { /* START Card */}
        <Card className="mb-3">
            <CardBody>
                <div className="d-flex">
                    <UncontrolledTooltip placement="top" target="tooltipGridAddToFavorites">
                      Add to Favorites
                    </UncontrolledTooltip>  
                    <Button color="link" size="sm" id="tooltipGridAddToFavorites">
                      <i className="fa fa-star-o"></i>
                    </Button> 
                    
                    <UncontrolledButtonDropdown className="ml-auto">
                        <DropdownToggle color="link" size="sm">
                            <i className="fa fa-bars"></i>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem target="_blank" href="https://profile.rhysevans.co.uk/">
                                <i className="fa fa-fw fa-external-link mr-2"></i>
                                Public Profile
                            </DropdownItem>
                            <DropdownItem target="_blank" href={`tel:+44` + faker.phone.phoneNumber('78########')}>
                                <i className="fa fa-fw fa-phone mr-2"></i>
                                Call
                            </DropdownItem>
                            <DropdownItem target="_blank" href={`mailto:` + faker.internet.email()}>
                                <i className="fa fa-fw fa-envelope-o mr-2"></i>
                                Email
                            </DropdownItem>
                            <DropdownItem target="_blank" href="https://www.linkedin.com/messaging/?searchTerm=jo%20dacombe">
                                <i className="fa fa-fw fa-linkedin-square mr-2"></i>
                                Chat
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                <i className="fa fa-fw fa-trash mr-2"></i>
                                Unlink
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>
                </div>
                
                <Profile />

                <div className="text-center mb-4">
                    <div className="mb-2">
                        <span className="small">
                            Available From: 
                        </span>
                    </div>
                    <p className="mb-0">
                      { 
                        faker.date.weekday() // should be a date }
                      }
                    </p>
                </div>  
                <div className="text-center mb-4">
                    <div className="mb-2">
                        <span className="small">
                            Top Tags
                        </span>
                    </div>
                    <Badge pill color={ randomArray(badgesColors) } className="mr-1">
                        { faker.commerce.department() }
                    </Badge>
                    <Badge pill color={ randomArray(badgesColors) } className="mr-1">
                        { faker.commerce.department() }
                    </Badge>
                    <Badge pill color={ randomArray(badgesColors) }>
                        { faker.commerce.department() }
                    </Badge>
                </div>
                <div className="text-center mb-4">
                    <div className="mb-2">
                        <span className="small">
                            Profile
                        </span>
                    </div>
                    <p className="mb-0">
                        { faker.lorem.paragraph() }
                    </p>
                </div>                
            </CardBody>
        </Card>
        { /* END Card */}
    </React.Fragment>
)

export { UsersResultsCard };
