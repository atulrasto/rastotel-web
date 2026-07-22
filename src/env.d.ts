/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CONTACT_PROVIDER: string;
    readonly VITE_FORMSPREE_ID: string;
    // add more env vars here as needed...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  