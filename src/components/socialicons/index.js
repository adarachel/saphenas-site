import React from "react";
import "./style.css";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {/* {socialprofils.threads && (
          <li>
            <a href={socialprofils.threads}>
              <FaThreads />
            </a>
          </li>
        )} */}
        {socialprofils.instagram && (
          <li>
            <a href={socialprofils.instagram}>
              <FaInstagram />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
        {/* {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )} */}
        {/* {socialprofils.youtube && (
          <li>
            <a href={socialprofils.youtube}>
              <FaYoutube />
            </a>
          </li>
        )} */}
        {socialprofils.whatsapp && (
          <li>
            <a href={socialprofils.whatsapp}>
              <FaWhatsapp />
            </a>
          </li>
        )}
      </ul>
      <p style={{ fontFamily: 'Inter, sans-serif'}}>Follow Us</p>
    </div>
  );
};