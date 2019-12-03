import React, { useState } from 'react';

function AddComputer() {



    return (
        <Form>

      <FormGroup>
        <Label for="exampleDatetime">Name</Label>
        <Input
          type="text"
          name="computerName"
          id="name"
          placeholder="computer Name"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleDate">Introduced Date</Label>
        <Input
          type="date"
          name="introduced"
          id="introduced"
          placeholder="Introduced date"
        />
      </FormGroup>
      <FormGroup>
      <Label for="exampleDate">Discontinued Date</Label>
      <Input
        type="date"
        name="discontinued"
        id="discontinued"
        placeholder="discontinued date"
      />
    </FormGroup>

      <FormGroup>
        <Label for="exampleSelect">Company</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
    </Form>
    )


}
export default AddComputer;