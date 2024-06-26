//@ts-nocheck
import { MsgUpdateParams, MsgNewSpace, MsgAddSpaceOwner, MsgRemoveSpaceOwner, MsgNewKeychain, MsgAddKeychainWriter, MsgUpdateSpace, MsgUpdateKeychain, MsgNewKeyRequest, MsgFulfilKeyRequest, MsgUpdateKey, MsgNewSignRequest, MsgFulfilSignRequest } from "./tx.js";
export const AminoConverter = {
  "/warden.warden.v1beta2.MsgUpdateParams": {
    aminoType: "warden/x/warden/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/warden.warden.v1beta2.MsgNewSpace": {
    aminoType: "/warden.warden.v1beta2.MsgNewSpace",
    toAmino: MsgNewSpace.toAmino,
    fromAmino: MsgNewSpace.fromAmino
  },
  "/warden.warden.v1beta2.MsgAddSpaceOwner": {
    aminoType: "/warden.warden.v1beta2.MsgAddSpaceOwner",
    toAmino: MsgAddSpaceOwner.toAmino,
    fromAmino: MsgAddSpaceOwner.fromAmino
  },
  "/warden.warden.v1beta2.MsgRemoveSpaceOwner": {
    aminoType: "/warden.warden.v1beta2.MsgRemoveSpaceOwner",
    toAmino: MsgRemoveSpaceOwner.toAmino,
    fromAmino: MsgRemoveSpaceOwner.fromAmino
  },
  "/warden.warden.v1beta2.MsgNewKeychain": {
    aminoType: "/warden.warden.v1beta2.MsgNewKeychain",
    toAmino: MsgNewKeychain.toAmino,
    fromAmino: MsgNewKeychain.fromAmino
  },
  "/warden.warden.v1beta2.MsgAddKeychainWriter": {
    aminoType: "/warden.warden.v1beta2.MsgAddKeychainWriter",
    toAmino: MsgAddKeychainWriter.toAmino,
    fromAmino: MsgAddKeychainWriter.fromAmino
  },
  "/warden.warden.v1beta2.MsgUpdateSpace": {
    aminoType: "/warden.warden.v1beta2.MsgUpdateSpace",
    toAmino: MsgUpdateSpace.toAmino,
    fromAmino: MsgUpdateSpace.fromAmino
  },
  "/warden.warden.v1beta2.MsgUpdateKeychain": {
    aminoType: "/warden.warden.v1beta2.MsgUpdateKeychain",
    toAmino: MsgUpdateKeychain.toAmino,
    fromAmino: MsgUpdateKeychain.fromAmino
  },
  "/warden.warden.v1beta2.MsgNewKeyRequest": {
    aminoType: "/warden.warden.v1beta2.MsgNewKeyRequest",
    toAmino: MsgNewKeyRequest.toAmino,
    fromAmino: MsgNewKeyRequest.fromAmino
  },
  "/warden.warden.v1beta2.MsgFulfilKeyRequest": {
    aminoType: "/warden.warden.v1beta2.MsgFulfilKeyRequest",
    toAmino: MsgFulfilKeyRequest.toAmino,
    fromAmino: MsgFulfilKeyRequest.fromAmino
  },
  "/warden.warden.v1beta2.MsgUpdateKey": {
    aminoType: "/warden.warden.v1beta2.MsgUpdateKey",
    toAmino: MsgUpdateKey.toAmino,
    fromAmino: MsgUpdateKey.fromAmino
  },
  "/warden.warden.v1beta2.MsgNewSignRequest": {
    aminoType: "/warden.warden.v1beta2.MsgNewSignRequest",
    toAmino: MsgNewSignRequest.toAmino,
    fromAmino: MsgNewSignRequest.fromAmino
  },
  "/warden.warden.v1beta2.MsgFulfilSignRequest": {
    aminoType: "/warden.warden.v1beta2.MsgFulfilSignRequest",
    toAmino: MsgFulfilSignRequest.toAmino,
    fromAmino: MsgFulfilSignRequest.fromAmino
  }
};