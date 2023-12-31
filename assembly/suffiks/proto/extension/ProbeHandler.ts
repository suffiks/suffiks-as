// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.20.1

import { Writer, Reader } from "as-proto/assembly";
import { ExecAction } from "./ExecAction";
import { HTTPGetAction } from "./HTTPGetAction";
import { TCPSocketAction } from "./TCPSocketAction";
import { GRPCAction } from "./GRPCAction";

export class ProbeHandler {
  static encode(message: ProbeHandler, writer: Writer): void {
    const exec = message.exec;
    if (exec !== null) {
      writer.uint32(10);
      writer.fork();
      ExecAction.encode(exec, writer);
      writer.ldelim();
    }

    const httpGet = message.httpGet;
    if (httpGet !== null) {
      writer.uint32(18);
      writer.fork();
      HTTPGetAction.encode(httpGet, writer);
      writer.ldelim();
    }

    const tcpSocket = message.tcpSocket;
    if (tcpSocket !== null) {
      writer.uint32(26);
      writer.fork();
      TCPSocketAction.encode(tcpSocket, writer);
      writer.ldelim();
    }

    const grpc = message.grpc;
    if (grpc !== null) {
      writer.uint32(34);
      writer.fork();
      GRPCAction.encode(grpc, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): ProbeHandler {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ProbeHandler();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exec = ExecAction.decode(reader, reader.uint32());
          break;

        case 2:
          message.httpGet = HTTPGetAction.decode(reader, reader.uint32());
          break;

        case 3:
          message.tcpSocket = TCPSocketAction.decode(reader, reader.uint32());
          break;

        case 4:
          message.grpc = GRPCAction.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  exec: ExecAction | null;
  httpGet: HTTPGetAction | null;
  tcpSocket: TCPSocketAction | null;
  grpc: GRPCAction | null;

  constructor(
    exec: ExecAction | null = null,
    httpGet: HTTPGetAction | null = null,
    tcpSocket: TCPSocketAction | null = null,
    grpc: GRPCAction | null = null
  ) {
    this.exec = exec;
    this.httpGet = httpGet;
    this.tcpSocket = tcpSocket;
    this.grpc = grpc;
  }
}
