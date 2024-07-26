"use client";
import styles from "./Header.module.css";
import Link from "next/link";
import { useState } from "react";
import { List, XCircle } from "@phosphor-icons/react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div id={styles.header} className={open ? styles.mobileHeader : ""}>
      <div id={open ? styles.closeHeading : ""}>
        <Link href="/" className={styles.navLink}>
          <div
            id={styles.title}
            className={`${styles.navLink} ${open ? styles.mobileTitle : ""}`}
          >
            LifeLift
          </div>
        </Link>
        <List
          size={32}
          weight="bold"
          onClick={() => setOpen(true)}
          id={styles.icon}
          className={open ? styles.hidden : styles.iconVisible}
        />
      </div>

      <div>
        <XCircle
          size={32}
          weight="bold"
          id={styles.icon}
          onClick={() => setOpen(false)}
          className={!open ? styles.hidden : styles.iconVisible}
        />
        <ul className={styles.navList} id={open ? styles.mobileOpen : ""}>
          <li className={`${styles.navListItem}`}>
            <Link href="/products">
              <div className={styles.navLink}>About Us</div>
            </Link>
          </li>
          <li className={`${styles.navListItem}`}>
            <Link href="/reviews">
              <div className={styles.navLink}>Learn More</div>
            </Link>
          </li>
          <li className={`${styles.navListItem}`}>
            <Link href="/forum">
              <div className={styles.navLink}>Our Workshops</div>
            </Link>
          </li>
          <li className={`${styles.navListItem}`}>
            <Link href="/forum">
              <div className={styles.navLink}>Our Community</div>
            </Link>
          </li>
          <li className={`${styles.navListItem}`} id={styles.lastItem}>
            <Link href="/contact">
              <div id={styles.contactBtn}>Contact Us</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
