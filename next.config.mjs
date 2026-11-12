/** @type {import('next').NextConfig} */
const nextConfig = {
  // Four guide pages were near-duplicates of their tool page and were consolidated
  // into it. A permanent redirect keeps any existing link or search result working.
  async redirects() {
    return [
      { source: "/how-to-extract-pages-from-pdf", destination: "/", permanent: true },
      { source: "/how-to-remove-pages-from-a-pdf", destination: "/delete-pages-from-pdf", permanent: true },
      { source: "/how-to-add-page-numbers-to-a-pdf", destination: "/add-page-numbers-to-pdf", permanent: true },
      { source: "/how-to-convert-jpg-to-pdf", destination: "/jpg-to-pdf", permanent: true },
    ];
  },
};

export default nextConfig;
