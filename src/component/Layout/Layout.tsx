import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="bg-gray-500">layout</header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
