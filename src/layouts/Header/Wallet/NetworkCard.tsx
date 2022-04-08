import { Button, Box } from "@material-ui/core";
import { localStorageKey } from "./config";
import { Login, Config } from "./types";
import { networkSetup } from "utils/networkSetup";
import { getChainId } from "utils/getNetwork";
interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
}

const NetworkCard = ({ login, walletConfig, onDismiss }: any) => {
  const localChainID = getChainId();
  const { title, icon, chainId } = walletConfig;

  const setNetwork = (chainId) => {
    localStorage.setItem("chainID", chainId);
    if (chainId == "1") {
      window.open("https://opensea.io/assets/treedefi-collectibles", "_blank");
    }
    onDismiss();
  };

  return (
    <Button
      fullWidth
      onClick={() => {
        setNetwork(chainId);
      }}
      style={{ justifyContent: "space-between" }}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
      className="mdl_c_btn"
    >
      {title}

      <Box component="img" alt={""} src={icon} height="30px" />
    </Button>
  );
};

export default NetworkCard;
