import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import faker from 'faker/locale/en_US';
import { Typeahead } from 'react-bootstrap-typeahead';
import ReactQuill from 'react-quill';
import Toggle from 'react-toggle';
import { 
    Button,
    Breadcrumb,
    ButtonToolbar,
    UncontrolledTooltip,
    BreadcrumbItem,
    ButtonGroup,
    UncontrolledModal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    
    InputGroup,
    InputGroupAddon,
    CustomInput,
    Col,
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText
} from './../../../../../components';

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

let modules = {
  toolbar: [
    ['bold', 'italic', 'underline','strike'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['clean']
  ]
};


const ProjectsSmHeader = (props ) => (
    <React.Fragment>
        { /* START Header Nav */}
        <div className="d-flex flex-column flex-md-row mb-3 mb-md-0">
            <Breadcrumb className="mr-auto d-flex align-items-center">
                { /* START 1st */}
                <BreadcrumbItem active>
                    <Link to="/">
                        <i className="fa fa-home"></i>
                    </Link>
                </BreadcrumbItem>
                { /* END 1st */}

                { /* START 2nd */}
                { 
                    props.title ? (
                        <BreadcrumbItem>
                            <Link to="#Google">
                                {props.subTitle}
                            </Link>
                        </BreadcrumbItem>
                    ): (
                        <BreadcrumbItem active>
                            {props.subTitle}
                        </BreadcrumbItem>
                    )
                }
                { /* END 2nd */}  

                { /* START 3rd */}
                {
                    props.title && (
                        <BreadcrumbItem active>
                            {props.title}
                        </BreadcrumbItem>  
                    )
                }
                { /* END 3rd */}
            </Breadcrumb>
        <UncontrolledModal target="tooltipAddNew" className="modal-outline-primary">
          <ModalHeader tag="h6">
              Snippet Editor
          </ModalHeader>
          <ModalBody>
          <Form>
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="input-1" sm={4}>
                                        Tags
                                    </Label>
                                    <Col sm={8}>
                                      <Typeahead
                                            labelKey="name"
                                            id="input-1"
                                            multiple
                                            options={s}
                                            placeholder="Choose tags..."
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Select */}
                                <FormGroup row>
                                    <Label for="country-selector-1" sm={4}>
                                        Category
                                    </Label>
                                    <Col sm={8}>
                                        <CustomInput 
                                            type="select" 
                                            name="customSelect" 
                                            id="country-selector-1"  
                                        >
                                            <option value="">Select Category...</option>
                                            <option>Category #1</option>
                                            <option>Category #2</option>
                                            <option>Category #3</option>
                                            <option>Category #4</option>
                                            <option>Category #5</option>
                                            
                                        </CustomInput>
                                    </Col>
                                </FormGroup>
                                { /* END Select */}
                                
                                <FormGroup row>
                                    <Label for="input-published" sm={6}>
                                        Published
                                    </Label>
                                    <Col sm={6}>
                                         <Toggle
                                            name='publish'
                                            value='true' 
                                            defaultChecked={true}/>
                                    </Col>
                                </FormGroup>
                                { /* START Textarea */}
                                <FormGroup row>
                                    <Label for="message-1" sm={4}>
                                        Snippet
                                    </Label>
                                </FormGroup>
                                <FormGroup row>
                                    <Col sm={12}>
                                        {/* <Input 
                                            type="textarea" 
                                            name="text" 
                                            id="message-1" 
                                            placeholder="Enter Your Message..." 
                                            className="mb-6"
                                        /> */}
                                        <ReactQuill
                                            value="Some value..."
                                            // onChange={ this._handleChange }
                                            // modules={ this.modules }
                                            modules = {modules}
                                          
                                            // formats={ this.formats }
                                            // style={{
                                            //     minHeight: '880px'
                                            // }}
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Textarea */}
                            </Form>
          </ModalBody>
          <ModalFooter>
              <UncontrolledModal.Close color="link">
                  Cancel
              </UncontrolledModal.Close>
              <UncontrolledModal.Close color="primary">
                  Save
              </UncontrolledModal.Close>
          </ModalFooter>
      </UncontrolledModal>
            <ButtonToolbar>
                <ButtonGroup>
                    <Button color="primary" className="align-self-center" id="tooltipAddNew">
                        <i className="fa-fw fa fa-plus"></i>
                    </Button>
                    <UncontrolledTooltip placement="bottom" target="tooltipAddNew">
                        Add New
                    </UncontrolledTooltip>
                </ButtonGroup>
            </ButtonToolbar>
            
      
      
        </div>
        { /* END Header Nav */}
    </React.Fragment>
)
ProjectsSmHeader.propTypes = {
    subTitle: PropTypes.node,
    title: PropTypes.node,
    subTitleLink: PropTypes.string,
    linkList: PropTypes.node,
    linkGrid: PropTypes.node,
    btnShowKanban: PropTypes.bool,
        linkKanban: PropTypes.node
};
ProjectsSmHeader.defaultProps = {
    subTitle: "Folder",
    linkList: "#",
    linkGrid: "#",
    btnShowKanban: false,
        linkKanban: "/apps/tasks-kanban"
};

export { ProjectsSmHeader };
