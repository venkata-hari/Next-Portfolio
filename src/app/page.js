// Use client-side indication for clarity and import useEffect
"use client";
import { useEffect, useState } from "react"; // Added useEffect to the import
import PageBox from "@/components/common/PageBox";
import NavBar from "@/components/navbar/NavBar";
import HomeSection1 from "@/components/home/Section1";
import HomeSection2 from "@/components/home/Section2";
import HomeSection4 from "@/components/home/Section4";
import HomeSection5 from "@/components/home/Section5";
import HomeSection6 from "@/components/home/Section6";
import Head from "next/head";
export default function Home() {
  const [current, setCurrent] = useState("");
 
  return (
    <PageBox>
      <Head>
        <title>Venkata Hari</title>
        <meta name="description" content="Fullstack developer based in India" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar current={current} />
      <HomeSection1 current={current} setCurrent={setCurrent} />
      <HomeSection4 current={current} setCurrent={setCurrent} />
      <HomeSection2 current={current} setCurrent={setCurrent} />
      <HomeSection5 current={current} setCurrent={setCurrent} />
      <HomeSection6 current={current} setCurrent={setCurrent} />
    </PageBox>
  );
}
