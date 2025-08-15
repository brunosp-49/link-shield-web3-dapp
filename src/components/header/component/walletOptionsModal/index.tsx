// import { Text } from "@/components/text/styled";
// import {
//   ModalBackground,
//   ModalContainer,
//   ModalHeader,
//   ModalOption,
//   ModalOptions,
// } from "./styled";
// import MetamaskModal from "@/assets/svg/metamaskModal";
// import { theme } from "@/assets/colors";
// import { applyOpacity } from "@/utils/colors";
// import { PhantomModal } from "@/assets/svg/phantomModal";
// import OkxModal from "@/assets/svg/okxModal";
// import BinanceModalIcon from "@/assets/svg/binanceModal";
// import { WalletConnectModal } from "@/assets/svg/wallatConnectModal";
// import CoinbaseModalIcon from "@/assets/svg/coinbaseModal";
// import type React from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";
// import { SuccessCustomToast } from "@/components/customToaster/success";
// import { FailCustomToast } from "@/components/customToaster/fail";
// import useWallet from "@/hooks/useWallet";

// interface WalletOptionsModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   isLoading?: boolean;
//   setIsLoading?: (isLoading: boolean) => void;
// }
// export const WalletOptionsModal: React.FC<WalletOptionsModalProps> = ({
//   isOpen,
//   onClose,
//   isLoading,
//   setIsLoading,
// }) => {
//   const navigate = useNavigate();

//   const { connectWallet } = useWallet();

//   const handleConnect = async () => {
//     if (setIsLoading) setIsLoading(true);
//     try {
//       await connectWallet();
//       navigate("/dashboard");
//       toast.custom((id) => (
//         <SuccessCustomToast id={id} message="Wallet Connected" />
//       ));
//       onClose();
//     } catch (error) {
//       console.error("Fail to connect wallet", error);
//       toast.custom((id) => (
//         <FailCustomToast id={id} message="to connect Wallet" />
//       ));
//     } finally {
//       if (setIsLoading) setIsLoading(false);
//     }
//   };

//   const handleBackgroundClick = (event: React.MouseEvent) => {
//     const target = event.target as HTMLElement;
//     if (target === event.currentTarget && !isLoading) {
//       if (setIsLoading) {
//         setIsLoading(false);
//       }
//       onClose();
//     }
//   };

//   return (
//     <ModalBackground isOpen={isOpen} onClick={handleBackgroundClick}>
//       <ModalContainer>
//         <ModalHeader>
//           <Text fontSize="14px" fontWeight="500">
//             CHOOSE YOUR WALLET
//           </Text>
//         </ModalHeader>
//         <ModalOptions>
//           {[
//             { Icon: MetamaskModal, name: "Metamask" },
//             { Icon: PhantomModal, name: "Phantom" },
//             { Icon: OkxModal, name: "OKX Wallet" },
//             { Icon: BinanceModalIcon, name: "Binance Wallet" },
//             // { Icon: TrezorModal, name: "Trezor Wallet" },
//             { Icon: WalletConnectModal, name: "WalletConnect" },
//             { Icon: CoinbaseModalIcon, name: "Coinbase Wallet" },
//           ].map(({ Icon, name }) => (
//             <ModalOption
//               key={name}
//               onClick={handleConnect}
//               isLoading={isLoading}
//             >
//               <Icon />
//               <Text
//                 fontSize="16px"
//                 color={applyOpacity(theme.colors.dark[1], 70)}
//                 fontWeight="bold"
//               >
//                 {name}
//               </Text>
//             </ModalOption>
//           ))}
//         </ModalOptions>
//       </ModalContainer>
//     </ModalBackground>
//   );
// };
