import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);