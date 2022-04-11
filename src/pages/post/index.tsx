import React from "react";
import Box from "@mui/material/Box";

 
const Showpost=()=>{
    const DisplayPost = (props) => {
        return (
          <div>
            <Box
              sx={{
                width: 300,
                height: 300,
              }}
            >
              {props.item.map((item) => (
                <div>
                <p key={item.id}><h2>{item.titlename}</h2></p>
                <p key={item.id}>{item.postname}</p>
                </div>
              ))}
            </Box>
          </div>
        );
      };
      return(
          <DisplayPost item ={bloglist} />
      )

}
export default Showpost;