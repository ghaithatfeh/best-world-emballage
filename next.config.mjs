import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  webpack: (config) => {
    config.cache = false;
    return config;
  }
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);