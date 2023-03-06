import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import mainImg from "./img/MainImg.png";
import './TrendingStoryView.css'
const TrendingStoryView = () => {
  
  return (
    <Box sx={{
      mx:{xs:2,sm: 0 ,md:10}
    }}
    mt={13}>
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
      <Box>
        <img src={mainImg}  style={{ width: "100%", height: "500px" }} className="img-hight-change" />
      </Box>
      <Stack  className='position-trending-date' id="mob-view-block" direction="row" pt={4}  sx={{mx:{xs:0,sm:5, md:0}}} justifyContent= "space-between">
        <Typography
          variant="h2"
          component="span"
          sx={{ fontFamily: "bold", fontSize: "42px" }}
        >
          Heading Name
        </Typography>
        <Typography
        className="mob-viwe-div"
          component="span"
          sx={{
            fontSize: "16px",
            fonFamily: "regular",
            color: "#010101",
            opacity: "0.75",
          }}
        >
          16 March 2022
        </Typography>
      </Stack>

      <Stack direction="row" className='position-trending-date' spacing={2} pt={1.2} sx={{ mx:{xs:0,sm:5, md:0}
}}
>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: "16px",
          fonFamily: "book",
          color: "#010101",
          opacity: "0.6",
        }}
      >
        Times Of India
      </Typography>
      <Typography
          sx={{
            fontSize: "16px",
            fonFamily: "regular",
            color: "#010101",
            opacity: "0.75",
            display:'flex',
          }}
          id='date-mob-display'
        >
          16 March 2022
        </Typography>
      </Stack>
      <Box mt={3} sx={{

    mx:{xs:0,sm:5, md:0}
  }}>
        <Typography className="typography-style-text" mb={2.5}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Typography>
        <Typography mb={2.5} className="td-mob-text-display-none typography-style-text">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words.
        </Typography>
        <Typography mb={2.5} className='td-text-display-none td-mob-text-display-none typography-style-text'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Typography>
        <Typography pb={2.5} className='td-text-display-none td-mob-text-display-none typography-style-text'>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words.
        </Typography>
        <Typography pb={2.5} className='td-text-display-none td-mob-text-display-none typography-style-text'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Typography>
        <Typography pb={10} className='td-text-display-none td-mob-text-display-none typography-style-text'>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words.
        </Typography>
      </Box>
    </Box>
  );
};

export default TrendingStoryView;
