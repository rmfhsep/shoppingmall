import { Outlet } from "react-router-dom";

export default function About() {
  return (
    <>
      <div>어바웃</div> <Outlet></Outlet>{" "}
    </>
  );
}
