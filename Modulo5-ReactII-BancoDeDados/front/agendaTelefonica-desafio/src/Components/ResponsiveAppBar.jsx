import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { IconButton } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "#134563",
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KONTACTS
          </Typography>
          <IconButton>
            <ExitToAppIcon sx={{ color: "white" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
