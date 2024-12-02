import { Box, Button, CircularProgress } from "@mui/material";
import { green } from "@mui/material/colors";
import { useState } from "react";

export const LoadingActionButton: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
    position: "relative", // ボタン内のCircularProgressの位置調整のため
    transition: "all 0.3s ease", // スムーズな状態遷移
    // ローディング中は少し暗く
    ...(loading && {
      opacity: 0.8,
    }),
  };

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 2000);
    }
  };

  return (
    <Box>
      <Button
        variant="contained"
        sx={buttonSx}
        disabled={loading}
        onClick={handleButtonClick}
      >
        Click me
      </Button>
      {loading && (
        <CircularProgress
          size={24}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: "-12px",
            marginLeft: "-12px",
          }}
        />
      )}
    </Box>
  );
};
