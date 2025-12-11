# 💳 SRE Challenge 05 — Over-Collateralized Lending Protocol (ETH → ERC20 (CORN))

A full-stack Web3 project built for **SpeedRunEthereum Challenge 05**.

This challenge walks through the core mechanics of decentralized lending & borrowing systems similar to Aave, Compound, and MakerDAO — but simplified for learning.  

The protocol enables users to:

- Deposit **ETH as collateral**  
- Borrow **CORN (ERC20)** against that collateral  
- Maintain a minimum **120% collateralization ratio**  
- Liquidate risky under-collateralized positions  
- Simulate market movements using an on-chain DEX oracle  
- Execute **flash loans** (optional giga-quest)  

This is a hands-on deep dive into **DeFi lending**, liquidation mechanics, collateral management, and on-chain solvency systems.

---

## 🚀 Live Demo

- **Frontend (Vercel):** https://sre-challenge-05-over-collateralize.vercel.app/  
- **Lending Contract (Testnet):** `0x3A2088ddb563A4a2B77D2e4c4259c1E67109dc18`  
- **CORNDex Price Oracle/DEX Contract:** ` 0x05aBBd83cE38466C995bF23055636d7d790fCD9f`  
- **CORN Token (ERC20):** `0x63947463CE531a33D2c61aae04883E1379e07614`  
- **Block Explorer:** https://sepolia.etherscan.io/address/0x3A2088ddb563A4a2B77D2e4c4259c1E67109dc18  

---

## 🧱 Tech Stack

### 🖥 Smart Contracts

- Solidity `0.8.x`  
- Hardhat  
- Sepolia / Optimism Sepolia  
- Contracts included:
  - **Corn.sol** — ERC20 borrowable token  
  - **CornDEX.sol** — lightweight DEX + price oracle  
  - **Lending.sol** — core lending logic  
  - **MovePrice.sol** — helper for moving market price  
  - *(Optional Side Quests)* Flash Loan Contracts, Leverage Engine  

Key Features:

- Over-collateralized borrowing (120%)
- Collateral tracking per user  
- Position ratio calculation with `1e18` precision  
- Liquidation with **10% liquidator incentive**  
- Flash loans  
- Maximum leverage iterative logic (optional)  

---

### 🎨 Frontend (Scaffold-ETH 2)

- Next.js 13 (App Router)  
- React + TypeScript  
- TailwindCSS  
- Wagmi + Viem  
- RainbowKit  
- Scaffold-ETH 2 Debug UI  
- Deployment on Vercel  

---

## 🎯 Core Protocol Features

### 🔹 How Liquidation Works — The Math
 
Position ratio:
```solidity
positionRatio = (collateralValue * 1e18) / borrowedValue
```
where:
```solidity
collateralValue = (ETH_collateral * price) / 1e18   // priced in CORN units
```
Liquidatable if:
```solidity
positionRatio < 1.2e18  // 120%
```
Liquidator reward:

  When liquidating:
 - Liquidator repays 100% of user's CORN debt
 - Liquidator receives a 10% incentive (in CORN units)
 - Total CORN-value received:
 ```solidity
totalValue = userDebt * 1.10
```
- Convert CORN-value → ETH collateral:
```solidity
ethReward = (totalValue * 1e18) / price
```
- Liquidator cannot take more ETH than user deposited:
```solidity
ethToLiquidator = min(ethReward, userCollateral)
```   

---

## 🎮 Frontend dApp

Using **Scaffold-ETH 2**, the UI lets users:

- Deposit / withdraw collateral  
- Borrow / repay CORN  
- View liquidation status in real time  
- Simulate price shifts  
- Inspect events + logs  
- Use the Debug Contracts panel  
- Switch wallets  
- Test scenarios with the **market simulator**  

---

## 📊 Position Visualization

The UI displays:

- Collateral value in CORN  
- Borrowed amount  
- Position ratio  
- Liquidation threshold  
- Oracle price  
- Health factor indicator  

---

## 📐 Learning Outcomes

After completing this challenge, you will understand:

- How over-collateralized lending works  
- Why DeFi loans require **more collateral than borrowed value**  
- How liquidation protects protocol solvency  
- How DEX-based oracles determine borrowing capacity  
- How to compute safe borrow / withdraw limits  
- Precision math using `1e18` scaling  
- Flash loan internal flows  
- How to build a frontend for lending markets  

This challenge forms one of the most important foundations of DeFi.

---

## 🎓 Part of SpeedRunEthereum

🏃 **SpeedRunEthereum — Challenge 05: Over-Collateralized Lending**  
https://speedrunethereum.com/challenge/over-collateralized-lending

Built using **Scaffold-ETH 2**, the modern Ethereum full-stack framework.

---
