import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Search extends Component {
    render() {
        return (
            <div>
                 <Form>
      <Form.Control type="text" placeholder="Search"/>
      <Button variant="outline-danger">Search</Button>
    </Form>
            </div>
        );
    }
}

export default Search;