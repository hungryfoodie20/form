import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import faceimage from "./faceimage.jpeg";
const Contact = () => {
  const form = useRef();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ty5u4b9",
        "template_p8oa7h6",
        form.current,
        "bjxlX5rdBy7S5TTFw"
      )
      .then(
        (result) => {
          console.log(result.text);
          const isConfirmed = window.confirm("Mail submitted successfully!");
          if (isConfirmed) {
            window.location.reload();
            window.scrollTo(0, 0);
          }
        },
        (error) => {
          console.log(error.text);
          window.confirm("Mail is not submitted successfully!");
        }
      );
  };
  return (
    <div className="contact">
      <h2>Brands Collaboration</h2>
      <form ref={form} onSubmit={sendEmail} className="formclass">
      <img src={faceimage} alt="img" className="faceimage" />
        <TextField
          type="text"
          name="name"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          required
        />
        <TextField
          type="email"
          name="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          required
        />
        <TextField
          type="number"
          name="mobile"
          id="outlined-basic"
          label="Contact"
          variant="outlined"
          required
        />
        <TextField
          type="text"
          name="instaid"
          id="outlined-basic"
          label="Insta Id"
          variant="outlined"
          required
        />
        <TextField
          type="text"
          name="address"
          id="outlined-multiline-flexible"
          label="Address"
          variant="outlined"
          multiline
          maxRows={4}
          required
        />
        <FormLabel id="demo-radio-buttons-group-label">Requirements</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="1 reel + 5 story"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="1 reel + 5 story"
            control={<Radio />}
            label="1 reel + 5 story"
          />
          <FormControlLabel
            value="2 reel + 5 story"
            control={<Radio />}
            label="2 reel + 5 story"
          />
          <FormControlLabel
            value="Instagram 5+ storys ( multiple story)-  Promotion"
            control={<Radio />}
            label="Instagram 5+ storys ( multiple story)-  Promotion"
          />
          <FormControlLabel
            value="1 Trending Reel"
            control={<Radio />}
            label="1 Trending Reel"
          />
          <FormControlLabel
            value="2 post - Pro. Photographs"
            control={<Radio />}
            label="2 post - Pro. Photographs"
          />
          <FormControlLabel
            value="Zomato review "
            control={<Radio />}
            label="Zomato review "
          />
          <FormControlLabel
            value="Google review"
            control={<Radio />}
            label="Google review"
          />
          <FormControlLabel
            value="YouTube short video"
            control={<Radio />}
            label="YouTube short video"
          />
        </RadioGroup>

        <TextField
          type="number"
          name="amount"
          id="outlined-multiline-flexible"
          label="Amount in ₹"
          variant="outlined"
          required
        />
        <FormControlLabel
          required
          control={<Checkbox />}
          label="I Acknowledge"
        />
        <FormControlLabel
          required
          control={<Checkbox />}
          label="By Signing this document, I confirm"
        />
        <Button type="submit" variant="contained" className="buttonSubmit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Contact;
