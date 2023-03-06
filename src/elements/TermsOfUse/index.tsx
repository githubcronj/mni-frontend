import React from "react";
import "./TermsOfUse.css";
import { Box, Typography } from "@mui/material";

const TermsOfUse = () => {
  return (
    <Box
      className="max-width"
      pt={3}
      sx={{
        mx: { xs: 2, sm: 0, md: 10 },
      }}
    >
      <Box mb={2} className='td-media-query'>
        <Typography
          variant="subtitle2"
          color="#01010159"
          component="span"
          pr={1}
        >
          HOME
        </Typography>
        <Typography variant="subtitle2" color="#01010159" component="span">
          &gt;
        </Typography>
      </Box>
      <Typography variant="h4" sx=
      {{ fontFamily: "light" ,color:'black',fontSize:'45px',fontWeight:'600' ,
        mx: { xs: 0, sm: 5, md: 0 },
      }}>Terms of use</Typography>

      <Box
        mt={2}
        sx={{
          mx: { xs: 0, sm: 5, md: 0 },
        }}
      >
        <Typography mb={2.8} className="typography-style-text"
         >
        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>
        <Typography className="typography-style-text"mb={2.8}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </Typography>
        <Typography className="typography-style-text td-text-display-none" mb={2.8}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </Typography>
        <Typography className="typography-style-text td-text-display-none" mb={6}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </Typography>
      </Box>
    </Box>
  );
};

export default TermsOfUse;
