import { Box, Typography } from "@mui/material";
import ButtonToNavigate from "../../components/ButtonToNavigate";
import { useNavigate } from "react-router-dom";
import { useName } from "../../contexts/NameContext";

export default function Home() {
  const navigate = useNavigate();
  const { nome } = useName();
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
      {nome && (
        <Typography variant="h6" color="white">
          Nome definido no useContext: {nome}
        </Typography>
      )}
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

      <ButtonToNavigate
        label="useContext"
        onClick={() => {
          navigate("/useContext");
        }}
      />
      <ButtonToNavigate
        label="useReducer"
        onClick={() => {
          navigate("/useReducer");
        }}
      />
      <ButtonToNavigate
        label="useCallback"
        onClick={() => {
          navigate("/useCallback");
        }}
      />
      <ButtonToNavigate
        label="useMemo"
        onClick={() => {
          navigate("/useMemo");
        }}
      />
    </Box>
  );
}
