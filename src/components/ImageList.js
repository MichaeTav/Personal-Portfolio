import React from "react";
import { useRef, useState, useEffect } from "react";

import { Button, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ImageList = ({ imageList }) => {
  const images = imageList;
  const imageRef = useRef([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    imageRef.current = imageRef.current.slice(0, images.length);
  }, [images]);

  const scrollTo = (direction) => {
    let nextIndex;
    if (direction === "next") {
      nextIndex = currentIndex + 1;
      if (nextIndex === images.length) {
        nextIndex = 0;
      }
    } else {
      nextIndex = currentIndex - 1;
      if (nextIndex < 0) {
        nextIndex = images.length - 1;
      }
    }
    setCurrentIndex(nextIndex);
    imageRef.current[nextIndex].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <Stack direction="row" alignItems="center">
      <Button
        startIcon={<ArrowBackIosNewIcon />}
        onClick={(event) => {
          scrollTo("prev");
        }}
        style={{ maxHeight: "100px", minHeight: "100px" }}
      />
      <div className="imgContainer">
        <Stack direction="row">
          {images.map((image, i) => (
            <div>
              <img
                className="projImg"
                src={image}
                key={i}
                ref={(el) => (imageRef.current[i] = el)}
              />
            </div>
          ))}
        </Stack>
      </div>

      <Button
        endIcon={<ArrowForwardIosIcon />}
        onClick={(event) => {
          scrollTo("next");
        }}
        style={{ maxHeight: "100px", minHeight: "100px" }}
      />
    </Stack>
  );
};

const Image = () => {
  return (
    <div>
      <Stack></Stack>
    </div>
  );
};

export default ImageList;
