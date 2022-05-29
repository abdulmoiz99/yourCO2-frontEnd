import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { getStorage } from '../shared/LoacalStorage';



export class AddContacts extends Component {
    static displayName = this.name;
    constructor(props) {
        super(props);
        // form input
        this.state = { modal: false }
        this.state = { _Prefix: '', _FirstName: '', _MiddleName: '', _LastName: '', _Email: '', _ContactNumber: '' };
        this.state = { renderCurrentBank: false, renderNewBank: false }
        //_e == error
        this.state = { _ePrefix: false, _eFirstName: false, _eLastName: false, _eEmail: false, _eContactNumber: false }

        this.handleChange = this.handleChange.bind(this)
        this.createContact = this.createContact.bind(this);
        this.FetchRecord();

    }
    isEdit = () => {
        console.log("Prop value: " + this.props.id)
        if (this.props.id == '' || this.props.id == undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    componentDidMount() {
        this.setState({ editKey: this.props.id })
    }
    async handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    FetchRecord = async () => {
        if (this.isEdit()) {
            let token = getStorage('token')
            let url = `api/contacts/getContactById/?contactId=${this.props.id}`
            const response = await fetch(url, { headers: { "Authorization": `Bearer ${token}` } });
            const data = await response.json();
            this.setState({ _Prefix: data.Prefix, _FirstName: data.FirstName, _MiddleName: data.MiddleName, _LastName: data.LastName, _Email: data.Email, _ContactNumber: data.ContactNumber });
        }
    }
    render() {
        return (
            <div>
                <Modal size="lg" isOpen={this.props.modalState} className={this.props.className}>
                    <Form onSubmit={this.handleSubmission}>
                        <ModalHeader toggle={(e) => this.props.onSelect(e)} >{!this.isEdit() ? 'New Contact' : 'Edit Contact'}</ModalHeader>
                        <ModalBody>
                            <FormGroup>
                                <Label for="exampleEmail">Prefix</Label>
                                <Input invalid={this.state._ePrefix} name="_Prefix" value={this.state._Prefix} onChange={this.handleChange} />
                                <FormFeedback >Please enter Prefix</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">First Name</Label>
                                <Input invalid={this.state._eFirstName} name="_FirstName" value={this.state._FirstName} onChange={this.handleChange} />
                                <FormFeedback >Please enter first name</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Middle Name</Label>
                                <Input name="_MiddleName" value={this.state._MiddleName} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Last Name</Label>
                                <Input invalid={this.state._eLastName} name="_LastName" value={this.state._LastName} onChange={this.handleChange} />
                                <FormFeedback >Please enter last name</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input invalid={this.state._eEmail} name="_Email" value={this.state._Email} onChange={this.handleChange} />
                                <FormFeedback >Please enter email</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Contact Number</Label>
                                <Input invalid={this.state._eContactNumber} name="_ContactNumber" value={this.state._ContactNumber} onChange={this.handleChange} />
                                <FormFeedback >Please enter contact number</FormFeedback>
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" value="Submit" color="primary" >{!this.isEdit() ? 'Add' : 'Update'}</Button>{' '}
                            <Button color="secondary" onClick={(e) => this.props.onSelect(e)}>Cancel</Button>
                        </ModalFooter>
                    </Form>
                </Modal>
            </div>

        );
    }

    handleSubmission = (event) => {
        if (!this.validate()) {
            !this.isEdit() ? this.createContact(event) : this.updateContact(event)
        }
        event.preventDefault();
    }
    validate = () => {

        let isError = false;
        !this.state._Prefix ? this.setState({ _ePrefix: true }) : this.setState({ _ePrefix: false })
        !this.state._Prefix ? isError = false : isError = false

        !this.state._FirstName ? this.setState({ _eFirstName: true }) : this.setState({ _eFirstName: false })
        !this.state._FirstName ? isError = true : isError = false

        !this.state._LastName ? this.setState({ _eLastName: true }) : this.setState({ _eLastName: false })
        !this.state._LastName ? isError = true : isError = false

        !this.state._Email ? this.setState({ _eEmail: true }) : this.setState({ _eEmail: false })
        !this.state._Email ? isError = true : isError = false

        !this.state._ContactNumber ? this.setState({ _eContactNumber: true }) : this.setState({ _eContactNumber: false })
        !this.state._ContactNumber ? isError = true : isError = false

        return isError
    }
    createContact = async (e) => {
        let token = getStorage('token')
        const { _Prefix, _FirstName, _MiddleName, _LastName, _Email, _ContactNumber } = this.state
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
            body: JSON.stringify({
                Prefix: _Prefix,
                FirstName: _FirstName,
                MiddleName: _MiddleName,
                LastName: _LastName,
                Email: _Email,
                ContactNumber: _ContactNumber
            })
        };
        const response = await fetch('api/Contacts/Add', request);
        if (response.status === 200) {
            this.props.onSelect(e)
            this.props.updateContent(e)
        }
        else if (response.status === 401) {
        }
        else {
            this.props.onSelect(e)
        }
    }
    updateContact = async (e) => {
        let token = getStorage('token')
        const { _Prefix, _FirstName, _MiddleName, _LastName, _Email, _ContactNumber } = this.state
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
            body: JSON.stringify({
                Id: this.props.id,
                Prefix: _Prefix,
                FirstName: _FirstName,
                MiddleName: _MiddleName,
                LastName: _LastName,
                Email: _Email,
                ContactNumber: _ContactNumber
            })
        };
        const response = await fetch('api/Contacts/Update', request);
        if (response.status === 200) {
            this.props.onSelect(e)
            this.props.updateContent(e)

        }
        else if (response.status === 401) {
        }
        else {
            this.props.onSelect(e)
        }
    }
}
export default AddContacts;