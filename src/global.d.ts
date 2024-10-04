declare module "*.jpg" {
  const image: any;
  export default image;
}

declare module "*.png" {
  const image: any;
  export default image;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}
