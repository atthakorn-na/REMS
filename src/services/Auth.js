import React, { useState } from 'react';
import { HTTP } from './axios'
import { useNavigate } from "react-router-dom";
import { ServiceEndpoint } from '../types/Services'

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [rooms, setRooms] = useState();
    const [wrongPassword, setWrongPassword] = useState(false);
    let navigate = useNavigate();
    
    if(!AuthContext){
      throw new Error('useAuth must be used inside children of AuthProvider only')
    }

    async function loginAuth(loginUser) {
      try {
        const requestOptions = {
          method: 'POST',
          url: ServiceEndpoint.login,
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify(loginUser)
        };
        await HTTP(requestOptions)
          .then(response => {
            if (response.data) {
              setCurrentUser(response.data);
              getAllRoom(loginUser);
              setWrongPassword(false);
            } else {
              setWrongPassword(true);
            }
          })
      } catch(error) {
        alert(error);
        }
    }  
    
    async function logoutAuth(loginUser) {
      try {
        const requestOptions = {
          method: 'POST',
          url: ServiceEndpoint.logout,
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify(loginUser)
        };
        await HTTP(requestOptions)
          .then(() => {
            navigate("../", { replace: true });
            setCurrentUser(null);
            setRooms(null);
          })
      } catch(error) {
        alert(error)
      }
    }

    async function registration(regisUser) {
      try {
        const requestOptions = {
          method: 'POST',
          url: ServiceEndpoint.registration,
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify(regisUser)
        };
        await HTTP(requestOptions)
          .then((response) => {
            setCurrentUser(response.data);
            getAllRoom(regisUser);
          })
          .finally(() => alert("สมัครสมาชิกเรียบร้อย"))
      } catch(error) {
        alert(error);
      }
    }

    async function getAllRoom(loginUser) {
      try {
        const requestOptions = {
          method: 'GET',
          url: ServiceEndpoint.getAllRoom,
          headers: { 'Content-Type': 'application/json' },
          params: {email: loginUser.email}
        };
        await HTTP(requestOptions)
          .then(response => {
            if (response.data) {
              setRooms(response.data);
              navigate("../home", { replace: true })
            }
          })
      } catch(error) {
        alert(error);
        }
    }

    async function addNewRoom(room) {
      try {
        const requestOptions = {
          method: 'POST',
          url: ServiceEndpoint.addRoom,
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify(room)
        };
        await HTTP(requestOptions)
          .then(response => {
            if (response.data) {
              setRooms((prev) => [...prev, response.data]);
            }
          })
      } catch(error) {
        alert(error);
      }
    }

    async function deleteRoom(room) {
      try {
        const requestOptions = {
          method: 'DELETE',
          url: ServiceEndpoint.addRoom,
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify(room)
        };
        await HTTP(requestOptions)
          .then(response => {
            if (response.data) {
              setRooms((prev) => [...prev, response.data]);
            }
          })
      } catch(error) {
        alert(error);
      }
    }

    return (
        <AuthContext.Provider value={{currentUser, loginAuth, logoutAuth, getAllRoom, rooms, registration, wrongPassword, addNewRoom}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;