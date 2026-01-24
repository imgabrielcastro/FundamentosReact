import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import UseStateExample from "./pages/useStateExample";
import UseEffectExample from "./pages/useEffectExample";
import UseRefExample from "./pages/useRefExample";
import UseContextExample from "./pages/useContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import { NameProvider } from "./contexts/NameContext";
import UseReducerExample from "./pages/useReducer";
import UseCallbackExample from "./pages/useCallback";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NameProvider>
      <Router>
        <CssBaseline />
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/useState" element={<UseStateExample />} />
            <Route path="/useEffect" element={<UseEffectExample />} />
            <Route path="/useRef" element={<UseRefExample />} />
            <Route path="/useContext" element={<UseContextExample />} />
            <Route path="/useReducer" element={<UseReducerExample />} />
            <Route path="/useCallback" element={<UseCallbackExample />} />
          </Routes>
        </Box>
      </Router>
    </NameProvider>
  </StrictMode>,
);
