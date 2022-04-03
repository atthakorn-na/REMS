import React, { useState, useEffect } from 'react';
import { HTTP } from './axios'
import { useNavigate } from "react-router-dom";
import { ServiceEndpoint } from '../types/Services'

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [rooms, setRooms] = useState();
    const [wrongPassword, setWrongPassword] = useState(false);
    const [allLog, setAllLog] = useState(null);
    const [role, setRole] = useState();
    let navigate = useNavigate();

    useEffect(() => {
      if(localStorage.getItem("user") != null) {
        setCurrentUser(JSON.parse(localStorage.getItem("user")));
        setRooms(JSON.parse(localStorage.getItem("rooms")));
        console.log(JSON.parse(localStorage.getItem("user")))
      } else {
        navigate("../", { replace: true })
      }
    }, [])
    
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
              response.data.password = "";
              localStorage.setItem("user", JSON.stringify(response.data));
              setCurrentUser(JSON.parse(localStorage.getItem("user")));
              console.log(currentUser)
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
            localStorage.removeItem("user");
            localStorage.removeItem("rooms");
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

    async function changePassword(user) {
      try {
        const requestOptions = {
          method: 'PUT',
          url: ServiceEndpoint.changePassword,
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify(user)
        };
        await HTTP(requestOptions)
        .then(() => alert("DONE"))
      } catch(error) {
        alert(error);
      }
    }

    async function updateProfile(user) {
      try {
        const requestOptions = {
          method: 'PUT',
          url: ServiceEndpoint.updateProfile,
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify(user)
        };
        await HTTP(requestOptions)
        .then((response) =>  setCurrentUser(response.data))
        .finally(() => alert("Update Profile Done"))
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
              localStorage.setItem("rooms", JSON.stringify(response.data));
              setRooms(JSON.parse(localStorage.getItem("rooms")));
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

    async function deleteRoom(id) {
      try {
        const requestOptions = {
          method: 'DELETE',
          url: ServiceEndpoint.deleteRoom,
          headers: { 'Content-Type': 'application/json' },
          params: {roomId: id}
        };
        await HTTP(requestOptions)
          .then(() => {
            setRooms((prev) => prev.filter((item) => item.roomId !== id));
          })
      } catch(error) {
        alert(error);
      }
    }

    async function updateRoom(room) {
      try {
        const requestOptions = {
          method: 'PUT',
          url: ServiceEndpoint.editRoom,
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify(room)
        };
        await HTTP(requestOptions)
          .then(response => {
            if (response.data) {
              setRooms((prev) => prev.filter((item) => item.roomId !== room.roomId));
              setRooms((prev) => [...prev, response.data]);
            }
          })
      } catch(error) {
        alert(error);
      }
    }

    async function rent(room) {
      try {
        const requestOptions = {
          method: 'POST',
          url: ServiceEndpoint.rent,
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify(room)
        };
        await HTTP(requestOptions)
          .then(response => {
            if (response.data) {
              setRooms((prev) => prev.filter((item) => item.roomId !== room.roomId));
              setRooms((prev) => [...prev, response.data]);
            }
          })
      } catch (error) {
        alert(error);
      }
    }

    async function getLog(id) {
      try {
        const requestOptions = {
          method: 'GET',
          url: ServiceEndpoint.log,
          headers: { 'Content-Type': 'application/json' },
          params: {roomId: id}
        };
        await HTTP(requestOptions)
          .then(response => {
            setAllLog(response.data);
          })
      } catch (error) {
        alert(error);
      }
    }

    async function getAllLog(user) {
      try {
        const requestOptions = {
          method: 'GET',
          url: ServiceEndpoint.allLog,
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify(user)
        };
        await HTTP(requestOptions)
          .then(response => {
            setAllLog(response.data);
          })
      } catch (error) {
        alert(error);
      }
    }

    return (
        <AuthContext.Provider value={{
          currentUser, 
          loginAuth, 
          logoutAuth,
          updateProfile,
          changePassword,
          role,
          setRole, 
          getAllRoom, 
          rooms, 
          registration, 
          wrongPassword, 
          addNewRoom, 
          deleteRoom, 
          updateRoom,
          rent,
          allLog,
          getLog,
          getAllLog
          }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;