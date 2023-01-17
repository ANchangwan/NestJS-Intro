import NavBar from "@/components/NavBar";

export default function Home({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
