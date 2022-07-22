import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Exercisevideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) {
    return "Loading...";
  }

  return (
    <Box
      sx={{
        marginTop: { lg: "200px", xs: "20px" },
      }}
      p="20px"
    >
      <Typography variant="h3">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        flexWrap="wrap"
        alignItems="center"
        mt="50px"
        backgroundColor="#fff2db"
        p="20px"
        justifyContent="center"
        sx={{ flexDirection: "row", gap: { lg: "110px", xs: "10px" } }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`
          https://www.youtube.com/watch?v=${item.video.videoId}
          `}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              height="80%"
              width="auto"
              style={{ objectFit: "cover" }}
            />
            <Box style={{ padding: "5px" }}>
              <Typography variant="h6" color="#000">
                {item.video.title}
              </Typography>
              <Typography variant="h7" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default Exercisevideos;