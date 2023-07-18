import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const ComponentsAppBar = styled(AppBar)({
  background: "#434343",
});

export const ComponentsToolbar = styled(Toolbar)({
  "@media (min-width: 600px)": {
    paddingInline: "8px",
  },
});

export const ComponentsTypography = styled(Typography)({
  paddingLeft: "10px",
});
