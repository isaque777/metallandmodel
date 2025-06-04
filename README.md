# @isaque777/metallandmodel

A collection of reusable TypeScript model classes and interfaces for use in Angular and TypeScript projects.  
This module provides strongly-typed representations for common entities such as users, addresses, albums, bands, real estate, and more.  
It is designed to help you standardize and accelerate model development in your applications.

---

### **1. Test Locally**

#### **Link your package for local testing**

```bash
npm link          # Creates a global symlink to your package
```

- Test in another AngularJS project:
  ```bash
  npm link @isaque777/metallandmodel
  ```

> **Note:**  
> If you make changes to your package and they don't appear in your consuming project, try the following steps:
> - Rebuild your package (e.g., `npm run build` if using TypeScript).
> - In your package folder, run `npm link` again.
> - In your consuming project, run `npm link @isaque777/metallandmodel` again.
> - Restart your dev server in the consuming project.
> 
> Sometimes, you may also need to clear the `node_modules` cache or delete `node_modules` and reinstall dependencies in the consuming project.

```typescript
// In your Angular 19 app
import { Address, User, Band } from "@isaque777/metallandmodel";

@Component({
  selector: "app-my-component",
  template: `<div>{{ user?.name }}</div>`,
})
export class MyComponent {
  user = new User();
  address = new Address();
  band: Band;

  constructor() {
    // Use your models here
    this.user.name = "John Doe";
    this.address.id = 1;
  }
}
```

---

### **2. Publish to npm**

#### **Create an npm account**

1. Sign up at [npmjs.com/signup](https://www.npmjs.com/signup).
2. Verify your email.

#### **Log in via CLI**

```bash
npm login         # Follow prompts for username/password/email
```

#### **Publish**

```bash
npm publish      # Publishes to npm (publicly, if package is free)
```

- For a **scoped package** (e.g., `@username/my-package`):
  ```bash
  npm publish --access public  # Required for free scoped packages
  ```

---

### **3. Update Your Package**

1. Bump the version in `package.json` (or use `npm version`):
   ```bash
   npm version patch  # Updates to v1.0.1 (or `minor`/`major`)
   ```
2. Republish:
   ```bash
   npm publish
   ```

---

### **Key Notes**

- **Unpublishing**: Avoid unpublishing (npm restricts this after 72 hours). Use `npm unpublish --force` only if critical.
- **Private Packages**: Use `"private": true` in `package.json` or pay for private hosting.
- **`.npmignore`**: Exclude files (like `node_modules/`, `test/`) by creating this file (works like `.gitignore`).

---

### **Example Workflow**

```bash
# After changes:
npm version patch
npm publish
```

---

### **Troubleshooting**

- **Name Conflicts**: Change `name` in `package.json` if the name is taken.
- **Permissions**: Ensure you’re logged in (`npm whoami`).

Need help with **TypeScript setup**, **GitHub integration**, or **automated testing**? Let me know! 🚀
