<h1 align="center"> <img src="./packages/nextjs/public/oly.svg">
</h1>

## Crypto Genius Team
# OLY - Smart Auction and Tokens Contract

<p><a href="https://www.youtube.com/watch?v=oZKfzuOv_T4">
PITCH (Youtube)
</a></p>
<p><a href= "https://www.loom.com/share/547878f4f45e41fc9d14c5fb5c4fcbd6?sid=5e1af2be-e0de-4fa9-8dc1-224957230b58"> 
Demo (loom) 
</a> </p>
<p><a href="https://polygon-cardona-rcpibhroq-devsoniabatistas-projects.vercel.app">
Front-End Integration
</a></p>
<p><a href="https://azure-bitter-grasshopper-987.mypinata.cloud/ipfs/QmX76FMgZpN5JySWFfheCJnKTPvyaUXW8ha8hVjik8TM1x">
PDF Presentation 
</a></p>


This smart contract, developed in Solidity, offers functionalities for creating auctions and tokens, facilitating the interaction and transaction of digital assets on the blockchain. It can be deployed on any compatible EVM. "Note: In this contract, the admin control (Owner) was removed to allow interaction from other wallets for testing purposes."


### CONTRACT ADDRESS Deployed at Polygon Cardona
0x3EE3903251D48024eA51Df3464548886b92039d8
### Explorer Scan
https://cardona-zkevm.polygonscan.com/address/0x3EE3903251D48024eA51Df3464548886b92039d8

![image](https://github.com/DevSoniaBatista/oly-polygon/assets/152102342/6caf5af2-d071-4155-a4f4-7274f2e593eb)


### Tools
 - Framework Scaffold-ETH-2 (sub-components: HardHat and Next.js)
 - Smart Contract => Solidity (/oly/packages/hardhat/contracts)
 - Front-end (/oly/packages/nextjs/app)

### How execute
Use the frontend integration at the URL: https://polygon-cardona-rcpibhroq-devsoniabatistas-projects.vercel.app 

<p>OR</p>

```bash
#clone the project
git clone https://github.com/DevSoniaBatista/oly-polygon.git
```

```bash
#enter directory
cd oly-polygon
```

```bash
#install dependencies
yarn install
```
 
To run locally, open 3 terminals:

On a first terminal, execute hardhat
```bash
#execute hardhat locally
cd package/hardhat
yarn chain
```

On a second terminal, deploy the contract:
```bash
#deploy the contract locally
cd package/hardhat
yarn generate
yarn deploy 
```

On the file: packages/nextjs/scaffold.config.ts change the line 13:
From: targetNetworks: [chains.polygonZkEvmCardona],
To:   targetNetworks: [chains.hardhat],

On a third terminal, start DApp:
```bash
#Launch the DApp
cd package/nextjs
yarn start 
```

It will open the interface web at http://localhost:3000

<hr/>

## Features

### Auctions
The contract enables the creation and management of digital asset auctions. Users can create auctions by specifying the item name, initial price, auction duration, and other relevant information. During the auction period, participants can place bids, with the highest bid at the end of the period winning the item.

### Tokens
In addition to auctions, the contract supports the creation and transfer of digital tokens. These tokens can represent various assets such as collectibles, rewards, or participation rights in events. Users can create new tokens and transfer them as needed.

### Payments and Fees
The contract enables payments in Ethereum to bid on items in auctions or purchase tokens. A percentage of the amount raised in auctions is retained as a service fee, with the remainder passed on to the seller of the item. Similarly, when purchasing tokens, a portion of the amount may be allocated to the contract owner as a service fee.

## How to Use

To utilize the AuctionCrypto contract, follow these steps:

1. **Interact with the Contract**: Use a compatible Ethereum wallet, such as MetaMask, to interact with the contract. This includes creating new auctions, placing bids on existing auctions, creating tokens, and purchasing available tokens. To create tokens or auctions, use the metadata JSON, as shown in this example: [JSON](https://azure-bitter-grasshopper-987.mypinata.cloud/ipfs/QmQH2tbg9MV1wBad12pT6momaCmEjFADkc59FaGRYFaN3q)

2. **Manage Transactions**: When participating in auctions or purchasing tokens, ensure you have a sufficient balance in your Ethereum wallet. Also, be aware of the associated transaction fees.

3. **Monitor Activities**: Keep track of events emitted by the contract to monitor auction and token transaction activity. This includes events such as the creation of new auctions, bids on auctions, auction closure, and token purchases.

## Author
This contract was developed by the CryptoGenius Team.
For more information, please contact hackateam4@gmail.com.

## CryptoGenius Team
*Dayana Mazini
UX/UI, Administrator, entrepreneur with experience in developing innovative businesses in the fields of finance, education, and social transformation.
LinkedIn: https://www.linkedin.com/in/dayanamazini/ 
Mazini.dayana@gmail.com

*Aline Silva
Entrepreneur, Olympic Athlete, Founder of Mempodera and Firneza Token.
https://www.linkedin.com/in/influencer-aline-silva-oly
alinedaluta@gmail.com

*Larissa Montefusco
Electronic Technician, Undergraduate Student in Electrical and Computer Engineering / IoT Developer and Communication Protocols, Django Python
https://www.linkedin.com/in/larissa-montefusco/
larissa.montefusco7@gmail.com

*Sonia Mara Batista
Dev Blockchain, Solidity, Web3 
LinkedIn: https://www.linkedin.com/in/soniamarabatista/
dev.soniabatista@gmail.com

*Matheus Oliveira
Flutter Developer, Founder of Eita Rolê, Entrepreneur with Experience in Software Development and 3D Printing.
LinkedIn: https://www.linkedin.com/in/devmatheusoliveira/
matheusoliveira.workmso@gmail.com
