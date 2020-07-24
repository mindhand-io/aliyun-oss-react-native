interface SDK {
  enableDevMode(): void;
  initWithSecurityToken(
    securityToken: string,
    accessKeyId: string,
    accessKeySecret: string,
    endpoint: string,
    configuration?: Record<string, string>
  ): void;
  asyncUpload(
    bucket: string,
    fileName: string,
    filePath: string
  ): Promise<Record<string, string>>;
}
declare const methods: SDK;

export default methods;