import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import UseStateExample from "./pages/useStateExample";
import UseEffectExample from "./pages/useEffectExample";
import UseRefExample from "./pages/useRefExample";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useState" element={<UseStateExample />} />
          <Route path="/useEffect" element={<UseEffectExample />} />
          <Route path="/useRef" element={<UseRefExample />} />
        </Routes>
      </Box>
    </Router>
  </StrictMode>,
);
