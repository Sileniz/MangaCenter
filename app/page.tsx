'use client'
import CardManga from "./components/cardManga/cardManga";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { MangaData } from "./lib/interface";
import 'dotenv/config'

export default function Mangas() {
  const [data, setData] = useState<MangaData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      let api = process.env.NEXT_PUBLIC_PROJECT_API
      if(!api) throw new Error('Sem dados da API')
      const data = await fetch(api)
      if(data.ok) await data.json().then((data) => {
        const response = data.data
        response.sort((a: MangaData, b: MangaData) => {
          if(a.status == 'Online' && b.status !== 'Online') return -1
          if(a.status !== 'Online' && b.status == 'Online') return 1
          return 0
        })
        setData(response)
      })
    };  
    fetchData()
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{data.length === 0 ? 'Carregando...' : 'Manga / Center'}</h1>
      <section className={styles.section}>
      <div className={styles.divMangas}>
        {data.map((item: MangaData) => {
          return (
            <CardManga
              on={item.status}
              nsfw={false}
              title={item.name}
              link={item.site}
              key={item.name}
            />
          );
        })}
      </div>
      </section>
    </main>
  );
}
