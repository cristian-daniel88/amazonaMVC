import React from 'react'
import {ButtonLogIn, ContainerForm, FormSignIn, H1Form, InputLogin, LabelLogIn, Structure} from './FormLoginStyles'
function FormLogin() {
    return (
        <ContainerForm>
            <Structure>
                <H1Form>
                    Sign In
                </H1Form>
                <br/>
                <FormSignIn action='submit'>
                    <LabelLogIn>
                     Email address
                    </LabelLogIn>
                    <InputLogin placeholder='Enter email' type='email' required/>

                    <LabelLogIn>
                     Password
                    </LabelLogIn>
                    <InputLogin placeholder='Enter password' type='password' required/>

                    <ButtonLogIn>Sign In</ButtonLogIn>
                </FormSignIn>
            </Structure>
        </ContainerForm>
    )
}

export default FormLogin
