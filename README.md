# Vietnam Administrative Units API

## Overview

This package provides a simple way to fetch and manipulate administrative units in Vietnam, including provinces, districts, and wards.

- Note: work only on nodejs, not for browser environment

## Installation

```sh
pnpm install vn-units
```

## Usage

### Importing the package

```ts
import { getProvinces, getDistricts, getWards } from "vn-units";
```

### Fetching Provinces

```ts
getProvinces({ normalizeVietnamese: true }).then((provinces) => {
  console.log(provinces);
});
```

**Options:**

- `date` _(optional)_: Fetch data as of a specific date.
- `normalizeVietnamese` _(optional, default: false)_: Convert names to non-accented Vietnamese.

### Fetching Districts

```ts
getDistricts({ provinceCode: "01", normalizeVietnamese: true }).then(
  (districts) => {
    console.log(districts);
  }
);
```

**Options:**

- `date` _(optional)_
- `provinceCode` _(optional)_: Filter districts by province.
- `normalizeVietnamese` _(optional, default: false)_

### Fetching Wards

```ts
getWards({
  provinceCode: "01",
  districtCode: "001",
  normalizeVietnamese: true,
}).then((wards) => {
  console.log(wards);
});
```

**Options:**

- `date` _(optional)_
- `provinceCode` _(optional)_
- `districtCode` _(optional)_
- `normalizeVietnamese` _(optional, default: false)_

## License

MIT
