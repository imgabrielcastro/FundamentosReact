import { Button, Box, Typography } from "@mui/material";
import BackToHome from "../../components/BackToHome";
import { useName } from "../../contexts/NameContext";

export default function UseContextExample() {
  const { nome } = useName();

  function ChildrenOne() {
    return <ChildrenTwo />;
  }

  function ChildrenTwo() {
    const { setNome } = useName();
    return (
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          setNome("Gabriel");
        }}
      >
        Alterar nome
      </Button>
    );
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
          useContext
        </Typography>

        <Typography color="background.default" variant="h6" sx={{ mb: 3 }}>
          O useContext é um hook usado para compartilhar informações entre
          vários componentes sem precisar passar props de pai para filho o tempo
          todo (prop drilling). F Esses dados ficam disponíveis para todos os
          componentes dentro do Provider e não devem mudar com muita frequência,
          porque toda mudança faz os componentes que usam o Context
          re-renderizarem.
        </Typography>

        <Box>
          <Typography color="background.default" variant="h6" sx={{ mb: 3 }}>
            Nome atual: {nome || "Nenhum nome definido"}
          </Typography>
          <ChildrenOne />
        </Box>
      </Box>
    </Box>
  );
}
