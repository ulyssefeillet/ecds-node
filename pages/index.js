import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import ArticlesTable from "./ArticlesTable";
import Hero from "./Hero";

export default function Home() {
  const [dataResponse, setdataResponse] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = `http://ecds-env.eba-9p4pa5fy.eu-west-3.elasticbeanstalk.com/api/getdata`;
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
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
