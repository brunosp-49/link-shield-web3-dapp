import { Router } from "./routes";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";
import { metadata, amoy, projectId } from "./services/web3modal";

function App() {
  createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [amoy],
    projectId,
    enableAnalytics: true,
  });
  return <Router />;
}

export default App;
