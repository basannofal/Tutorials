import Link from "next/link";
import React from "react";

const index = () => {
  
  return (
    <>
      <h1 style={{ fontSize: 24, fontWeight: "bold" }}>Home page </h1> <br />
      <Link
        href={"/about"}
        style={{ color: "blue", textDecoration: "underline" }}
      >
        About Page
      </Link>

      <h2> how to call Api in next js </h2>
      <p>fist create your api name js file like i want to add member then first create member.js file inside api folder  and write following code for access data </p>
      <p>and call using this type http://localhost:3000/api/member</p>
      
    </>
  );
};

export default index;
