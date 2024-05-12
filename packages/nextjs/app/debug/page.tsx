import { DebugContracts } from "./_components/DebugContracts";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Oly - Construindo o Futuro de Atletas Olimpicos",
  description: "Construindo o Futuro de Atletas Olimpicos",
});

const Debug: NextPage = () => {
  return (
    <>
      <DebugContracts />
      <div className="text-center mt-8 bg-secondary p-10"></div>
    </>
  );
};

export default Debug;
