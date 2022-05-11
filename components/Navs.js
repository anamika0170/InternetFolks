import { Menu, Icon } from "antd";
import { useState } from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";
import {} from "@ant-design/icons";
import { Button, Drawer } from "antd";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";


const Navs = () => {

  return (
    <div className={styles.nav}>
      <div>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="/home"><Image src={logo} alt="loading..."/></Link>
          </li>
          <li className={styles.li}>
            <Link href="/features" ><a className={styles.link}>Features</a></Link>
          </li>
          <li className={styles.li}>
            <Link href="/pricing" ><a className={styles.link}>Pricing</a></Link>
          </li>
          <li className={styles.li}>
            <Link href="/resources" ><a className={styles.link}>Resources</a></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navs;
