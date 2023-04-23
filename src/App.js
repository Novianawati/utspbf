import logo from './logo.svg';
import './App.css';
import styles from './Home.module.css';

function App() {
  return (
    <div className="App">
      <main>
      <h1 className={styles.title}>
          Welcome to <a>Indonesian Library</a>
      </h1>
      <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h3>Koleksi &rarr;</h3>
            <p>Pendataan koleksi buku</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Riwayat peminjaman &rarr;</h3>
            <p>Riwayat peminjaman buku</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h3>Keanggotaan &rarr;</h3>
            <p>Pengelolaan data keanggotaan perpustakaan</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h3>Tamu &rarr;</h3>
            <p>Pengelolaan data tamu perpustakaan</p>
          </a>
          </div>
      </main>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          UTS Pemograman Berbasis Framework : Nesa itfirul lail & Novianawati
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
          height: 55px;
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
          color: #f7f7f7;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

export default App;
