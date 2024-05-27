import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import './Footer.css';


export default function Footer() {
    return (
      <>
        Copyright {getFullYear()} - {getFooterCopy()}
      </>
    )
}