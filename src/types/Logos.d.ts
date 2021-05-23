export type CoreManufacturerLogo = {
  name: string;
  slug: string;
  image: {
    source: string;
  };
};

export type ManufacturerLogo = {
  image: {
    original: string;
    localOriginal: string;
    thumb: string;
    localThumb: string;
    optimized: string;
    localOptimized: string;
  };
} & CoreManufacturerLogo;

export type ManufacturerLogos = ManufacturerLogo[];
