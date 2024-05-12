"use client";

import { useEffect, useState } from "react";
import Link from "next/link.js";
import { readJson } from "../../services/util.js";
import type { NextPage } from "next";
import { formatEther } from "viem";
import { useAccount } from "wagmi";
import { IntegerInput } from "~~/components/scaffold-eth";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth/useScaffoldReadContract";

const AuctionCrypto: NextPage = () => {
  const account = useAccount();

  const smartContractName = "AuctionCrypto";

  const showTokenId = false;

  const [tokensAvailable, setTokensAvailable] = useState<
    {
      tokenId: any;
      name: any;
      initValue: any;
      metadata: any;
      available: any;
      dateCheckIn: any;
      image: any;
      attributes: any;
    }[]
  >([]);

  const { data: tokenBalance } = useScaffoldReadContract({
    contractName: smartContractName,
    functionName: "balanceOf",
    args: [account?.address ?? ""],
  });

  const {
    data: getOwnerTokens,
    isLoading,
    error,
  } = useScaffoldReadContract({
    contractName: smartContractName,
    functionName: "getAllTokens",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isLoading) {
          return <span className="loading loading-spinner loading-lg"></span>;
        }
        if (getOwnerTokens) {
          const tokensAvailable = [];
          for (let indx = 0; indx < getOwnerTokens.length; indx++) {
            const metadataJson = await readJson(getOwnerTokens[indx].metadata);
            const item = {
              tokenId: getOwnerTokens[indx].tokenId,
              name: getOwnerTokens[indx].name,
              initValue: getOwnerTokens[indx].initValue,
              metadata: getOwnerTokens[indx].metadata,
              available: getOwnerTokens[indx].available,
              dateCheckIn: getOwnerTokens[indx].dateCheckIn,
              image: metadataJson.image, // Atribui a imagem do metadataJson
              attributes: metadataJson.attributes, // Atribui os atributos do metadataJson
            };

            if (getOwnerTokens[indx].available) tokensAvailable.push(item);
          }
          setTokensAvailable(tokensAvailable);
        }
      } catch (error) {
        console.error("Erro ao obter tokens do proprietário:", error);
      }
    };
    fetchData();
  }, [getOwnerTokens, isLoading, error]);

  const handleOpenDetail = (tokenIdNewPage: string) => {
    localStorage.setItem("tokenIdBefore", tokenIdNewPage);
    window.location.replace("/detail?tokenId");
  };

  return (
    <div className="flex items-center flex-col flex-grow pt-5">
      <div className="px-5">
        <div className="flex justify-center items-center space-x-2">
          <span> Numero De Tokens: {String(tokenBalance) || "0"}</span>
          <br />
        </div>
      </div>
      <div>
        <div className="flex-1 card bg-base-100 shadow-xl"></div>

        <div className="px-12">
          <hr style={{ width: "100%", borderTop: "1px solid #ccc", margin: "10px 0" }} />
        </div>
        <div className="px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 justify-items-stretch">
          {tokensAvailable?.map((token, index) => (
            <div className="flex flex-col justify-between card bg-base-100 shadow-xl">
              <div className="card-body">
                <p key={index}>
                  {showTokenId && (
                    <IntegerInput
                      disabled
                      name="tokenIdCheckIn"
                      value={token.tokenId}
                      onChange={e => {
                        console.log(e);
                      }}
                    />
                  )}
                  <h4 className="card-title">{token.name}</h4>
                  <Link href="" onClick={() => handleOpenDetail(token.tokenId || "0" as string)}>
                    <img src={String(token.image) || "0"} className="w-25 h-25" alt={String(token.image) || "0"} />
                  </Link>

                  <div className="card-actions justify-center">
                    <hr style={{ width: "100%", borderTop: "1px solid #ccc", margin: "10px 0" }} />

                    <span className="text-xs"> {formatEther(token.initValue)} ETH</span>
                  </div>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuctionCrypto;
