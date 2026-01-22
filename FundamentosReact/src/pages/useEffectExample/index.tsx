import { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import BackToHome from "../../components/BackToHome";

export default function UseEffectExample() {
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
          useEffect
        </Typography>

        <Typography color="background.default" variant="h6" sx={{ mb: 3 }}>
          O useEffect permite executar efeitos colaterais após a renderização do
          componente. Seu comportamento depende do array do final dele: sem
          dependências, o efeito roda após toda renderização ou com um array
          vazio, roda apenas na montagem, já com dependências definidas, roda
          quando alguma delas muda.
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
