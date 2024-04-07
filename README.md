# Planimetria
A simple UI library for React

## Dependencies
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)

## Installation
### 1 | Install package
To install planimetria, run the following command in your terminal:
```bash
npm i planimetria@latest
```

### 2 | Tailwind CSS Setup (mandatory)
planimetria is built on top of Tailwind CSS, so you need it and configure it to use planimetria in your project.
```js
// -- tailwind.config.js --

//...
module.exports = {
  content: [
    // ...
      "./node_modules/planimetria/ui/*.{js,ts,jsx,tsx,mdx}",
  ],
  // ...
  darkMode: "class",
};
```

### 3 | Import planimetria
You can import planimetria components in your project like this:
```js
import {Button} from "planimetria";

export default function Home() {
    return (
        <div>
            <Button type={"primary"}>Primary</Button>
        </div>
    );
}
```

### 4 | Easy as that!
Now you can use planimetria components in your project. Enjoy!

