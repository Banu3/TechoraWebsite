import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

const artifactDir = 'C:\\Users\\kisho\\.gemini\\antigravity-ide\\brain\\b63f025c-8bbd-4e7f-a40a-8b3507caf863';
const oldArtifactDir = 'C:\\Users\\kisho\\.gemini\\antigravity-ide\\brain\\e5456ade-0163-4bc3-9172-11cd463a3253';
const publicImgDir = path.resolve(__dirname, './public/images');

const imageMap = {
  // New image
  'corporate_building_bg_1791650272886.jpg': { target: 'hero-bg.jpg', dir: artifactDir },
  // Old images
  'it_consulting_cover_1790274061958.png': { target: 'it-consulting.png', dir: oldArtifactDir },
  'payroll_services_cover_1790274091786.png': { target: 'payroll-services.png', dir: oldArtifactDir },
  'about_techora_team_1790274125002.png': { target: 'about-team.png', dir: oldArtifactDir },
  'security_datacenter_1790274153276.png': { target: 'security-datacenter.png', dir: oldArtifactDir },
  'hero_enterprise_tech_1790274309634.png': { target: 'hero-tech.png', dir: oldArtifactDir },
  'cloud_devops_infra_1790274331989.png': { target: 'cloud-devops.png', dir: oldArtifactDir },
  'fintech_banking_study_1790274355710.png': { target: 'fintech-banking.png', dir: oldArtifactDir },
  'payroll_analytics_dashboard_1790274382363.png': { target: 'payroll-analytics.png', dir: oldArtifactDir },
  'global_headquarters_office_1790274406618.png': { target: 'headquarters.png', dir: oldArtifactDir },
  'roi_growth_strategy_1790274431352.png': { target: 'roi-strategy.png', dir: oldArtifactDir }
};

// Auto-sync images to public/images whenever Vite loads
try {
  if (!fs.existsSync(publicImgDir)) {
    fs.mkdirSync(publicImgDir, { recursive: true });
  }
  for (const [srcName, info] of Object.entries(imageMap)) {
    const src = path.join(info.dir, srcName);
    const targetPath = path.join(publicImgDir, info.target);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, targetPath);
      console.log(`[Vite Asset Sync] Synced ${info.target}`);
    }
  }
} catch (e) {
  console.error('[Vite Asset Sync Error]', e);
}

function imageServePlugin() {
  return {
    name: 'image-serve-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith('/images/')) {
          const imgName = req.url.replace('/images/', '').split('?')[0];
          const localPath = path.join(publicImgDir, imgName);
          
          let fileToServe = fs.existsSync(localPath) ? localPath : null;

          if (fileToServe) {
            const ext = path.extname(fileToServe).toLowerCase();
            let contentType = 'image/png';
            if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
            if (ext === '.svg') contentType = 'image/svg+xml';
            if (ext === '.webp') contentType = 'image/webp';

            res.setHeader('Content-Type', contentType);
            res.setHeader('Cache-Control', 'no-cache'); // Ensure we always get the latest
            fs.createReadStream(fileToServe).pipe(res);
            return;
          }
        }
        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), imageServePlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

