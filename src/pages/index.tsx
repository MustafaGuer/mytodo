import Head from "next/head";
import { Inter } from "next/font/google";
import NewTodo from "@/components/NewTodo";
import Todos from "@/components/Todos";


const inter = Inter({ subsets: ["latin"] });

const Home: React.FC = () => {
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="musg-p-10">
        <NewTodo />
        <Todos />
      </main>
    </>
  );
};
export default Home;


