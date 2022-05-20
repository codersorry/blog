import React from "react";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  return <h1>user details {router.query.id}</h1>;
}

export default Index;
