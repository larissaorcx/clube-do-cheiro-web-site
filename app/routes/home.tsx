import type { Route } from "./+types/home";
import Banner from "../components/Banner/index.js";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Clube do Cheiro" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="w-lvw h-screen flex flex-col items-center justify-baseline">
      <section className="mt-10 w-full flex items-center justify-center mar">
        <Banner />
      </section>
      <section className="flex flex-col items-center justify-center px-4">
        <div className="w-lvw flex flex-col items-start justify-center ">
          <span className="text-3xl font-bold ml-20 mt-10 text-[#3d2a1d] w-full">
            Mais vendidos
          </span>
        </div>
      </section>
    </div>
  );
}
