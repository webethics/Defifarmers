import config from "./chainConfig";
import { Modal } from "hooks/Modal";
import { Login } from "./types";
import { Box } from "@material-ui/core";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import NetworkCard from "./NetworkCard";
interface Props {
  login: Login;
  onDismiss?: () => void;
}

const ChainModal: React.FC<Props> = ({ login, onDismiss = () => null }) => {
  return (
    <Modal title="Choose Network" onDismiss={onDismiss}>
      {config.map((entry, index) => (
        <NetworkCard
          key={entry.title}
          walletConfig={entry}
          onDismiss={onDismiss}
        />
      ))}
    </Modal>
  );
};

export default ChainModal;
