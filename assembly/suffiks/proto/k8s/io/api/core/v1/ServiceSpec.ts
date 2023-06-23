// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.20.1

import { Writer, Reader } from "as-proto/assembly";
import { ServicePort } from "./ServicePort";
import { SessionAffinityConfig } from "./SessionAffinityConfig";

export class ServiceSpec {
  static encode(message: ServiceSpec, writer: Writer): void {
    const ports = message.ports;
    for (let i: i32 = 0; i < ports.length; ++i) {
      writer.uint32(10);
      writer.fork();
      ServicePort.encode(ports[i], writer);
      writer.ldelim();
    }

    const selector = message.selector;
    if (selector !== null) {
      const selectorKeys = selector.keys();
      for (let i: i32 = 0; i < selectorKeys.length; ++i) {
        const selectorKey = selectorKeys[i];
        writer.uint32(18);
        writer.fork();
        writer.uint32(10);
        writer.string(selectorKey);
        writer.uint32(18);
        writer.string(selector.get(selectorKey));
        writer.ldelim();
      }
    }

    writer.uint32(26);
    writer.string(message.clusterIP);

    const clusterIPs = message.clusterIPs;
    if (clusterIPs.length !== 0) {
      for (let i: i32 = 0; i < clusterIPs.length; ++i) {
        writer.uint32(146);
        writer.string(clusterIPs[i]);
      }
    }

    writer.uint32(34);
    writer.string(message.type);

    const externalIPs = message.externalIPs;
    if (externalIPs.length !== 0) {
      for (let i: i32 = 0; i < externalIPs.length; ++i) {
        writer.uint32(42);
        writer.string(externalIPs[i]);
      }
    }

    writer.uint32(58);
    writer.string(message.sessionAffinity);

    writer.uint32(66);
    writer.string(message.loadBalancerIP);

    const loadBalancerSourceRanges = message.loadBalancerSourceRanges;
    if (loadBalancerSourceRanges.length !== 0) {
      for (let i: i32 = 0; i < loadBalancerSourceRanges.length; ++i) {
        writer.uint32(74);
        writer.string(loadBalancerSourceRanges[i]);
      }
    }

    writer.uint32(82);
    writer.string(message.externalName);

    writer.uint32(90);
    writer.string(message.externalTrafficPolicy);

    writer.uint32(96);
    writer.int32(message.healthCheckNodePort);

    writer.uint32(104);
    writer.bool(message.publishNotReadyAddresses);

    const sessionAffinityConfig = message.sessionAffinityConfig;
    if (sessionAffinityConfig !== null) {
      writer.uint32(114);
      writer.fork();
      SessionAffinityConfig.encode(sessionAffinityConfig, writer);
      writer.ldelim();
    }

    const ipFamilies = message.ipFamilies;
    if (ipFamilies.length !== 0) {
      for (let i: i32 = 0; i < ipFamilies.length; ++i) {
        writer.uint32(154);
        writer.string(ipFamilies[i]);
      }
    }

    writer.uint32(138);
    writer.string(message.ipFamilyPolicy);

    writer.uint32(160);
    writer.bool(message.allocateLoadBalancerNodePorts);

    writer.uint32(170);
    writer.string(message.loadBalancerClass);

    writer.uint32(178);
    writer.string(message.internalTrafficPolicy);
  }

  static decode(reader: Reader, length: i32): ServiceSpec {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ServiceSpec();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ports.push(ServicePort.decode(reader, reader.uint32()));
          break;

        case 2:
          let selectorKey: string = "";
          let selectorValue: string = "";
          let selectorHasKey: bool = false;
          let selectorHasValue: bool = false;
          for (
            const end: usize = reader.ptr + reader.uint32();
            reader.ptr < end;

          ) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                selectorKey = reader.string();
                selectorHasKey = true;
                break;

              case 2:
                selectorValue = reader.string();
                selectorHasValue = true;
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
            if (message.selector === null) {
              message.selector = new Map<string, string>();
            }
            const selector = message.selector;
            if (selector !== null && selectorHasKey && selectorHasValue) {
              selector.set(selectorKey, selectorValue);
            }
          }
          break;

