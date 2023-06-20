// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.20.1

import { Writer, Reader } from "as-proto/assembly";
import { GroupVersionForDiscovery } from "./GroupVersionForDiscovery";
import { ServerAddressByClientCIDR } from "./ServerAddressByClientCIDR";

export class APIGroup {
  static encode(message: APIGroup, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.name);

    const versions = message.versions;
    for (let i: i32 = 0; i < versions.length; ++i) {
      writer.uint32(18);
      writer.fork();
      GroupVersionForDiscovery.encode(versions[i], writer);
      writer.ldelim();
    }

    const preferredVersion = message.preferredVersion;
    if (preferredVersion !== null) {
      writer.uint32(26);
      writer.fork();
      GroupVersionForDiscovery.encode(preferredVersion, writer);
      writer.ldelim();
    }

    const serverAddressByClientCIDRs = message.serverAddressByClientCIDRs;
    for (let i: i32 = 0; i < serverAddressByClientCIDRs.length; ++i) {
      writer.uint32(34);
      writer.fork();
      ServerAddressByClientCIDR.encode(serverAddressByClientCIDRs[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): APIGroup {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new APIGroup();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.versions.push(
            GroupVersionForDiscovery.decode(reader, reader.uint32())
          );
          break;

        case 3:
          message.preferredVersion = GroupVersionForDiscovery.decode(
            reader,
            reader.uint32()
          );
          break;

        case 4:
          message.serverAddressByClientCIDRs.push(
            ServerAddressByClientCIDR.decode(reader, reader.uint32())
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  name: string;
  versions: Array<GroupVersionForDiscovery>;
  preferredVersion: GroupVersionForDiscovery | null;
  serverAddressByClientCIDRs: Array<ServerAddressByClientCIDR>;

  constructor(
    name: string = "",
    versions: Array<GroupVersionForDiscovery> = [],
    preferredVersion: GroupVersionForDiscovery | null = null,
    serverAddressByClientCIDRs: Array<ServerAddressByClientCIDR> = []
  ) {
    this.name = name;
    this.versions = versions;
    this.preferredVersion = preferredVersion;
    this.serverAddressByClientCIDRs = serverAddressByClientCIDRs;
  }
}
