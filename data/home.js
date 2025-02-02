import { CiUser, CiMemoPad, CiLogout } from "react-icons/ci";


export const  datamenu = () => {
    return [
      {
        name: "Profile",
        icon: <CiUser />,
        path: "/profile",
      },
      {
        name: "ระบบเบิกวัสดุสำนักงาน",
        icon: <CiMemoPad />,
        path: "/material",
      },
      {
        name: "ระบบยืมครุภัณฑ์",
        icon: <CiMemoPad />,
        path: "/kruphan",
      },
      {
        name: "ระบบจัดการ",
        icon: <CiMemoPad />,
        path: "/manage",
      },
      {
        name: "ระบบจัดการบุคลากร",
        icon: <CiMemoPad />,
        path: "/management",
      },
      {
        name: "ออกจากระบบ",
        icon: <CiLogout />,
        path: "#",
      },
    ];
  };