import React, { useState, useEffect } from "react";
import { TextField, MenuItem, Button, Box, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Cards from "./Cards";

const theme = createTheme({
  palette: {
    mode: "light", // Light mode
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#C9FD02", // Label color
          "&.Mui-focused": {
            color: "#C9FD02", // Focus color for label
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff", // White background for inputs
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#C9FD02", // Focus color for outline
          },
        },
        input: {
          color: "#000", // Black text color for typing
        },
        notchedOutline: {
          borderColor: "#C9FD02", // Default outline color
        },
      },
    },
  },
});

const FormComponent = () => {
  const [dataArray, setDataArray] = useState(() => {
    const savedData = localStorage.getItem("dataArray");
    return savedData ? JSON.parse(savedData) : [];
  });
  const [formValues, setFormValues] = useState({
    name: "",
    role: "",
    email: "",
    phoneNumber: "",
    courses: "",
    status: "",
  });

  const [errors, setErrors] = useState({});

  const courses = [
    "React Basics",
    "UI/UX Design",
    "JavaScript Fundamentals",
    "Advanced CSS",
    "Backend Development",
  ];

  const statusOptions = ["Placed", "Unplaced"];

  const validate = () => {
    let tempErrors = {};
    if (!formValues.name) tempErrors.name = "Name is required";
    if (!formValues.role) tempErrors.role = "Role is required";
    if (!formValues.email) tempErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formValues.email))
      tempErrors.email = "Email is not valid";
    if (!formValues.phoneNumber)
      tempErrors.phoneNumber = "Phone Number is required";
    if (!/^\d{10}$/.test(formValues.phoneNumber))
      tempErrors.phoneNumber = "Phone Number must be 10 digits";
    if (!formValues.courses)
      tempErrors.courses = "Course selection is required";
    if (!formValues.status) tempErrors.status = "Status is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // handle form submission
      setDataArray([
        ...dataArray,
        {
          ...formValues,
        },
      ]);
      setFormValues({
        name: "",
        role: "",
        email: "",
        phoneNumber: "",
        courses: "",
        status: "",
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("dataArray", JSON.stringify(dataArray));
  }, [dataArray]);

  return (
    <>
      <h2 className="toptext">Fill This Form</h2>
      <ThemeProvider theme={theme}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
          }}
        >
          <Grid container spacing={2} sx={{ maxWidth: "800px", width: "100%" }}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.name}
                helperText={errors.name}
                sx={{
                  "& .MuiInputBase-root": {
                    fontSize: {
                      xs: "1rem", // For smaller screens
                      sm: "1.1rem", // For tablets
                      md: "1.2rem", // For larger screens
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Role"
                name="role"
                value={formValues.role}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.role}
                helperText={errors.role}
                sx={{
                  "& .MuiInputBase-root": {
                    fontSize: {
                      xs: "1rem",
                      sm: "1.1rem",
                      md: "1.2rem",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email}
                sx={{
                  "& .MuiInputBase-root": {
                    fontSize: {
                      xs: "1rem",
                      sm: "1.1rem",
                      md: "1.2rem",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone Number"
                name="phoneNumber"
                value={formValues.phoneNumber}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
                sx={{
                  "& .MuiInputBase-root": {
                    fontSize: {
                      xs: "1rem",
                      sm: "1.1rem",
                      md: "1.2rem",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Courses"
                name="courses"
                value={formValues.courses}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.courses}
                helperText={errors.courses}
                sx={{
                  "& .MuiInputBase-root": {
                    fontSize: {
                      xs: "1rem",
                      sm: "1.1rem",
                      md: "1.2rem",
                    },
                  },
                }}
              >
                {courses.map((course) => (
                  <MenuItem key={course} value={course}>
                    {course}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Status"
                name="status"
                value={formValues.status}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.status}
                helperText={errors.status}
                sx={{
                  "& .MuiInputBase-root": {
                    fontSize: {
                      xs: "1rem",
                      sm: "1.1rem",
                      md: "1.2rem",
                    },
                  },
                }}
              >
                {statusOptions.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            sx={{
              marginTop: "20px",
              backgroundColor: "#C9FD02",
              color: "#000",
              ":hover": { backgroundColor: "#A0CF02" },
              fontSize: {
                xs: "1rem",
                sm: "1.1rem",
                md: "1.2rem",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </ThemeProvider>
      <Cards setDataArray={setDataArray} dataArray={dataArray} />
    </>
  );
};

export default FormComponent;
