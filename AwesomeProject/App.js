// import { lazy } from "react";
// import { Routes, Route } from "react-router-dom";

import Background from "./src/components/background/Background";
import SignIn from "./src/pages/SignIn";

export default function App() {
  // const SignIn = lazy(() => import("./src/pages/SignIn"));
  return <SignIn></SignIn>;
}
