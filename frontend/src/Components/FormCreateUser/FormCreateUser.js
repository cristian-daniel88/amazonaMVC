import React from "react";
import {
  ContainerFormUser,
  StructureUser,
  H1FormUser,
  FormUser,
  LabelUser,
  InputUser,
  ButtonUser,
  Span,
  A,
} from "./FormCreateUserStyles";

function FormCreateUser() {
  return (
    <ContainerFormUser>
      <StructureUser>
        <H1FormUser>Create Account</H1FormUser>
        <br />
        <FormUser action="submit">
          <LabelUser>Name</LabelUser>
          <InputUser placeholder="Enter name" type="name" required />

          <LabelUser>Email address</LabelUser>
          <InputUser placeholder="Enter email" type="email" required />

          <LabelUser>Password</LabelUser>
          <InputUser placeholder="Enter password" type="password" required />

          <LabelUser>Confirm Password</LabelUser>
          <InputUser placeholder="Enter confirm password" type="password" required/>

          <ButtonUser>Sign In</ButtonUser>
        </FormUser>
        <Span>Already have an account? <A href='www.google.com'>Sign-In</A></Span>
      </StructureUser>
    </ContainerFormUser>
  );
}

export default FormCreateUser;
