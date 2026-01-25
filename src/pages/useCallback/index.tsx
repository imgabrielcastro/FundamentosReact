import { useState, useCallback } from "react";
import { Button, Box, Typography } from "@mui/material";
import BackToHome from "../../components/BackToHome";

export default function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const increment = useCallback((): void => {
    setCount((prev) => prev + 1);
  }, []);

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
          useCallback
        </Typography>

        <Typography color="background.default" variant="h6" sx={{ mb: 3 }}>
          O useCallback é um hook que memoriza a referência de uma função
          evitando que ela seja recriada a cada renderização. Ele é útil
          principalmente quando essa função é passada como prop para componentes
          filhos memoizados, evitando re-renderizações desnecessárias causadas
          pela mudança de referência.
        </Typography>

        <Typography color="background.default" variant="h6" sx={{ mb: 3 }}>
          Exemplo abaixo:
        </Typography>

        <Box sx={{ mb: 3, gap: 2, display: "flex", justifyContent: "center" }}>
          <Button variant="contained" color="secondary" onClick={increment}>
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
