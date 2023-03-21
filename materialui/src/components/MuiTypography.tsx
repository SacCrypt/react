import {
  Typography,
  Stack,
  TextField,
  Button,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  InputAdornment,
  Box,
  MenuItem,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
  Checkbox,
  Switch,
  Rating,
  Autocomplete,
  Divider,
  Grid,
} from "@mui/material";
import {
  Send,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";

import React, { useState } from "react";

export const MuiTypography = () => {
  const [formats, setFormats] = useState<string[] | null>(null);
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[] | null
  ) => {
    setFormats(updatedFormats);
  };
  const [state, setState] = useState("");
  const [country, setCountry] = useState<string[]>([]);
  const [value, setValue] = useState("");
  const [accept, setAccept] = useState(false);
  const [rating, setRating] = useState<number | null>(2.5);
  const [organ, setOrgan] = useState<string | null>(null);
  const organs = ["Dick", "Bawls", "coochie", "boobies", "armpithair"];
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Typography variant="h1"> h1 Heading </Typography>
        <Typography variant="h2"> h2 Heading </Typography>
        <Typography variant="h3"> h3 Heading </Typography>
        <Typography variant="h4"> h4 Heading </Typography>
        <Typography variant="h5"> h5 Heading </Typography>
        <Typography variant="h6"> h6 Heading </Typography>
        <Typography variant="subtitle1"> sub 1 </Typography>
        <Typography variant="subtitle2"> sub 2 </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
          modi dolor illo veritatis iste magni. Consequuntur explicabo quaerat
          nam architecto id rem molestias quasi laudantium, adipisci illum
          facere iusto facilis quisquam a consectetur nihil magni sint labore.
          Aut, inventore, sunt culpa velit ea ipsum adipisci cumque, suscipit
          explicabo impedit aliquid.
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum
          ratione explicabo dignissimos quisquam neque, ab corrupti debitis,
          odit, eum provident? Repellendus, saepe exercitationem neque ipsum
          aperiam reprehenderit veritatis enim!
        </Typography>
      </Stack>
      <Stack direction="row">
        <Button
          size="small"
          variant="text"
          color="success"
          href="https://google.com"
        >
          Text
        </Button>
        <Button size="medium" variant="contained" color="error">
          Text
        </Button>
        <Button
          startIcon={<Send />}
          endIcon={<Send />}
          size="large"
          variant="outlined"
          color="warning"
        >
          Text
        </Button>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          exclusive
          value={formats}
          onChange={handleFormatChange}
        >
          <ToggleButton value="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underlined">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack
        divider={<Divider flexItem orientation="vertical" />}
        direction="row"
        spacing={3}
      >
        <TextField
          value={state}
          onChange={(e) => setState(e.target.value)}
          error={!state}
          required
          label="Name"
          variant="outlined"
        />
        <TextField
          InputProps={{ readOnly: true }}
          helperText="My balls are itchy"
          variant="filled"
        />
        <TextField type="password" variant="standard" />
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start"> $ </InputAdornment>
            ),
          }}
          label="Amount"
        />
        <TextField
          InputProps={{
            endAdornment: <InputAdornment position="end"> kg </InputAdornment>,
          }}
          label="Weight"
        />
      </Stack>

      <Box width="150px">
        {" "}
        <TextField
          label="Select Country"
          select
          value={country}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;
            setCountry(typeof value === "string" ? value.split(",") : value);
            return;
          }}
          fullWidth
          SelectProps={{
            multiple: true,
          }}
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="AUS">Australia</MenuItem>
          <MenuItem value="US">USA</MenuItem>
        </TextField>{" "}
      </Box>
      <Box>
        <FormControl>
          <FormLabel id="job-experience-group-label" color="secondary">
            {" "}
            Years of experience
          </FormLabel>
          <RadioGroup
            aria-labelledby="job-experience-group-label"
            name="job-experience-group"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            row
          >
            <FormControlLabel
              control={<Radio size="medium" color="secondary" />}
              label="0-2"
              value="0-2"
              color="secondary"
            />
            <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
            <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
          </RadioGroup>
          <FormHelperText>Invalid Selection </FormHelperText>
        </FormControl>
      </Box>
      <Box>
        <Box>
          <FormControlLabel
            label="I accept"
            control={<Checkbox onChange={(e) => setAccept(e.target.checked)} />}
          />
        </Box>
        <Box>
          <Checkbox
            icon={<BookmarkBorder />}
            checkedIcon={<Bookmark />}
            onChange={(e) => setAccept(e.target.checked)}
          />
        </Box>
        <Box>
          <FormControlLabel label="Dark Mode" control={<Switch />} />
        </Box>

        <Rating
          icon={<Favorite fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorder fontSize="inherit" />}
          value={rating}
          precision={0.5}
          onChange={(e, newValue) => setRating(newValue)}
          highlightSelectedOnly
        />
        <Autocomplete
          options={organs}
          renderInput={(params) => <TextField {...params} label="Organs" />}
          value={organ}
          onChange={(e, newVal) => setOrgan(newVal)}
          freeSolo
        />
      </Box>
      <Box
        component="span"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "5px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        Itchy Sweaty Balls
      </Box>
      <Grid my={4} container>
        <Grid item xs sm={6}>
          <Box bgcolor="primary.light">item 1</Box>
        </Grid>
        <Grid item xs={6}>
          {" "}
          <Box bgcolor="primary.light">item 2</Box>
        </Grid>
        <Grid item xs="auto">
          <Box bgcolor="primary.light">item 3</Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="primary.light">item 4</Box>
        </Grid>
      </Grid>
    </div>
  );
};
