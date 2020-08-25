import { useState } from "react";

import Layout from "../components/Layout";
import Home from "../components/Home";
import Movies from "../components/Movies";

export default function IndexPage() {
  const [start, changeStart] = useState(false);

  return (
    <Layout>
      {start ? (
        <Movies />
      ) : (
        <Home changeStart={() => changeStart(true)} started={start} />
      )}
    </Layout>
  );
}
