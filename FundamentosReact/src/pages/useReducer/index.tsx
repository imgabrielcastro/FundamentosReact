import { Box, Typography, Button } from "@mui/material";
import BackToHome from "../../components/BackToHome";

export default function UseReducerExample() {
  return (
    <Box
      bgcolor="success.main"
      sx={{ flexGrow: 1, textAlign: "center", padding: 2 }}
    >
      <BackToHome />
      <Box sx={{ p: 4 }}>
        <Typography
          color="background.default"
          fontWeight="bold"
          variant="h4"
          sx={{ mb: 3 }}
        >
          useReducer
        </Typography>

        <Typography color="background.default" variant="h6" sx={{ mb: 3 }}>
          teste
        </Typography>

        <Typography color="background.default" variant="h6" sx={{ mb: 3 }}>
          Exemplo abaixo:
        </Typography>

        <Box sx={{ mb: 3, gap: 2, display: "flex", justifyContent: "center" }}>

        </Box>
      </Box>
    </Box>
  );
}
