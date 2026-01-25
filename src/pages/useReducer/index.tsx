import { Box, Typography, Button } from "@mui/material";
import BackToHome from "../../components/BackToHome";
import { useReducer } from "react";

const reducer = (
  state: { count: number; showText: boolean },
  action: { type: string },
) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "showText":
      return { ...state, showText: !state.showText };
    default:
      return state;
  }
};

export default function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  const handleClick = () => {
    dispatch({ type: "INCREMENT" });
    dispatch({ type: "showText" });
  };

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
          Em vez de atualizar estados de forma dispersa com vários setState,
          toda a lógica de mudança fica centralizada em um reducer, que recebe
          uma ação (action) e decide como o estado será atualizado. Isso torna o
          fluxo de estados mais previsível, fácil de manter e de debugar,
          especialmente em cenários como carregamento, sucesso e erro de dados.
        </Typography>

        <Typography color="background.default" variant="h6" sx={{ mb: 3 }}>
          Exemplo abaixo:
        </Typography>

        <Typography color="background.default" variant="h6" sx={{ mb: 3 }}>
          {state.count}
        </Typography>

        <Typography color="background.default" variant="h6" sx={{ mb: 3 }}>
          {state.showText ? "Texto visível" : "Texto oculto"}
        </Typography>
        <Button variant="contained" onClick={handleClick}>
          TESTE
        </Button>
      </Box>
    </Box>
  );
}
