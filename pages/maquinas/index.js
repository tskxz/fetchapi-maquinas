import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const API_URL = process.env.NEXT_PUBLIC_API_URL + '/maquina';
const BEARER_TOKEN = process.env.API_BEARER_TOKEN;

export async function getServerSideProps(){
  const res = await fetch(API_URL, {
    headers: {
      'Authorization': `Bearer ${BEARER_TOKEN}`,
      'Content-Type': 'application/json'
    }
  });
  if(!res.ok){
    throw new Error(`Failed to fetch data: ${res.status}`)
  }
  const { data }= await res.json();

  const filteredData = data.map(item=>({
    nome: item.nome,
    descricao: item.descricao
  }));

  return {
    props: { data: filteredData }
  };
}
export default function Maquina({data}) {
  
  
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
  <h1 className={styles.title}>
    Máquinas <Link href="/maquinas">;)</Link>
  </h1>
  <p className={styles.description}>
    <Link href="/">Página principal</Link>
  </p>

  <div className={styles.grid}>
    {data.map((item, index) => (
      <div key={index} className={styles.card}>
        <h3>{item.nome}</h3>
        <p>{item.descricao}</p>
      </div>
    ))}
  </div>

</main>


      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
