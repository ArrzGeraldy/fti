// src/assets/customers/index.ts
const modules = import.meta.glob(
  "../assets/customers/*.{png,jpg,jpeg,svg,webp}",
  {
    eager: true,
  },
);

const customers = Object.values(modules).map(
  (mod) => (mod as { default: string }).default,
);

export default customers;
