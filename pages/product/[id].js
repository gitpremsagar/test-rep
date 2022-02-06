import { useRouter } from "next/router";
import React from "react";

export default function Product() {
  const router = useRouter();
  const id = router.query.id;
  return <div>this is for specific id = {id}</div>;
}
