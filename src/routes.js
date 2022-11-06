// import
import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import BaiGiang from "views/Dashboard/BaiGiang";
import TaiLieuHoc from "views/Dashboard/TaiLieuHoc";
import BaiTap from "views/Dashboard/BaiTap";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon
} from "components/Icons/Icons";
import BaiKiemTra from "views/Dashboard/BaiKiemTra";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Trang chủ",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Thành viên",
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/baigiang",
    name: "Bài giảng",
    icon: <StatsIcon color="inherit" />,
    component: BaiGiang,
    layout: "/admin"
  },
  {
    path: "/tailieu",
    name: "Tài liệu",
    icon: <StatsIcon color="inherit" />,
    component: TaiLieuHoc,
    layout: "/admin"
  },
  {
    path: "/baitap",
    name: "Bài tập",
    icon: <StatsIcon color="inherit" />,
    component: BaiTap,
    layout: "/admin"
  },
  {
    path: "/baikt",
    name: "Bài kiểm tra",
    icon: <StatsIcon color="inherit" />,
    component: BaiKiemTra,
    layout: "/admin"
  },

  {
    name: "ACCOUNT PAGES",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin"
      },
      {
        path: "/signin",
        name: "Sign In",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth"
      },
      {
        path: "/signup",
        name: "Sign Up",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth"
      }
    ]
  }
];
export default dashRoutes;
