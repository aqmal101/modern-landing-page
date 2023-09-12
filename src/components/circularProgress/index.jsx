import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

function CircularProgressBar() {
  return (
    <div className="flex flex-col items-center">
      <CircularProgress
        variant="determinate"
        value={65}
        size={200} // Ukuran lingkaran
        thickness={1} // Ketebalan lingkaran
        color="warning" // Warna lingkaran
      >
        <Typography
          variant="caption"
          sx={{ color: "black", fontWeight: "bold", fontSize: "50px" }}
        >
          50% {/* Teks di dalam lingkaran */}
        </Typography>
      </CircularProgress>
    </div>
  );
}

export default CircularProgressBar;
