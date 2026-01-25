import { useState, useMemo } from "react";
import { Button, Box, Typography } from "@mui/material";
import BackToHome from "../../components/BackToHome";
import { largeData } from "./largeData";

export default function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [items] = useState(largeData);

  function increment() {
    setCount(count + 1);
  }

  const selectedItem = useMemo(() => {
    console.log("recalculado");
    return items.find((item) => item.isActive);
  }, [items]);

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
          useMemo
        </Typography>

        <Typography color="background.default" variant="h6" sx={{ mb: 3 }}>
          Hook que armazena valores entre as renderizacoes, evitando recálculos
          desnecessários, no qual o useMemo é recomendado para calculos ou
          valores matematicos enquanto o useCallback é mais puxado para funções.
        </Typography>

        <Typography color="background.default" variant="h6" sx={{ mb: 3 }}>
          Exemplo abaixo há um valor muito grande sendo renderizado, com o usememo, o valor não é recriado a cada renderização, evitando recálculos desnecessários :
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

          <Typography color="background.default" variant="h4">
            {selectedItem?.id}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
