declare namespace NodeJS {
  interface ProcessEnv {
    // 파이어베이스 타입
    readonly NEXT_PUBLIC_API_KEY: string;
    readonly NEXT_PUBLIC_AUTH_DOMAIN: string;
    readonly NEXT_PUBLIC_PROJECT_ID: string;
    readonly NEXT_PUBLIC_STORAGE_BUCKET: string;
    readonly NEXT_PUBLIC_MESSAGING_SENDER_ID: string;
    readonly NEXT_PUBLIC_APP_ID: string;
    readonly NEXT_PUBLIC_MEASUREMENT_ID: string;
  }
}
