import { Button } from "@mui/material";
import type { SxProps } from "@mui/material";
import type { Theme } from "@mui/material/styles";

type ButtonProps = {
  label: string;
  onClick: () => void;
  sx?: SxProps<Theme>;
};

export default function ButtonToNavigate({ label, onClick, sx }: ButtonProps) {
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={onClick}
      sx={{ minWidth: "200px", ...sx }}
    >
      {label}
    </Button>
  );
}
