"use strict";
exports.__esModule = true;
var react_1 = require("react");
var web3_1 = require("web3");
// import { useWallet } from '@binance-chain/bsc-use-wallet';
var core_1 = require("@web3-react/core");
var getRpcUrl_1 = require("utils/getRpcUrl");
var RPC_URL = getRpcUrl_1["default"]();
// const socketURL = process.env.REACT_APP_SOCKET;
// const httpProvider = new Web3.providers.WebsocketProvider(socketURL, {
//   timeout: 30000000,
//   reconnect: {
//     auto: true,
//     delay: 50000,
//     maxAttempts: 15,
//     onTimeout: false,
//   },
// });
var httpProvider = new web3_1["default"].providers.HttpProvider(RPC_URL);
/**
 * Provides a web3 instance using the provider provided by useWallet
 * with a fallback of an httpProver
 * Recreate web3 instance only if the ethereum provider change
 */
var useWeb3 = function () {
    // const { ethereum }: { ethereum: ProviderType } = useWallet();
    var library = core_1.useWeb3React().library;
    var refEth = react_1.useRef(library);
    var _a = react_1.useState(new web3_1["default"](library || httpProvider)), web3 = _a[0], setweb3 = _a[1];
    react_1.useEffect(function () {
        if (library !== refEth.current) {
            setweb3(new web3_1["default"](library || httpProvider));
            refEth.current = library;
        }
    }, [library]);
    return web3;
};
exports["default"] = useWeb3;
