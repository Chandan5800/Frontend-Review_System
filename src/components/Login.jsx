import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid, Paper, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../Services/UserService";
import { doLogin } from "../Auth";

const bull = (
  <Box component="span" sx={{ mx: "2px", transform: "scale(0.8)" }}>
    •
  </Box>
);

export default function Login() {
  const paperStyle = {
    padding: 40,
    height: "70vh",
    width: 500,
    margin: "80px auto",
  };

  let navigate = useNavigate();
  const [loginDetail, setLoginDetail] = React.useState({
    username:'',
    password:''
  })

  const handleChange = (event, field) => {

    let actualValue = event.target.value
    setLoginDetail({
      ...loginDetail,
      [field]:actualValue
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);

    if(loginDetail.username.trim() == '' || loginDetail.password.trim() == ''){
      toast.error("Username and password is required...!!")
      return;
    }

    login(loginDetail).then((data) => {
      console.log(data)

      doLogin(data, () => {
        console.log("login detail is saved to localstorage")
        navigate("/")
      })

      toast.success("Login Success")
    }).catch(error => {
      console.log(error)
      toast.error("Something went wrong")
    })
  }; 
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid container spacing={3}>
              <h2 className="px-32">Login Form</h2>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  autoComplete="email"
                value={loginDetail.username}
                onChange={(e) => handleChange(e, 'username')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  fullWidth
                  autoComplete="password"
                value={loginDetail.password}
                onChange={(e) => handleChange(e, 'password')}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  className="bg-[#9155FD] w-full"
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ padding: ".8rem 0", bgcolor: "#9155FD " }}
                >
                  Login
                </Button>
              </Grid>
              
            </Grid>
            <div className="flex justify-center flex-col items-center">
                <div className="py-3 flex items-center">
                  <p>if you don't have account ?</p>
                  <Button onClick={() => navigate("/register")} className="ml-5 py-0">Register</Button>
                </div>
              </div>
          </Paper>
        </Grid>
      </form>
    </div>
  );
}
