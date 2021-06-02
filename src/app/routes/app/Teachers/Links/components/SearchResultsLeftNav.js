import React from 'react';
import faker from 'faker/locale/en_US';
import { Link } from 'react-router-dom';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Typeahead } from 'react-bootstrap-typeahead';
import Toggle from 'react-toggle';
import { 
    Nav, 
    NavLink,
    UncontrolledButtonDropdown,
    NavItem,
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
    CustomInput,
    DropdownToggle,
  DropdownMenu,
  DropdownItem,
    Card,
    Badge
} from './../../../../components';


let s = [
  { name: 'Alabama', population: 4780127, capital: 'Montgomery', region: 'South' },
  { name: 'Alaska', population: 710249, capital: 'Juneau', region: 'West' },
  { name: 'Arizona', population: 6392307, capital: 'Phoenix', region: 'West' },
  { name: 'Arkansas', population: 2915958, capital: 'Little Rock', region: 'South' },
  { name: 'California', population: 37254503, capital: 'Sacramento', region: 'West' },
  { name: 'Colorado', population: 5029324, capital: 'Denver', region: 'West' },
  { name: 'Connecticut', population: 3574118, capital: 'Hartford', region: 'Northeast' },
  { name: 'Delaware', population: 897936, capital: 'Dover', region: 'South' },
  { name: 'Florida', population: 18804623, capital: 'Tallahassee', region: 'South' },
  { name: 'Georgia', population: 9688681, capital: 'Atlanta', region: 'South' },
  { name: 'Hawaii', population: 1360301, capital: 'Honolulu', region: 'West' },
  { name: 'Idaho', population: 1567652, capital: 'Boise', region: 'West' },
  { name: 'Illinois', population: 12831549, capital: 'Springfield', region: 'Midwest' },
  { name: 'Indiana', population: 6484229, capital: 'Indianapolis', region: 'Midwest' },
  { name: 'Iowa', population: 3046869, capital: 'Des Moines', region: 'Midwest' },
  { name: 'Kansas', population: 2853132, capital: 'Topeka', region: 'Midwest' },
  { name: 'Kentucky', population: 4339349, capital: 'Frankfort', region: 'South' },
  { name: 'Louisiana', population: 4533479, capital: 'Baton Rouge', region: 'South' },
  { name: 'Maine', population: 1328361, capital: 'Augusta', region: 'Northeast' },
  { name: 'Maryland', population: 5773785, capital: 'Annapolis', region: 'South' },
  { name: 'Massachusetts', population: 6547817, capital: 'Boston', region: 'Northeast' },
  { name: 'Michigan', population: 9884129, capital: 'Lansing', region: 'Midwest' },
  { name: 'Minnesota', population: 5303925, capital: 'Saint Paul', region: 'Midwest' },
  { name: 'Mississippi', population: 2968103, capital: 'Jackson', region: 'South' },
  { name: 'Missouri', population: 5988927, capital: 'Jefferson City', region: 'Midwest' },
  { name: 'Montana', population: 989417, capital: 'Alberta', region: 'West' },
  { name: 'Nebraska', population: 1826341, capital: 'Lincoln', region: 'Midwest' },
  { name: 'Nevada', population: 2700691, capital: 'Carson City', region: 'West' },
  { name: 'New Hampshire', population: 1316466, capital: 'Concord', region: 'Northeast' },
  { name: 'New Jersey', population: 8791936, capital: 'Trenton', region: 'Northeast' },
  { name: 'New Mexico', population: 2059192, capital: 'Santa Fe', region: 'West' },
  { name: 'New York', population: 19378087, capital: 'Albany', region: 'Northeast' },
  { name: 'North Carolina', population: 9535692, capital: 'Raleigh', region: 'South' },
  { name: 'North Dakota', population: 672591, capital: 'Bismarck', region: 'Midwest' },
  { name: 'Ohio', population: 11536725, capital: 'Columbus', region: 'Midwest' },
  { name: 'Oklahoma', population: 3751616, capital: 'Oklahoma City', region: 'South' },
  { name: 'Oregon', population: 3831073, capital: 'Salem', region: 'West' },
  { name: 'Pennsylvania', population: 12702887, capital: 'Harrisburg', region: 'Northeast' },
  { name: 'Rhode Island', population: 1052931, capital: 'Providence', region: 'Northeast' },
  { name: 'South Carolina', population: 4625401, capital: 'Columbia', region: 'South' },
  { name: 'South Dakota', population: 814191, capital: 'Pierre', region: 'Midwest' },
  { name: 'Tennessee', population: 6346275, capital: 'Nashville', region: 'South' },
  { name: 'Texas', population: 25146105, capital: 'Austin', region: 'South' },
  { name: 'Utah', population: 2763888, capital: 'Salt Lake City', region: 'West' },
  { name: 'Vermont', population: 625745, capital: 'Montpelier', region: 'Northeast' },
  { name: 'Virginia', population: 8001045, capital: 'Richmond', region: 'South' },
  { name: 'Washington', population: 6724543, capital: 'Olympia', region: 'West' },
  { name: 'West Virginia', population: 1853011, capital: 'Charleston', region: 'South' },
  { name: 'Wisconsin', population: 5687289, capital: 'Madison', region: 'West' },
  { name: 'Wyoming', population: 563767, capital: 'Cheyenne', region: 'West' },
];




