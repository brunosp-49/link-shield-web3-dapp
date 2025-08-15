// import { Text } from "@/components/text/styled";
// import {
//   ModalBackground,
//   ModalContainer,
//   ModalHeader,
//   ModalOption,
//   ModalOptions,
// } from "./styled";
// import { theme } from "@/assets/colors";
// import { applyOpacity } from "@/utils/colors";
// import type React from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";
// import { SuccessCustomToast } from "@/components/customToaster/success";
// import DisconnectModal from "@/assets/svg/disconnectModal";
// import useWallet from "@/hooks/useWallet";

// interface WalletConnectedModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   isLoading?: boolean;
//   setIsLoading?: (isLoading: boolean) => void;
// }
// export const WalletConnectedModal: React.FC<WalletConnectedModalProps> = ({
//   isOpen,
//   onClose,
//   isLoading,
//   setIsLoading,
// }) => {
//   const navigate = useNavigate();

//   const { disconnectWallet } = useWallet();

//   const handleDisconnect = () => {
//     disconnectWallet();
//     navigate("/");
//     if (setIsLoading) setIsLoading(false);
//     toast.custom((id) => (
//       <SuccessCustomToast id={id} message="Wallet disconnected" />
//     ));
//     onClose();
//   };

//   const handleBackgroundClick = (event: React.MouseEvent) => {
//     const target = event.target as HTMLElement;
//     if (target === event.currentTarget && !isLoading) {
//       if (setIsLoading) setIsLoading(false);
//       onClose();
//     }
//   };

//   return (
//     <ModalBackground isOpen={isOpen} onClick={handleBackgroundClick}>
//       <ModalContainer>
//         <ModalHeader>
//           <Text fontSize="14px" fontWeight="500">
//             DISCONNECT YOUR WALLET
//           </Text>
//         </ModalHeader>
//         <ModalOptions>
//           {[{ Icon: DisconnectModal, name: "Disconnect" }].map(
//             ({ Icon, name }) => (
//               <ModalOption
//                 key={name}
//                 onClick={handleDisconnect}
//                 isLoading={isLoading}
//               >
//                 <Icon />
//                 <Text
//                   fontSize="16px"
//                   color={applyOpacity(theme.colors.dark[1], 70)}
//                   fontWeight="bold"
//                 >
//                   {name}
//                 </Text>
//               </ModalOption>
//             )
//           )}
//         </ModalOptions>
//       </ModalContainer>
//     </ModalBackground>
//   );
// };
