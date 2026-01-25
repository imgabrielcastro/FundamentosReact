import { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import BackToHome from "../../components/BackToHome";

export default function UseStateExample() {
  const [count, setCount] = useState(0);
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
          useState
        </Typography>

        <Typography color="background.default" variant="h6" sx={{ mb: 3 }}>
          O useState cria um estado local no componente para armazenar valores.
          Sempre que a função de atualização do estado é chamada, o React agenda
          uma nova renderização, recalcula o componente e atualiza a interface
          conforme as mudanças necessárias.
        </Typography>

        <Typography color="background.default" variant="h6" sx={{ mb: 3 }}>
          Exemplo abaixo:
        </Typography>

        <Box sx={{ mb: 3, gap: 2, display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              if (count === 0) {
                alert("Não é possível subtrair valor abaixo de 0");
                return;
              }
              setCount((prev) => prev - 1);
            }}
          >
            Subtrair valor
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setCount((prev) => prev + 1);
            }}
          >
            Adicionar valor
          </Button>
        </Box>
        <Box sx={{ textAlign: "center", gap: 2 }}>
          <Typography color="background.default" variant="h4">
            {count}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
