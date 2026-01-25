import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

export default function BackToHome() {
  return (
    <Button component={Link} to="/" variant="contained" color="secondary">
      <HomeIcon />
      Home
    </Button>
  );
}
