"use client";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col grow pt-10">
        <div className="px-5 max-w-4xl">

          {/* HEADER */}
          <h1 className="text-center">
            <span className="block text-2xl mb-2">SpeedRunEthereum</span>
            <span className="block text-4xl font-bold">Challenge 05 — 🌽 Over-Collateralized Lending</span>
            <span className="block text-lg mt-2">
              Build a lending system where users deposit <strong>ETH</strong> as collateral and borrow 
              <strong> CORN</strong>, using a DEX-based price oracle and liquidation mechanics.
            </span>
          </h1>

          {/* CONNECTED WALLET */}
          <div className="flex justify-center items-center space-x-2 flex-col mt-6">
            <p className="my-2 font-medium text-lg">Connected Wallet:</p>
            <Address address={connectedAddress} />
          </div>

          {/* HERO IMAGE */}
          <div className="flex flex-col items-center justify-center mt-10">
            <Image
              src="/hero.png"
              width="727"
              height="231"
              alt="Challenge banner"
              className="rounded-xl border-4 border-primary"
            />
          </div>

          {/* CONTENT */}
          <div className="mt-10 space-y-6 text-lg">
            <p>
              This challenge implements a complete <strong>over-collateralized lending protocol </strong> 
              using ETH as collateral and CORN as the borrowed token.
            </p>

            <p>
              The <strong>CornDEX</strong> contract acts as both a swap DEX and a 
              <strong> price oracle</strong> — the ETH/CORN ratio determines collateral value.
              Manipulating this price is part of the learning experience.
            </p>

            <p className="font-semibold">🧱 System Components:</p>

            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>🌽 <strong>Corn</strong> — ERC20 token users borrow</li>
              <li>🔄 <strong>CornDEX</strong> — AMM DEX + price oracle</li>
              <li>💰 <strong>Lending</strong> — borrow/repay/liquidate logic</li>
              <li>📊 <strong>MovePrice</strong> — used to shift DEX ratios and change the reported price</li>
            </ul>

            <p className="font-semibold mt-6">📏 Protocol Risk Parameters:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Collateral ratio requirement: <strong>120%</strong></li>
              <li>Liquidation incentive: <strong>10%</strong></li>
            </ul>

            <p>
              If a borrower's collateral value falls below <strong>120%</strong> of their debt,
              anyone can liquidate their position and earn a <strong>10% reward</strong>.
            </p>

            <p className="font-semibold mt-6">Your lending system supports:</p>

            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Depositing ETH as collateral</li>
              <li>Borrowing CORN based on current DEX price</li>
              <li>Repaying CORN loans</li>
              <li>Withdrawing collateral</li>
              <li>Liquidating unsafe positions</li>
            </ul>

            <p>
              The challenge teaches core DeFi concepts such as AMM price oracles, collateral ratios,
              undercollateralization, and liquidation flows.
            </p>
          </div>

          {/* CONTRACT ADDRESSES */}
          <div className="mt-12 space-y-4 text-lg">
            <p className="font-semibold">📜 Deployed Contracts (Sepolia):</p>

            <p>
              🌽 Corn Token (ERC20):{" "}
              <Link
                href="https://sepolia.etherscan.io/address/0x63947463CE531a33D2c61aae04883E1379e07614"
                target="_blank"
                className="link"
              >
                0x63947463CE531a33D2c61aae04883E1379e07614
              </Link>
              <br />

              🔄 CornDEX (Price Oracle + Swap):{" "}
              <Link
                href="https://sepolia.etherscan.io/address/0x05aBBd83cE38466C995bF23055636d7d790fCD9f"
                target="_blank"
                className="link"
              >
                0x05aBBd83cE38466C995bF23055636d7d790fCD9f
              </Link>
              <br />

              💰 Lending Contract:{" "}
              <Link
                href="https://sepolia.etherscan.io/address/0x3A2088ddb563A4a2B77D2e4c4259c1E67109dc18"
                target="_blank"
                className="link"
              >
                0x3A2088ddb563A4a2B77D2e4c4259c1E67109dc18
              </Link>
            </p>

            <p>
              From this UI, you can:
              <br />
              💰 Deposit ETH  
              🪙 Borrow CORN  
              🔁 Repay loans  
              📤 Withdraw collateral  
              ⚔️ Liquidate borrowers  
            </p>

            <p>
              Built with{" "}
              <strong>
                Scaffold-ETH 2, Next.js, Wagmi, Viem, RainbowKit, and Hardhat.
              </strong>
            </p>
          </div>

          <p className="text-center text-lg mt-16">
            <a
              href="https://speedrunethereum.com/challenge/over-collateralized-lending"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              SpeedRunEthereum.com
            </a>
          </p>
        </div>

        {/* FOOTER BLOCKS */}
        <div className="grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col md:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Interact with contracts in{" "}
                <Link href="/debug" className="link">
                  Debug Contracts
                </Link>.
              </p>
            </div>

            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore transaction history in{" "}
                <Link href="/blockexplorer" className="link">
                  Block Explorer
                </Link>.
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
