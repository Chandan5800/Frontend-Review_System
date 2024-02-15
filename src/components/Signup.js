import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Button, FormHelperText, Grid, Paper, TextField } from "@mui/material";
import { signUp } from "../Services/UserService";
import { toast } from "react-toastify";

const Signup = () => {
  const paperStyle = {
    padding: 40,
    height: "80vh",
    width: 500,
    margin: "80px auto",
  };
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const [error, setError] = useState({
    error: {},
    isError: false
  })

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value })
  }

  const submitForm = (event) => {
    event.preventDefault()

    signUp(data).then((resp) => {
      navigate("/")
      console.log(resp)
      console.log("Success log")
      toast.success("User is register successfully...!!!")
      setData({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      })
    }).catch((error) => {
      console.log(error)
      console.log("Error log")
      setError({
        errors: error,
        isError: true
      })
    })
  };
  return (
      <div>
      <form onSubmit={submitForm}>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid container spacing={3}>
            <h2 className="px-20">Registration Form</h2>
            <Grid item xs={12} sm={6}>
            <TextField
              // required
              id='firstName'
              name='firstName'
              label='First name'
              fullWidth
              autoComplete='given-name'
              onChange={(e) => handleChange(e, 'firstName')}
              value={data.firstName}
              error={!!error.errors?.response?.data?.firstName}
            />
            <FormHelperText error>
              {error.errors?.response?.data?.firstName}
            </FormHelperText>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              // required
              id='lastName'
              name='lastName'
              label='Last name'
              fullWidth
              autoComplete='given-name'
              onChange={(e) => handleChange(e, 'lastName')}
              value={data.lastName}
              error={!!error.errors?.response?.data?.lastName}
            />
            <FormHelperText error>
              {error.errors?.response?.data?.lastName}
            </FormHelperText>
          </Grid>
          <Grid item xs={12}>
            <TextField
              // required
              id='email'
              name='email'
              label='Email'
              fullWidth
              autoComplete='email'
              onChange={(e) => handleChange(e, 'email')}
              value={data.email}
              error={!!error.errors?.response?.data?.email}
            />
            <FormHelperText error>
              {error.errors?.response?.data?.email}
            </FormHelperText>
          </Grid>
          <Grid item xs={12}>
            <TextField
              // required
              id='password'
              name='password'
              label='Password'
              fullWidth
              autoComplete='password'
              onChange={(e) => handleChange(e, 'password')}
              value={data.password}
              error={!!error.errors?.response?.data?.password}
            />
            <FormHelperText error>
              {error.errors?.response?.data?.password}
            </FormHelperText>
          </Grid>
          <Grid item xs={12}>
            <Button
              className='bg-[#9155FD] w-full'
              type='submit'
              variant='contained'
              size='large'
              sx={{ padding: ".8rem 0", bgcolor: '#9155FD ' }}>
              Register
            </Button>
          </Grid>
              
            </Grid>
            <div className='flex justify-center flex-col items-center'>
        <div className='py-3 flex items-center'>
          <p>if you have already account ?</p>
          <Button onClick={() => navigate("/login")} className='ml-5 py-0'>Login</Button>
        </div>
      </div>
          </Paper>
        </Grid>
      </form>
      </div>
  );
};

export default Signup;
