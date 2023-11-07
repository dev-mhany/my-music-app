// MusicReveal.jsx
import React, { useState } from "react";
import Button from "@mui/material-next/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./MusicReveal.css";
import myAudio from "./video.mp3"; // Correctly importing the MP3 file

// Define the styles for the modal box
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
};
const MusicReveal = () => {
  const [open, setOpen] = useState(false);
  const [showText, setShowText] = useState(false); // New state for additional text visibility
  const [audio] = useState(new Audio(myAudio));

  const handleOpen = () => {
    setOpen(true);
    audio.play();
  };

  const handleClose = () => {
    setOpen(false);
    setShowText(true); // Update the showText state to true when modal is closed
  };

  return (
    <div className="body-bg">
      <div className="center-container">
        <Button
          size="large"
          variant="filled"
          onClick={handleOpen}
          className="press-me-button"
        >
          Press Me! 🎧
        </Button>
      </div>
      <>
        {showText && (
          <Typography variant="body1" className="content-wrapper" dir="rtl">
            يا أجمل ما في حياتي، يا اللي وجودك جنبي بيخلي الدنيا تبان أحلى. أنا
            كل ما بغمض عينيا، بلاقيكي أنتي قدامي، وكل لحظة بعيد عنك بتحسسني إن
            في حاجة ناقصاني.
            <br />
            بينا حاجات كتير، وضحكنا سوا، وبكينا كمان، وكل دقيقة منهم بحمد ربنا
            عليها.
            <br />
            أنا هنا علشان أقولك إن مفيش حاجة هتخليني أبعد عنك أبداً.
            <br />
            أنا مش قادر أتخيل حياتي من غيرك ولا حتى ثانية واحده. حضنك هو بيتي،
            وضحكتك هي النور اللي بينور حياتي.
            <br />
            أنا عايز أكون جنبك في كل خطوة وفي كل لحظة أحميكي وتكوني سبب سعادتي
            وتهوني عليا الدنيا.
            <br />
            حياتي من غيرك ملهاش معنى ولا هدف. ومهما كانت الظروف، أنا مستعد
            أواجهها معاكي، إيد في إيد. أنا بحبك أكتر من الدنيا دي كلها.
            <br />
            بحبك بكل ما فيا، ومش هينفع أبدًا أكون بعيد عنك.
            <br />
            بحبك يا مروة بنت خالد
          </Typography>
        )}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              I LOVE YOU MARWA 😘😍
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Feel the music! 🎶
            </Typography>
            <Button variant="outlined" onClick={handleClose} sx={{ mt: 2 }}>
              Close
            </Button>
          </Box>
        </Modal>
      </>
    </div>
  );
};

export default MusicReveal;
