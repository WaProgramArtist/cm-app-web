import { toast } from "react-toastify";
import styled from "styled-components";
import React from "react";

export const Message = styled.span`
  font-family: ${(props) => props.theme.font};
  font-size: 16px;
  font-weight: 400;
`;

export const Success = (message) => {
  toast.success(<Message>{message}</Message>, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const Error = (message) => {
    toast.error(<Message>{message}</Message>, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  

  export const Info = (message) => {
    toast.info(<Message>{message}</Message>, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  export const Warning = (message) => {
    toast.warning(<Message>{message}</Message>, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  