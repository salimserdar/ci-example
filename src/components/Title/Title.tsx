"use client";
import React from "react";

type TitleProps = {
  title: string;
};

const Title: React.FC<TitleProps> = ({ title }) => {
  return <div data-testid="title">{title}</div>;
};

export default Title;
