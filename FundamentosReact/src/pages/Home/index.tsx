import { Box, Typography } from "@mui/material";
import ButtonToNavigate from "../../components/ButtonToNavigate";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Box
      bgcolor="success.main"
      sx={{
        flexGrow: 1,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        padding: 4,
        gap: 2,
      }}
    >
      <Typography variant="h4" color="white" fontWeight="bold">
        Seja bem-vindo aos Fundamentos React!
      </Typography>
      <Typography variant="h6" color="white">
        Local para exibir os tópicos estudados na prática! Explicando com minhas
        palavras o que foi aprendido.
      </Typography>
      <ButtonToNavigate
        label="useState"
        onClick={() => {
          navigate("/useState");
        }}
      />
      <ButtonToNavigate
        label="useEffect"
        onClick={() => {
          navigate("/useEffect");
        }}
      />
      <ButtonToNavigate
        label="useRef"
        onClick={() => {
          navigate("/useRef");
        }}
      />
    </Box>
  );
}
