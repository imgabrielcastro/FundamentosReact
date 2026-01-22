import { Button } from "@mui/material";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

export default function ButtonToNavigate({ label, onClick }: ButtonProps) {
  return (
    <Button variant="contained" color="secondary" onClick={onClick}>
      {label}
    </Button>
  );
}
