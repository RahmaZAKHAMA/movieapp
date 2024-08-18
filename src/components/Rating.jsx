import React, { useState } from "react";
import { Flex, Rate } from "antd";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const Rating = ({ ratingInput, setratingInput, isRating }) => {
  // const [value, setValue] = useState(3);
  return (
    <Flex gap="middle" vertical>
        {isRating?
      <Rate disabled onChange={setratingInput} value={ratingInput} />:
       <Rate tooltips={desc} onChange={setratingInput} value={ratingInput} />
        }
    </Flex>
  );
};

export default Rating;
