import React from "react";
import { Box, useTheme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const PhotoWithOverlayIcon = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative", // Necessary for the icon to overlay properly
        width: 300,
        height: 200,
        border: "1px solid #ccc", // Optional border to visualize the photo container
        overflow: "hidden",
        borderRadius: 4, // Optional rounded corners for the photo
      }}
    >
      <img
        src="https://placehold.co/600x400"
        alt="Example"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
          boxShadow: 3,
          height: 24,
          width: 24,
          backgroundColor: theme.palette.background.paper,
          borderRadius: "50%",
        }}
      >
        <CheckCircleIcon color="success" fontSize="medium" />
      </Box>
    </Box>
  );
};

const App = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <PhotoWithOverlayIcon />
    </div>
  );
};

export default App;
