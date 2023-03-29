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
  Menu,
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
  Paper,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  AppBar,
  Toolbar,
  Link,
  Breadcrumbs,
  Drawer,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  BottomNavigation,
  BottomNavigationAction,
  Avatar,
  AvatarGroup,
  Badge,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  ListItemButton,
} from "@mui/material";
import {
  Mail,
  Send,
  NavigateNext,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
  ExpandMore,
  CatchingPokemon,
  KeyboardArrowDown,
  Share,
  Print,
  CopyAll,
  Edit,
  Home,
  Person,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
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
  const [expanded, setExpanded] = useState<string | false>(false);
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const [drawer, setDrawer] = useState(false);
  const [bottom, setBottom] = useState(0);
  const open = Boolean(anchor);

  const images = [
    {
      img: "https://example.com/image1.jpg",
      title: "Beautiful sunset at the beach",
    },
    {
      img: "https://example.com/image2.jpg",
      title: "Snowy mountains in winter",
    },
    {
      img: "https://example.com/image3.jpg",
      title: "Vibrant city skyline at night",
    },
    {
      img: "https://example.com/image4.jpg",
      title: "Adorable puppy playing in the grass",
    },
    {
      img: "https://example.com/image5.jpg",
      title: "Colorful hot air balloons in the sky",
    },
  ];
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
        Scatchy itchy balls
      </Box>
      <Paper sx={{ padding: "32px" }} elevation={4}>
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
      </Paper>

      <Box width="300px">
        <Card>
          <CardMedia
            component="img"
            height="140"
            image="https://source.unsplash.com/random"
            alt="unsplash image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              React
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              doloremque harum cum dolore rem eaque repudiandae facere nostrum
              tempora et vel, quis commodi, hic facilis dignissimos suscipit,
              expedita odit sit.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"> Share </Button>
            <Button size="small"> Learn More</Button>
          </CardActions>
        </Card>
      </Box>
      <div>
        <Accordion expanded={expanded === "panel1"}>
          <AccordionSummary
            id="panel1-header"
            aria-controls="panel1-content"
            expandIcon={<ExpandMore />}
          >
            {" "}
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {" "}
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              beatae voluptatum hic saepe veniam tenetur eius iure molestiae
              minus. Excepturi magnam modi nesciunt id quae. Facilis dicta
              temporibus id praesentium!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel2"}>
          <AccordionSummary
            id="panel2-header"
            aria-controls="panel2-content"
            expandIcon={<ExpandMore />}
          >
            {" "}
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {" "}
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              beatae voluptatum hic saepe veniam tenetur eius iure molestiae
              minus. Excepturi magnam modi nesciunt id quae. Facilis dicta
              temporibus id praesentium!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Stack>
          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {images.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                  alt="itemtitle"
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
          <ImageList
            variant="woven"
            sx={{ width: 500, height: 450 }}
            cols={3}
            rowHeight={164}
          >
            {images.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                  alt="itemtitle"
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
          <ImageList
            variant="masonry"
            sx={{ width: 500, height: 450 }}
            cols={3}
            rowHeight={164}
          >
            {images.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                  alt="itemtitle"
                  loading="lazy"
                />
                <ImageListItemBar title={item.title} />
              </ImageListItem>
            ))}
          </ImageList>
        </Stack>
      </div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemon />
          </IconButton>
          <Typography sx={{ flexGrow: 1 }} component="div" variant="h6">
            Pokemon negros
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Login</Button>
            <Button
              id="resources-button"
              onClick={(e) => setAnchor(e.currentTarget)}
              color="inherit"
              aria-controls={open ? "resources-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              endIcon={<KeyboardArrowDown />}
            >
              Resources
            </Button>
          </Stack>
          <Menu
            MenuListProps={{
              "aria-labelledby": "resources-button",
            }}
            open={open}
            anchorEl={anchor}
            id="resources-menu"
            onClose={() => {
              setAnchor(null);
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem
              onClick={() => {
                setAnchor(null);
              }}
            >
              Blog
            </MenuItem>
            <MenuItem>Podcast</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Stack spacing={2} direction="row" m={4}>
        <Typography>
          <Link variant="body2" href="#" color="secondary" underline="hover">
            Link
          </Link>
        </Typography>
      </Stack>
      <Box m={2}>
        <Breadcrumbs
          separator={<NavigateNext fontSize="small" />}
          aria-label="breadcrumb"
          maxItems={2}
          itemsAfterCollapse={2}
          itemsBeforeCollapse={1}
        >
          <Link href="#">Home</Link>
          <Link href="#">Catalog</Link>
          <Link href="#">Accessories</Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>
      <>
        <IconButton
          onClick={() => setDrawer(true)}
          size="large"
          edge="start"
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={drawer} onClose={() => setDrawer(false)} anchor="left">
          <Box p={2} width="250px" textAlign="center" role="presentation">
            <Typography variant="h6" component="div">
              Side Panel
            </Typography>
          </Box>
        </Drawer>
        <SpeedDial
          ariaLabel="Navigation speed Dial"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon openIcon={<Edit />} />}
        >
          <SpeedDialAction tooltipOpen icon={<CopyAll />} tooltipTitle="Copy" />
          <SpeedDialAction icon={<Share />} tooltipTitle="Share" />
          <SpeedDialAction icon={<Print />} tooltipTitle="Print" />
        </SpeedDial>
      </>
      <BottomNavigation
        value={bottom}
        onChange={(event, newValue) => setBottom(newValue)}
        sx={{ width: "100%", position: "absolute", bottom: 0 }}
        showLabels
      >
        <BottomNavigationAction label="Home" icon={<Home />} />
        <BottomNavigationAction label="Favourite" icon={<Favorite />} />
        <BottomNavigationAction label="Profile" icon={<Person />} />
      </BottomNavigation>

      <Stack spacing={4}>
        <Stack direction="row" spacing={1}>
          <AvatarGroup max={3}>
            <Avatar sx={{ width: 48, height: 48, bgcolor: "primary.light" }}>
              Cotton
            </Avatar>
            <Avatar variant="square" sx={{ bgcolor: "success.light" }}>
              Wool
            </Avatar>
            <Avatar
              variant="rounded"
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="Junidher"
            />
            <Avatar
              src="https://randomuser.me/api/portraits/men/51.jpg"
              alt="Janab"
            />
          </AvatarGroup>
        </Stack>
      </Stack>

      <Stack spacing={2} direction="row">
        <Badge badgeContent={5} color="primary">
          <Mail />
        </Badge>
        <Badge max={999} showZero badgeContent={100} color="secondary">
          <Mail />
        </Badge>
        <Badge
          invisible={true}
          variant="dot"
          max={999}
          showZero
          badgeContent={100}
          color="secondary"
        >
          <Mail />
        </Badge>
      </Stack>

      <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <Mail />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText secondary="Secondary Text" primary="List item 1" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <Mail />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText secondary="Secondary Text" primary="List item 2" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <Mail />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText secondary="Secondary Text" primary="List item 3" />
          </ListItem>
        </List>
      </Box>
    </div>
  );
};
