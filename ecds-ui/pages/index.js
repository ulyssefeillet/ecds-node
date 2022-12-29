import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import ArticlesTable from "./ArticlesTable";
import Hero from "./Hero";

export default function Home() {
  const [dataResponse, setdataResponse] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = `http://localhost:3000/api/getdata`;
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      console.log(res);
      setdataResponse(res.articles);
    }
    getPageData();
  }, []);
  return (
    <div className={styles.container}>
      <div className={`${styles.featuresWrapper} center`}>
          <div className={styles.featuresHeading}>
            <p>Header</p>
          </div>
        <Hero></Hero>
        <div className={styles.tableAligned}>
          <ArticlesTable articles={dataResponse}></ArticlesTable>
        </div>
      </div>
    </div>
  );
}