        case 3:
          message.clusterIP = reader.string();
          break;

        case 18:
          message.clusterIPs.push(reader.string());
          break;

        case 4:
          message.type = reader.string();
          break;

        case 5:
          message.externalIPs.push(reader.string());
          break;

        case 7:
          message.sessionAffinity = reader.string();
          break;

        case 8:
          message.loadBalancerIP = reader.string();
          break;

        case 9:
          message.loadBalancerSourceRanges.push(reader.string());
          break;

        case 10:
          message.externalName = reader.string();
          break;

        case 11:
          message.externalTrafficPolicy = reader.string();
          break;

        case 12:
          message.healthCheckNodePort = reader.int32();
          break;

        case 13:
          message.publishNotReadyAddresses = reader.bool();
          break;

        case 14:
          message.sessionAffinityConfig = SessionAffinityConfig.decode(
            reader,
            reader.uint32()
          );
          break;

        case 19:
          message.ipFamilies.push(reader.string());
          break;

        case 17:
          message.ipFamilyPolicy = reader.string();
          break;

        case 20:
          message.allocateLoadBalancerNodePorts = reader.bool();
          break;

        case 21:
          message.loadBalancerClass = reader.string();
          break;

        case 22:
          message.internalTrafficPolicy = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  ports: Array<ServicePort>;
  selector: Map<string, string>;
  clusterIP: string;
  clusterIPs: Array<string>;
  type: string;
  externalIPs: Array<string>;
  sessionAffinity: string;
  loadBalancerIP: string;
  loadBalancerSourceRanges: Array<string>;
  externalName: string;
  externalTrafficPolicy: string;
  healthCheckNodePort: i32;
  publishNotReadyAddresses: bool;
  sessionAffinityConfig: SessionAffinityConfig | null;
  ipFamilies: Array<string>;
  ipFamilyPolicy: string;
  allocateLoadBalancerNodePorts: bool;
  loadBalancerClass: string;
  internalTrafficPolicy: string;

  constructor(
    ports: Array<ServicePort> = [],
    selector: Map<string, string> = new Map(),
    clusterIP: string = "",
    clusterIPs: Array<string> = [],
    type: string = "",
    externalIPs: Array<string> = [],
    sessionAffinity: string = "",
    loadBalancerIP: string = "",
    loadBalancerSourceRanges: Array<string> = [],
    externalName: string = "",
    externalTrafficPolicy: string = "",
    healthCheckNodePort: i32 = 0,
    publishNotReadyAddresses: bool = false,
    sessionAffinityConfig: SessionAffinityConfig | null = null,
    ipFamilies: Array<string> = [],
    ipFamilyPolicy: string = "",
    allocateLoadBalancerNodePorts: bool = false,
    loadBalancerClass: string = "",
    internalTrafficPolicy: string = ""
  ) {
    this.ports = ports;
    this.selector = selector;
    this.clusterIP = clusterIP;
    this.clusterIPs = clusterIPs;
    this.type = type;
    this.externalIPs = externalIPs;
    this.sessionAffinity = sessionAffinity;
    this.loadBalancerIP = loadBalancerIP;
    this.loadBalancerSourceRanges = loadBalancerSourceRanges;
    this.externalName = externalName;
    this.externalTrafficPolicy = externalTrafficPolicy;
    this.healthCheckNodePort = healthCheckNodePort;
    this.publishNotReadyAddresses = publishNotReadyAddresses;
    this.sessionAffinityConfig = sessionAffinityConfig;
    this.ipFamilies = ipFamilies;
    this.ipFamilyPolicy = ipFamilyPolicy;
    this.allocateLoadBalancerNodePorts = allocateLoadBalancerNodePorts;
    this.loadBalancerClass = loadBalancerClass;
    this.internalTrafficPolicy = internalTrafficPolicy;
  }
}