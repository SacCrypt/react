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
  Chip,
  Tooltip,
  TableContainer,
  TableHead,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Alert,
  AlertTitle,
  Snackbar,
  AlertProps,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogActions,
  DialogContent,
  LinearProgress,
  CircularProgress,
  Skeleton,
  Tab,
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
  Delete,
  Check,
  Save,
} from "@mui/icons-material";

import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, forwardRef, useEffect } from "react";
import {
  Masonry,
  TabContext,
  TabList,
  TabPanel,
  LoadingButton,
  DateRangePicker,
  DatePicker,
  TimePicker,
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
  TimelineOppositeContent,
} from "@mui/lab";

export const MuiTypography = () => {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });
  const SnackBarAlert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
    <Alert elevation={6} ref={ref} {...props} />
  ));
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[] | null
  ) => {
    setFormats(updatedFormats);
  };
  const [formats, setFormats] = useState<string[] | null>(null);
  const heights = [
    150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
  ];
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
  const [snack, setSnack] = useState(false);
  const [openDialog, setDialog] = useState(false);
  const open = Boolean(anchor);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [tab, setTab] = useState("1");
  const tableData = [
    {
      id: 1,
      first_name: "Chrotoem",
      last_name: "Meineking",
      email: "cmeineking0@webnode.com",
      gender: "Genderfluid",
      ip_address: "9.127.71.110",
    },
    {
      id: 2,
      first_name: "Gregorio",
      last_name: "Presser",
      email: "gpresser1@engadget.com",
      gender: "Male",
      ip_address: "91.245.144.219",
    },
    {
      id: 3,
      first_name: "Sue",
      last_name: "Kohring",
      email: "skohring2@cnbc.com",
      gender: "Female",
      ip_address: "194.248.70.186",
    },
    {
      id: 4,
      first_name: "Vernon",
      last_name: "Ricardin",
      email: "vricardin3@ca.gov",
      gender: "Male",
      ip_address: "19.175.228.12",
    },
    {
      id: 5,
      first_name: "Mordecai",
      last_name: "Lowndesbrough",
      email: "mlowndesbrough4@yolasite.com",
      gender: "Male",
      ip_address: "91.130.41.47",
    },
    {
      id: 6,
      first_name: "Kaylee",
      last_name: "Lepope",
      email: "klepope5@usnews.com",
      gender: "Female",
      ip_address: "16.15.79.108",
    },
    {
      id: 7,
      first_name: "Simone",
      last_name: "Doulton",
      email: "sdoulton6@ehow.com",
      gender: "Male",
      ip_address: "164.186.22.77",
    },
    {
      id: 8,
      first_name: "Chan",
      last_name: "Dumphries",
      email: "cdumphries7@so-net.ne.jp",
      gender: "Male",
      ip_address: "41.103.134.128",
    },
    {
      id: 9,
      first_name: "Candi",
      last_name: "Ravillas",
      email: "cravillas8@europa.eu",
      gender: "Female",
      ip_address: "158.76.120.129",
    },
    {
      id: 10,
      first_name: "Josy",
      last_name: "Driver",
      email: "jdriver9@reuters.com",
      gender: "Female",
      ip_address: "52.192.230.60",
    },
  ];
  const images = [
    {
      img: "https://picsum.photos/200/400",
      title: "Beautiful sunset at the beach",
    },
    {
      img: "https://picsum.photos/200/500",
      title: "Snowy mountains in winter",
    },
    {
      img: "https://picsum.photos/200/600",
      title: "Vibrant city skyline at night",
    },
    {
      img: "https://picsum.photos/200/700",
      title: "Adorable puppy playing in the grass",
    },
    {
      img: "https://picsum.photos/200/800",
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
      <Stack direction="row" spacing={1}>
        <Chip label="chip" size="small" color="primary" />
        <Chip
          variant="outlined"
          label="chip outlined"
          size="small"
          color="secondary"
          avatar={<Avatar> V </Avatar>}
        />
        <Chip
          label="Click"
          color="success"
          onClick={() => alert("Jews are coming")}
          icon={<Favorite />}
        />
        <Chip
          label="Delete"
          color="error"
          onClick={() => alert("clicked")}
          onDelete={() => alert("Deleted")}
        />
      </Stack>
      <Tooltip
        enterDelay={500}
        leaveDelay={200}
        arrow
        placement="right"
        title="Delete"
      >
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>

      <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            {" "}
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>

              <TableCell>Last Name</TableCell>

              <TableCell align="center"> Email </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => {
              return (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.first_name}</TableCell>
                  <TableCell>{row.last_name}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={2}>
        <Alert variant="outlined" severity="error">
          <AlertTitle>Error</AlertTitle>
          Error Alert
        </Alert>
        <Alert
          onClose={() => alert("WTF NIGGA")}
          variant="filled"
          severity="warning"
        >
          Warning Alert
        </Alert>
        <Alert
          action={
            <Button color="inherit" size="small">
              UNDO
            </Button>
          }
          severity="info"
        >
          Info Alert
        </Alert>
        <Alert severity="success">Success Alert</Alert>
        <Alert icon={<Check />} severity="success">
          Success Alert
        </Alert>
      </Stack>
      <>
        <Button onClick={() => setSnack(true)}>Submit</Button>
        <Snackbar
          message="Big Balls Gang wya"
          autoHideDuration={4000}
          open={snack}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          onClose={(e, reason) => {
            if (reason === "clickaway") {
              return;
            }
            setSnack(false);
          }}
        />
        <Snackbar
          open={snack}
          autoHideDuration={6000}
          onClose={(e, reason) => {
            if (reason === "clickaway") {
              return;
            }
            setSnack(false);
          }}
        >
          <SnackBarAlert severity="success"> Custom </SnackBarAlert>
        </Snackbar>
      </>
      <>
        <Button onClick={() => setDialog(true)}>Open Dialog</Button>
        <Dialog
          onClose={() => setDialog(false)}
          open={openDialog}
          aria-leballedby="dialog-title"
        >
          <DialogTitle id="dialog-title" aria-describedby="dialog-description">
            Submit ?
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="dialog-description">
              Sure negro ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialog(true)} autoFocus>
              Submit
            </Button>
            <Button onClick={() => setDialog(true)}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </>
      <Stack spacing={2}>
        <CircularProgress color="success" variant="determinate" value={60} />
        <CircularProgress color="success" />
        <LinearProgress color="success" variant="determinate" value={60} />
        <LinearProgress color="success" />
      </Stack>

      <Stack spacing={1} width="250px">
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton
          variant="rectangular"
          width={250}
          height={250}
          animation="wave"
        />
      </Stack>

      <Box sx={{ width: "250px" }}>
        {loading ? (
          <Skeleton
            variant="rectangular"
            width={256}
            height={144}
            animation="wave"
          />
        ) : (
          <img
            src="https://source.unsplash.com/random/256x144"
            alt="Skeleton"
            width={256}
            height={144}
          />
        )}

        <Stack
          direction="row"
          spacing={1}
          sx={{ width: "100%", marginTop: "12px" }}
        >
          {loading ? (
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              animation="wave"
            />
          ) : (
            <Avatar> S </Avatar>
          )}
        </Stack>

        <Stack sx={{ width: "80%" }}>
          {loading ? (
            <>
              <Typography variant="body1">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
              <Typography variant="body2">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="body1"> Balls </Typography>
            </>
          )}
        </Stack>
      </Box>
      <Stack spacing={2} direction="row">
        <LoadingButton variant="outlined">Submit</LoadingButton>
        <LoadingButton loading variant="outlined">
          Submit
        </LoadingButton>
        <LoadingButton
          startIcon={<Save />}
          variant="outlined"
          loadingIndicator="Loading"
        >
          Balls
        </LoadingButton>
      </Stack>

      {/* <Stack spacing={4} sx={{ width: "250px" }}>
        <DatePicker
          label="Date Picker"
          renderInput={(p) => <TextField {...p} />}
          onChange={(new) => setSelectedDate(new)}
          value={selectedDate}
        />
      </Stack> */}
      <Box>
        <TabContext value={tab}>
          <Box sx={{ width: "300px", borderBottom: 1, borderColor: "divider" }}>
            <TabList
              variant="scrollable"
              scrollButtons="auto"
              textColor="secondary"
              indicatorColor="secondary"
              onChange={(event, newVal) => setTab(newVal)}
              aria-label="Tabs"
            >
              <Tab
                icon={<Favorite />}
                iconPosition="start"
                label="Tab One"
                value="1"
              />
              <Tab disabled label="Tab Two" value="2" />
              <Tab label="Tab Three" value="3" />
              <Tab label="Tab Four" value="4" />
              <Tab label="Tab Five" value="5" />
              <Tab label="Tab Six" value="6" />
            </TabList>
          </Box>
          <TabPanel value="1">Panel One</TabPanel>
          <TabPanel value="2">Panel Two</TabPanel>
          <TabPanel value="3">Panel Three</TabPanel>
          <TabPanel value="4">Panel Four</TabPanel>
          <TabPanel value="5">Panel Five</TabPanel>
          <TabPanel value="6">Panel Six</TabPanel>
        </TabContext>
      </Box>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>City A</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>City B</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            9:30 AM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>City C</TimelineContent>
        </TimelineItem>
      </Timeline>
      <Box sx={{ width: 500, minHeight: 400 }}>
        <Masonry columns={4} spacing={1}>
          {heights.map((height, index) => (
            <Paper
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                height,
                border: "1px solid",
                alignItems: "center",
              }}
            >
              <Accordion sx={{ minHeight: height }}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography>Accordion {index + 1}</Typography>
                </AccordionSummary>
                <AccordionDetails>Content</AccordionDetails>
              </Accordion>
              {index + 1}
            </Paper>
          ))}
        </Masonry>
      </Box>
      <Box
        sx={{
          width: {
            xs: 100, //when vw is 0 and above
            sm: 200, //600
            md: 300, //900
            lg: 400, //1200
            xl: 500, //1500
          },
          height: "300px",
          bgcolor: "primary",
        }}
      >
        {" "}
      </Box>
    </div>
  );
};
