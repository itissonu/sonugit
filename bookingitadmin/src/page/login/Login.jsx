import { useContext, useState } from 'react'
import './login.scss';
import { AuthContext } from '../../contex/authContex';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [credential, setcredential] = useState({
        username: undefined,
        password: undefined
    });
    const navigate = useNavigate()
    const { loading, error, dispatch } = useContext(AuthContext);
    const handleChange = (e) => {
        setcredential((prev) => {
            return {
                ...prev, [e.target.id]: e.target.value
            }
        })}
        

        const handleClick = async (data) => {
            data.preventDefault();
            dispatch({type:'loginstart'});
            try {
                const user = await axios.post("http://localhost:8000/api/auth/login", credential);
              
                if(user.data.isAdmin){
                  dispatch({ type: "loginsuccess", payload: user.data.details });
                  navigate("/")
                }
                else{
                  dispatch({ type: "loginfailed", payload: {message:"you are not allowed"} });
                }
               
            } catch (err) {
                if (err.response.status === 500) {
                    const errorMessage = err.response.data; // Assuming the server sends an error message in the response JSON
                    dispatch({ type: "loginfailed", payload: errorMessage });
                  } else {
                    dispatch({ type: "loginfailed", payload: err.response.data });
                  }
            }

        }
      

    

    return (
        <div className="login">
        <div className="lContainer">
          <input
            type="text"
            placeholder="username"
            id="username"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="lInput"
          />
          <button  onClick={handleClick} className="lButton">
            Login
          </button>
          {error && <span>{error.message}</span>}
        </div>
      </div>
    )
}
