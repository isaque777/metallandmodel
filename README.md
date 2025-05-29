# Creating an Angular Model Library for npm

To create an Angular model library that you can publish to npm, follow these steps:



## 1. Configure the Library

Update the library's `ng-package.json`:

```json
{
  "$schema": "../../../node_modules/ng-packagr/ng-package.schema.json",
  "dest": "../../../dist/models",
  "lib": {
    "entryFile": "src/public-api.ts"
  }
}
```

## 2. Build the Library

```bash
ng build models --configuration production
```

## 3. Prepare for npm Publishing

### Update package.json in the dist folder:
```bash
cd dist/models
```

Edit the generated `package.json` to include:

```json
{
  "name": "@isaque777/metallandmodel",
  "version": "1.0.0",
  "description": "A collection of Angular model classes",
  "keywords": ["angular", "models", "typescript"],
  "author": "Your Name",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/isaque777/metallandmodel.git"
  },
  "peerDependencies": {
    "@angular/common": "^16.0.0",
    "@angular/core": "^16.0.0"
  },
  "dependencies": {
    "tslib": "^2.3.0"
  }
}
```

## 4. Test Locally
### **2. Test Locally**
#### **Link your package for local testing**
```bash
npm link          # Creates a global symlink to your package
```
- Test in another project:
  ```bash
  npm link @isaque777/metallandmodel
  ```
  

## **5. Update Your Package**
1. Bump the version in `package.json` (or use `npm version`):
   ```bash
   npm version patch  # Updates to v1.0.1 (or `minor`/`major`)
   ```
2. Republish:
   ```bash
   npm publish
   ```  

## 6. Publish to npm

First, log in to npm (if you haven't already):

```bash
npm login
```

Then publish:

```bash
npm version patch 
npm publish --access public
```



---

### **Key Notes**
- **Unpublishing**: Avoid unpublishing (npm restricts this after 72 hours). Use `npm unpublish --force` only if critical.
- **Private Packages**: Use `"private": true` in `package.json` or pay for private hosting.
- **`.npmignore`**: Exclude files (like `node_modules/`, `test/`) by creating this file (works like `.gitignore`).

## 7. Using the Published Package

Install in another Angular project:

```bash
npm install @isaque777/metallandmodel
```

Import and use:

```typescript
import { User, Product } from '@isaque777/metallandmodel';

const user = new User('John', 'Doe', 'john@example.com');
console.log(user.fullName);

const product = new Product('Laptop', 999.99);
console.log(product.applyDiscount(10)); // 899.991
```

## Additional Recommendations

1. **Add Documentation**: Include a README.md with usage examples
2. **Add Tests**: Write unit tests for your models
3. **Version Control**: Use semantic versioning (1.0.0, 1.0.1, etc.)
4. **Continuous Integration**: Set up CI/CD for automated testing and publishing

This approach creates a reusable, maintainable model library that can be shared across multiple Angular projects.