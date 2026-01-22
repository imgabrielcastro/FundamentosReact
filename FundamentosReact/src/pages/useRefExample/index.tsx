import { useRef } from "react";
import { Button, Box, Typography, TextField } from "@mui/material";
import BackToHome from "../../components/BackToHome";

export default function UseRefExample() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFocus() {
    inputRef.current?.focus();
  }

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
          O useRef funciona de forma diferente do useState. Enquanto o useState
          armazena valores que, ao serem atualizados, causam uma nova
          renderização do componente e refletem mudanças na tela, o useRef
          mantém valores persistentes entre renderizações sem disparar
          re-render, sendo útil para armazenar referências ou manipular
          elementos do DOM sem que o React precise renderizar novamente.
        </Typography>

        <Typography color="background.default" variant="h6" sx={{ mb: 3 }}>
          Exemplo abaixo:
        </Typography>

        <Box sx={{ mb: 3, gap: 2, display: "flex", justifyContent: "center" }}>
          <TextField
            inputRef={inputRef}
            label="Digite algo"
            type="text"
            variant="filled"
            color="secondary"
            sx={{
              '& .MuiFilledInput-root': {
                backgroundColor: 'background.default',
                '&:hover fieldset': {
                  borderColor: 'secondary',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'text.primary',
              },
              '& .MuiOutlinedInput-input': {
                color: 'text.primary',
              },
            }}
          />
          <Button variant="contained" onClick={handleFocus} color="secondary">
            Focar input
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
