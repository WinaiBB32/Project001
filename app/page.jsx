'use client'

import { Fragment } from "react";
import Link from 'next/link';
import  { datamenu} from "../data/home";

export default function Home() {
  const menuItems = datamenu();
  return (
   <Fragment>
      <div className="content_menu">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.path}>
            <div className="con_crad">
              <div className="card">
                <div className="menu-items">
                  <div className="icons">
                    {item.icon}
                  </div>
                </div>
              </div>
              <span>{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
   </Fragment>
  );
}
