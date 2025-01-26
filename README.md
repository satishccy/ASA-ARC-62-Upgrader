# ASA ARC62 Upgrader DApp

### **Circulating Supply Getter for Algorand Standard Assets (ASA)**

This project provides a standardized method to retrieve the circulating supply of Algorand Standard Assets (ASA) in compliance with the ARC-62 proposal. It aims to enhance transparency, consistency, and usability within the Algorand ecosystem by enabling precise and customizable definitions of circulating supply.

For detailed information and specifications, refer to the official [ARC-62 documentation.](https://arc.algorand.foundation/ARCs/arc-0062)

---

## **Features**

- **ARC-62 Compliance**: Implements the `arc62_get_circulating_supply` ABI method to calculate and retrieve the ASA circulating supply.
- **Customizable Definitions**: Supports exclusions such as burned, locked, and other non-circulating balances.
- **Seamless Compatibility**: Integrates with existing Algorand standards, including ARC-3, ARC-19, and ARC-69.
- **Auto-Discovery**: Automatically identifies and retrieves external references needed for calculation.
- **Open Source**: Fully open-source, encouraging community contributions and adoption.

---

## **Tech Stack**

- **Blockchain**: Algorand
- **Smart Contracts**: TEALScript
- **Development Tools**:
  - [js-algorand-sdk](https://github.com/algorand/js-algorand-sdk)
  - [use-wallet](https://github.com/TxnLab/use-wallet)
  - [Algokit 2.0](https://github.com/algorandfoundation/algokit-cli)
- **Version Control**: GitHub

---

## **Getting Started**

### **1. Online Demonstration**
The application is hosted on GitHub Pages and can be accessed [here](https://satishccy.github.io/ASA-ARC-62-Upgrader/). Explore how this tool simplifies fetching and verifying the circulating supply of ARC-62 compatible assets.

### **2. Local Setup** *(Optional)*

#### **Prerequisites**
- [Algokit Version 2.0](https://developer.algorand.org/docs/get-started/algokit/)
- [Node.js v20.11](https://nodejs.org/en)

#### **Steps**

1. Clone the repository:
   ```bash
   git clone git@github.com:satishccy/ASA-ARC-62-Upgrader.git && cd ASA-ARC-62-Upgrader
   ```

2. Start the Algokit Localnet:
   ```bash
   algokit localnet reset
   ```

3. Compile the smart contracts:
   ```bash
   cd projects/Arc62-contracts && npm install && npm run build
   ```

4. Return to the root directory:
   ```bash
   cd ../..
   ```

5. Install frontend dependencies and run the application:
   ```bash
   cd projects/Arc62-frontend && npm install && npm run dev
   ```

   The frontend will be available at [http://localhost:5173/](http://localhost:5173/).

---

## **Usage Instructions**

### **As an Asset Manager** *(Making an Asset ARC-62 Compatible)*

#### **1. Connect Wallet**
- Click the "Connect Wallet" option in the header.
- ![image](https://github.com/user-attachments/assets/57475315-4a46-4886-93db-ee80adb1ed0c)

#### **2. Fetch Asset**
- Enter the asset ID managed by your connected wallet.
- Select the network (e.g., TestNet, MainNet) from the dropdown menu.
- Click the "Fetch Asset" button.
- ![image](https://github.com/user-attachments/assets/bec73c03-4be9-4474-91a9-2505bff95390)

#### **3. Make ARC-62 Compatible**
- If the asset is not ARC-62 compatible, input the following addresses:
  - **Burner Address**: Address holding burned tokens.
  - **Locked Address**: Address holding locked tokens.
  - **Generic Address**: Address holding other non-circulating tokens.
- Click "Make ARC-62 Compatible" and sign the transactions in your wallet.
- ![image](https://github.com/user-attachments/assets/6dcb3cd1-4f3c-4cbc-9d3f-0f0e72382647)
- ![image](https://github.com/user-attachments/assets/5baa3efe-45be-47d8-adde-bdcf20ebb37e)

#### **4. Retrieve Circulating Supply**
- After compatibility is established, click "Get Circulating Supply" and sign the transaction to retrieve the current circulating supply.
- ![image](https://github.com/user-attachments/assets/5b768772-0802-4c15-adce-dd1feaa81756)


### **As a Normal User** *(Checking Circulating Supply of an ARC-62 Compatible Asset)*

1. **Connect Wallet**:
   - Click the "Connect Wallet" option in the header.
   - ![image](https://github.com/user-attachments/assets/57475315-4a46-4886-93db-ee80adb1ed0c)

2. **Fetch Asset**:
   - Enter the asset ID and select the network from the dropdown.
   - Click the "Fetch Asset" button.
   - ![image](https://github.com/user-attachments/assets/bec73c03-4be9-4474-91a9-2505bff95390)

3. **Get Circulating Supply**:
   - If the asset is ARC-62 compatible, click "Get Circulating Supply" and sign the transaction to view the circulating supply.
   - If the asset is not compatible, no further action is available.
   - ![image](https://github.com/user-attachments/assets/5b768772-0802-4c15-adce-dd1feaa81756)

---

## **How to Use**

### **For Developers**
- Integrate the `arc62_get_circulating_supply` method into your ASA projects to dynamically retrieve circulating supply.
- Extend or modify the logic to suit specific use cases, such as regulated assets or gaming tokens.

### **For Wallet/Explorer Providers**
- Use the getter method to display accurate circulating supply information for users.

### **For Asset Issuers**
- Customize circulating supply definitions by assigning dedicated addresses for non-circulating balances (e.g., burned or locked tokens).

---

## **Contributing**

We welcome contributions to improve the project! Follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add feature-name'
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request on GitHub.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

Feel free to reach out via [email](mailto:satishchoudhari13579@gmail.com) for questions, suggestions, or collaboration opportunities.

