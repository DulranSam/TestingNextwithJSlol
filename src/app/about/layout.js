import React from "react";
import styles from "./styles.module.css";
import {Metadata} from "next";



export default function AboutLayout({ children }) {
  return (
    <div className={styles.k}>
      <nav className={styles.main}>About Navbar</nav>
      <main>{children}</main>
    
    </div>
  );
}
