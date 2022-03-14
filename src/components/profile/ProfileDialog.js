import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiShow } from "react-icons/bi";
import styled from "styled-components";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { TextField } from "@mui/material";
import { Constant } from "../../constants/index";
const { Fonts, Colors } = Constant;

export const UserNameDialog = ({ dialogOpen, dialogClose, funcDemo }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    // Username Dialog
    <Dialog open={dialogOpen} fullScreen>
      <Section>
        <div className="content">
          <DialogTitle color={Colors.primaryColor}>
            Update Your Name
          </DialogTitle>
          <DialogContent>
            <div style={{ marginBottom: "1rem", marginTop: "1rem" }}>
              <TextField
                label="First Name"
                fullWidth
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <TextField
                label="Last Name"
                fullWidth
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div
              style={{
                marginBottom: "0.5rem",
                display: "flex",
                gap: "1rem",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                style={{ background: Colors.primaryColor }}
                onClick={() => {
                  if (firstName === "" || lastName === "") {
                    toast.error("All Fields Required!", {
                      position: "top-center",
                      autoClose: 3000,
                    });
                  } else {
                    funcDemo(firstName, lastName);
                    toast.success("Username Successfully Updated", {
                      position: "top-center",
                      autoClose: 3000,
                    });
                    setFirstName("");
                    setLastName("");
                    setTimeout(() => {
                      dialogClose();
                    }, 3000);
                  }
                }}
              >
                Save
              </Button>
              <Button onClick={dialogClose}>Cancel</Button>
            </div>
          </DialogContent>
        </div>
        <ToastContainer />
      </Section>
    </Dialog>
  );
};

// Password Dialog

export const PasswordDialog = ({
  passDialogOpen,
  passDialogClose,
  funcDemo,
}) => {
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [oldPassword, setOldPassword] = useState("Sawar@12345678");

  return (
    <Dialog open={passDialogOpen} fullScreen>
      <Section>
        <div className="content">
          <DialogTitle color={Colors.primaryColor}>
            Update Your Password
          </DialogTitle>
          <DialogContent>
            <div style={{ marginBottom: "1rem", marginTop: "1rem" }}>
              <TextField
                label="Old Password"
                fullWidth
                value={oldPass}
                onChange={(e) => setOldPass(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <TextField
                label="New Password"
                fullWidth
                value={password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        style={{ borderRadius: "50px", fontSize: "1.5rem" }}
                      >
                        <BiShow />
                      </Button>
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <TextField
                label="Confirm Password"
                fullWidth
                value={conPassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        style={{ borderRadius: "50px", fontSize: "1.5rem" }}
                      >
                        <BiShow />
                      </Button>
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => {
                  setConPassword(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                marginBottom: "0.5rem",
                display: "flex",
                gap: "1rem",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                style={{ background: Colors.primaryColor }}
                onClick={() => {
                  if (
                    password === "" ||
                    conPassword === "" ||
                    oldPassword === ""
                  ) {
                    toast.error("All Fields Required!", {
                      position: "top-center",
                      autoClose: 3000,
                    });
                  } else if (oldPassword !== oldPass) {
                    toast.error("Old Password Not Matched!", {
                      position: "top-center",
                      autoClose: 3000,
                    });
                  } else if (password !== conPassword) {
                    toast.error("Password Not Matched", {
                      position: "top-center",
                      autoClose: 3000,
                    }); 
                  } else {
                    // funcDemo(password.slice(0, 3).split(/./g, '*'));
                    funcDemo(password.substring(0, 3) + password.slice(3, password.length).replace(/./g, '*'));
                    toast.success("Password Successfully Updated", {
                      position: "top-center",
                      autoClose: 3000,
                    });
                    setPassword("");
                    setConPassword("");
                    setOldPass("");
                    setOldPassword(password)
                    setTimeout(() => {
                      passDialogClose();
                    }, 3000);
                  }
                }}
              >
                Save
              </Button>
              <Button onClick={passDialogClose}>Cancel</Button>
            </div>
            <ToastContainer />
          </DialogContent>
        </div>
      </Section>
    </Dialog>
  );
};

// Email Dialog

export const EmailDialog = ({
  emailDialogOpen,
  emailDialogClose,
  funcDemo,
}) => {
  const [email, setEmail] = useState("");

  return (
    <Dialog open={emailDialogOpen} fullScreen>
      <Section>
        <div className="content">
          <DialogTitle color={Colors.primaryColor}>
            Update Your Email
          </DialogTitle>
          <DialogContent>
            <div style={{ marginBottom: "1rem", marginTop: "1rem" }}>
              <TextField
                required
                type="email"
                label="Email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div
              style={{
                marginBottom: "0.5rem",
                display: "flex",
                gap: "1rem",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                style={{ background: Colors.primaryColor }}
                onClick={() => {
                  if (email === "") {
                    toast.error("Please Enter Your Email", {
                      position: "top-center",
                      autoClose: 2000,
                    });
                  } else {
                    funcDemo(email);
                    toast.success("Email Successfully updated", {
                      position: "top-center",
                      autoClose: 3000,
                    });
                    setEmail("");
                    setTimeout(() => {
                      emailDialogClose();
                    }, 3000);
                  }
                }}
              >
                Save
              </Button>
              <Button onClick={emailDialogClose}>Cancel</Button>
            </div>
            <ToastContainer />
          </DialogContent>
        </div>
      </Section>
    </Dialog>
  );
};

// Phone Dialog

export const PhoneDialog = ({
  phoneDialogOpen,
  phoneDialogClose,
  funcDemo,
}) => {
  const [phone, setPhone] = useState("");
  return (
    <Dialog open={phoneDialogOpen} fullScreen>
      <Section>
        <div className="content">
          <DialogTitle color={Colors.primaryColor}>
            Update Your Phone
          </DialogTitle>
          <DialogContent>
            <div style={{ marginBottom: "1rem", marginTop: "1rem" }}>
              <TextField
                label="Phone No."
                fullWidth
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div
              style={{
                marginBottom: "0.5rem",
                display: "flex",
                gap: "1rem",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                style={{ background: Colors.primaryColor }}
                onClick={() => {
                  if (phone === "") {
                    toast.error("Please Enter Your Phone Number", {
                      position: "top-center",
                      autoClose: 2000,
                    });
                  } else {
                    funcDemo(phone);
                    toast.success("Phone Number Successfully updated", {
                      position: "top-center",
                      autoClose: 3000,
                    });
                    setPhone("");
                    setTimeout(() => {
                      phoneDialogClose();
                    }, 3000);
                  }
                }}
              >
                Save
              </Button>
              <Button onClick={phoneDialogClose}>Cancel</Button>
            </div>
            <ToastContainer />
          </DialogContent>
        </div>
      </Section>
    </Dialog>
  );
};

// Address Dialog

export const AddressDialog = ({
  addressDialogOpen,
  addressDialogClose,
  funcDemo,
}) => {
  const [address, setAddress] = useState("");
  return (
    <Dialog open={addressDialogOpen} fullScreen>
      <Section>
        <div className="content">
          <DialogTitle color={Colors.primaryColor}>
            Update Your Address
          </DialogTitle>
          <DialogContent>
            <div style={{ marginBottom: "1rem", marginTop: "1rem" }}>
              <TextField
                label="Address"
                fullWidth
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div
              style={{
                marginBottom: "0.5rem",
                display: "flex",
                gap: "1rem",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                style={{ background: Colors.primaryColor }}
                onClick={() => {
                  if (address === "") {
                    toast.error("Please Enter Your Address", {
                      position: "top-center",
                      autoClose: 2000,
                    });
                  } else {
                    funcDemo(address);
                    toast.success("Address Successfully updated", {
                      position: "top-center",
                      autoClose: 3000,
                    });
                    setAddress("");
                    setTimeout(() => {
                      addressDialogClose();
                    }, 3000);
                  }
                }}
              >
                Save
              </Button>
              <Button onClick={addressDialogClose}>Cancel</Button>
            </div>
            <ToastContainer />
          </DialogContent>
        </div>
      </Section>
    </Dialog>
  );
};

// Language Dialog

export const Language = ({ langDialogOpen, langDialogClose, funcDemo }) => {
  const [lang, setLang] = useState("");
  return (
    <Dialog open={langDialogOpen} fullScreen>
      <Section>
        <div className="content">
          <DialogTitle color={Colors.primaryColor}>
            Update Your Language
          </DialogTitle>
          <DialogContent>
            <FormControl fullWidth>
              <InputLabel>Language</InputLabel>
              <Select
                value={lang}
                onChange={(e) => {
                  setLang(e.target.value);
                }}
              >
                <MenuItem value={"Kashmiri"}>Kashmiri</MenuItem>
                <MenuItem value={"English"}>English</MenuItem>
                <MenuItem value={"Urdu"}>Urdu</MenuItem>
              </Select>
            </FormControl>
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                gap: "1rem",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                style={{ background: Colors.primaryColor }}
                onClick={() => {
                  if (lang === "") {
                    toast.error("Please Choose Your Language", {
                      position: "top-center",
                      autoClose: 2000,
                    });
                    console.log(lang);
                  } else {
                    console.log(lang);
                    funcDemo(lang);
                    toast.success("Language Successfully updated", {
                      position: "top-center",
                      autoClose: 3000,
                    });
                    setLang("");
                    setTimeout(() => {
                      langDialogClose();
                    }, 3000);
                  }
                }}
              >
                Save
              </Button>
              <Button onClick={langDialogClose}>Cancel</Button>
            </div>
            <ToastContainer />
          </DialogContent>
        </div>
      </Section>
    </Dialog>
  );
};

// Gender Dialog

export const Gender = ({ genderDialogOpen, genderDialogClose, funcDemo }) => {
  const [gender, setGender] = useState("");

  return (
    <Dialog open={genderDialogOpen} fullScreen>
      <Section>
        <div className="content">
          <DialogTitle color={Colors.primaryColor}>
            Update Your Gender
          </DialogTitle>
          <DialogContent>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
            </FormControl>
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                gap: "1rem",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                style={{ background: Colors.primaryColor }}
                onClick={() => {
                  if (gender === "") {
                    toast.error("Please Choose Your Gender", {
                      position: "top-center",
                      autoClose: 2000,
                    });
                  } else {
                    funcDemo(gender);
                    toast.success("Gender Successfully updated", {
                      position: "top-center",
                      autoClose: 3000,
                    });
                    setGender("");
                    setTimeout(() => {
                      genderDialogClose();
                    }, 3000);
                  }
                }}
              >
                Save
              </Button>
              <Button onClick={genderDialogClose}>Cancel</Button>
            </div>
            <ToastContainer />
          </DialogContent>
        </div>
      </Section>
    </Dialog>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .content {
    width: 50%;
    /* background-color: red; */
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .content {
      width: 100%;
    }
  }
`;
