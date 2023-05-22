export {};
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        CONTENTFUL_SPACE_ID: string;
        CONTENTFUL_KEY: string;
        // ENV: 'test' | 'dev' | 'prod';
      }
    }
  }