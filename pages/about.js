import Head from "next/head";

import Seo from "./../components/Seo";

export default function About() {
  return (
    <div>
      <Seo title="about" />
      <h1 className="active">about page</h1>
    </div>
  );
}
