'use client'

import { Fragment } from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CiCircleChevRight,
  CiHome
} from "react-icons/ci";
import styles from "./Sidebar.module.css";
import { menuItem } from "../../../data/sidebar";
import Image from "next/image";

const username = [
  {
    username: "วินัย โตเขียว",
    role: "user"
  }
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <nav className={`${styles.sidebar} ${isOpen ? styles.open : styles.close}`}>
        <header>
          <div className={styles.imageText}>
            <span className={styles.image}>
              <Image src="/public/next.svg" alt="logo" width={50} height={50} />
            </span>
            <div className={`${styles.text} ${styles.logoText}`}>
              <span className={styles.name}>ระบบเบิกวัสดุสำนักงาน</span>
              <span className={styles.profession}>สำนักงาน</span>
            </div>
          </div>
          <CiCircleChevRight className={styles.toggle} onClick={toggle} />
        </header>
        <div className={styles.menuBar}>
          <div className={styles.menu}>
            <ul className={styles.menuLinks}>
              {menuItem.map((item, index) => (
                console.log(item.role, username[0].role),
                (item.role.includes(username[0].role)  || item.role === "all") && (
                  <li key={index} className={styles.navLink}>
                    <Link href={item.path} legacyBehavior>
                      <a>
                        {item.icon}
                        <span className={styles.navText}>{item.title}</span>
                      </a>
                    </Link>
                  </li>
                )
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}