const SearchResultsLeftNav = () => (
    <React.Fragment>
        { /* START Navigation */}
        <Nav vertical pills className="mb-3">
            <NavItem>
                <NavLink className="small d-flex px-1">
                    <span>
                        Tags
                    </span>
                </NavLink>
            </NavItem>
            <NavItem>
                <Typeahead
                      labelKey="name"
                      multiple
                      options={s}
                      placeholder="Choose tags..."
                  />
            </NavItem>
            <NavItem>
              <NavLink className="small d-flex px-1">
                    <span>
                        Tag Time Frame
                    </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <CustomInput type="select" id="tag_time_frame" name="tag_time_frame" bsSize="sm" className="ml-auto">
                  <option  value="0">All Experiences</option>
                  <option value="30">30 Days</option>
                  <option value="60"> 60 Days</option>
                  <option selected value="90">90 Days</option>
                  <option value="365">12 Months</option>
                  <option value="730"> 24 Months</option>
              </CustomInput>
            </NavItem>
            <NavItem>
              <NavLink className="small d-flex px-1">
                    <span>
                        Actively looking for work
                    </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <Toggle className="ml-auto align-self-center" defaultChecked={true} />
            </NavItem>
            <NavItem>
              <NavLink className="small d-flex px-1">
                    <span>
                        Will be looking for work in the next
                    </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <CustomInput type="select" id="future_time_frame" name="future_time_frame" bsSize="sm" className="ml-auto">
                  <option selected value="30">30 Days</option>
                  <option value="60"> 60 Days</option>
                  <option value="90">90 Days</option>
              </CustomInput>
                  
            </NavItem>
            <NavItem>
              <NavLink className="small d-flex px-1">
                    <span>
                        Favourites
                    </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <Toggle className="ml-auto align-self-center" defaultChecked={true} />
            </NavItem>
        </Nav>
        { /* END Navigation */}
        { /* START Category */}
        {/* <Nav vertical className="mb-3">
            <NavItem>
                <NavLink href="#" className="small d-flex px-1">
                    <span>
                        Category
                    </span>
                    <i className="fa fa-angle-down align-self-center ml-auto"></i>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" className="d-flex">
                    <span>
                        { faker.commerce.department() }
                    </span>
                    <span className="small ml-auto align-self-center text-body">
                        ({ faker.finance.mask() })
                    </span>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" className="d-flex">
                    <span>
                        { faker.commerce.department() }
                    </span>
                    <span className="small ml-auto align-self-center text-body">
                        ({ faker.finance.mask() })
                    </span>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" className="d-flex">
                    <span>
                        { faker.commerce.department() }
                    </span>
                    <span className="small ml-auto align-self-center text-body">
                        ({ faker.finance.mask() })
                    </span>
                </NavLink>
            </NavItem>
        </Nav> */}
        { /* END Category */}
        { /* START Rating */}
        {/* <Nav vertical className="mb-3">
            <NavItem className="mb-2">
                <NavLink href="#" className="small d-flex px-1">
                    <span>
                        Rating
                    </span>
                    <i className="fa fa-angle-down align-self-center ml-auto"></i>
                </NavLink>
            </NavItem>
            <NavItem className="d-flex px-2 mb-2">
                <CustomInput type="radio" id="radio1" name="rating" label="Clothing" inline defaultChecked />
                <span className="small ml-auto align-self-center">
                    ({ faker.finance.mask() })
                </span>
            </NavItem>
            <NavItem className="d-flex px-2 mb-2">
                <CustomInput type="radio" id="radio2" name="rating" label="Baby" inline />
                <span className="small ml-auto align-self-center">
                    ({ faker.finance.mask() })
                </span>
            </NavItem>
            <NavItem className="d-flex px-2 mb-2">
                <CustomInput type="radio" id="radio3" name="rating" label="Jewelery" inline />
                <span className="small ml-auto align-self-center">
                    ({ faker.finance.mask() })
                </span>
            </NavItem>
            <NavItem className="d-flex px-2 mb-2">
                <CustomInput type="radio" id="radio4" name="rating" label="Games" inline />
                <span className="small ml-auto align-self-center">
                    ({ faker.finance.mask() })
                </span>
            </NavItem>
        </Nav> */}
        { /* END Rating */}
        { /* START Tags */}
        {/* <Nav vertical className="mb-3">
            <NavItem className="mb-2">
                <NavLink href="#" className="small d-flex px-1">
                    <span>
                        Tags
                    </span>
                    <i className="fa fa-angle-down align-self-center ml-auto"></i>
                </NavLink>
            </NavItem>
            <NavItem className="d-flex px-2 mb-2">
                <CustomInput type="checkbox" id="checkbox1" label="Garden" inline defaultChecked />
                <span className="small ml-auto align-self-center">
                    ({ faker.finance.mask() })
                </span>
            </NavItem>
            <NavItem className="d-flex px-2 mb-2">
                <CustomInput type="checkbox" id="checkbox2" label="Beauty" inline />
                <span className="small ml-auto align-self-center">
                    ({ faker.finance.mask() })
                </span>
            </NavItem>
            <NavItem className="d-flex px-2 mb-2">
                <CustomInput type="checkbox" id="checkbox3" label="Clothing" inline />
                <span className="small ml-auto align-self-center">
                    ({ faker.finance.mask() })
                </span>
            </NavItem>
            <NavItem className="d-flex px-2 mb-2">
                <CustomInput type="checkbox" id="checkbox4" label="Games" inline />
                <span className="small ml-auto align-self-center">
                    ({ faker.finance.mask() })
                </span>
            </NavItem>
        </Nav> */}
        { /* END Tags */}
        { /* START Price */}
        {/* <Nav vertical className="mb-3">
            <NavItem className="mb-2">
                <NavLink href="#" className="small d-flex px-1">
                    <span>
                        Price
                    </span>
                    <i className="fa fa-angle-down align-self-center ml-auto"></i>
                </NavLink>
            </NavItem>
            <NavItem className="d-flex p-0">
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        $
                    </InputGroupAddon>
                    <Input placeholder="Min: 5" className="bg-white" />
                    <Input placeholder="Max: 87" className="bg-white" />
                    <InputGroupAddon addonType="append">
                        <Button color="secondary" outline>
                            <i className="fa fa-check"></i>
                        </Button>
                    </InputGroupAddon> 
                </InputGroup>
            </NavItem>
        </Nav> */}
        { /* END Price */}
        { /* START Shipping */}
        {/* <Nav vertical className="mb-3">
            <NavItem className="mb-2">
                <NavLink href="#" className="small d-flex px-1">
                    <span>
                        Shipping
                    </span>
                    <i className="fa fa-angle-down align-self-center ml-auto"></i>
                </NavLink>
            </NavItem>
            <NavItem className="d-flex p-0">
                <CustomInput type="select" name="select" id="shipping">
                    <option>England</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Other...</option>
                </CustomInput>
            </NavItem>
        </Nav> */}
        { /* END Shipping */}
        { /* START Sales */}
        {/* <Nav vertical className="mb-4">
            <NavItem className="mb-2">
                <NavLink href="#" className="small d-flex px-1">
                    <span>
                        Sales
                    </span>
                    <i className="fa fa-angle-down align-self-center ml-auto"></i>
                </NavLink>
            </NavItem>
            <NavItem className="d-flex p-0">
                <CustomInput type="select" name="select" id="sales">
                    <option>England</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Other...</option>
                </CustomInput>
            </NavItem>
        </Nav> */}
        { /* END Sales */}
        {/* <Button color="primary" block>
            
      </Button> */}
        <Button color="primary" block>
            Clear Filters
        </Button> 
    </React.Fragment>
)

export { SearchResultsLeftNav };
