import React , { useState } from 'react';
import { Input , Button , Label} from 'reactstrap';
import { authentificatePage } from '../../containers/Login/Login.hook'

export function Login(){
const authentificate={ username :"", password:""}
const [stateLogin,setLogin]=useState(authentificate)

    function show(){
        authentificatePage(stateLogin)
    }

    return(
        <form>
           <Label> Login :</Label>
           <Input type="text" name="username" onChange={event =>setLogin({...stateLogin,username:event.target.value})}></Input>

           <Label> Password :</Label>
           <Input type="password" name="password" onChange={event =>setLogin({...stateLogin,password:event.target.value})}></Input>

           <Button onClick={() => show()}>Submit</Button>
        </form>
    )
}