/* export const config = {
    projectId: 'byhbrcd9', // 👈 Replace with your actual ID from sanity.config.ts
    dataset: 'production',
    apiVersion: '2023-01-01',
    useCdn: true
  } */



    import { defineConfig } from 'sanity'
    import { deskTool } from 'sanity/desk'
    
    export default defineConfig({
      projectId: 'byhbrcd9',
      dataset: 'production',
      title: 'iUvo Health Studio',
      apiVersion: '2023-01-01',
      basePath: '/admin',              // ✅ This mounts the Studio at /admin
      plugins: [deskTool()],
      useCdn: false
    })
    
    