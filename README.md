# framer-motion-native

[![npm version](https://img.shields.io/npm/v/framer-motion-native.svg)](https://www.npmjs.com/package/framer-motion-native)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)

Bring the power of [Framer Motion](https://www.framer.com/motion/) animations to **React Native**. A declarative, production-ready animation library with a familiar API that works seamlessly across iOS, Android, and React Native Web.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [API Reference](#api-reference)
  - [motion components](#motion-components)
  - [useAnimation](#useanimation)
  - [AnimatePresence](#animatepresence)
  - [Variants](#variants)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- 🎞️ **Declarative animations** — describe *what* you want, not *how* to get there
- 🔄 **Variants** — orchestrate complex animation states across component trees
- 🚪 **Enter / exit animations** — animate components as they mount and unmount with `AnimatePresence`
- 🎛️ **Gesture animations** — `whileHover`, `whileTap`, and `whileDrag` out of the box
- ⚛️ **Familiar API** — if you know Framer Motion for the web, you already know this library
- 📱 **Cross-platform** — iOS, Android, and React Native Web support

---

## Installation

```bash
# npm
npm install framer-motion-native

# yarn
yarn add framer-motion-native

# pnpm
pnpm add framer-motion-native
```

> **Peer dependencies**: React Native ≥ 0.70 and React ≥ 18 are required.

---

## Quick Start

```tsx
import { motion } from 'framer-motion-native';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <motion.View
      style={styles.box}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
}

const styles = StyleSheet.create({
  box: { width: 100, height: 100, backgroundColor: '#6c47ff', borderRadius: 12 },
});
```

---

## API Reference

### motion components

Every React Native core component has a `motion.*` counterpart:

| Component | Description |
|-----------|-------------|
| `motion.View` | Animatable `<View>` |
| `motion.Text` | Animatable `<Text>` |
| `motion.Image` | Animatable `<Image>` |
| `motion.ScrollView` | Animatable `<ScrollView>` |
| `motion.FlatList` | Animatable `<FlatList>` |

#### Props

| Prop | Type | Description |
|------|------|-------------|
| `initial` | `object \| string` | Starting animation state |
| `animate` | `object \| string` | Target animation state |
| `exit` | `object \| string` | State when the component unmounts (requires `AnimatePresence`) |
| `transition` | `object` | Timing, spring, and easing configuration |
| `variants` | `object` | Named animation states |
| `whileTap` | `object \| string` | Animation while pressed |
| `whileHover` | `object \| string` | Animation while hovered (React Native Web) |
| `whileDrag` | `object \| string` | Animation while dragging |

---

### useAnimation

Imperatively control animations with the `useAnimation` hook:

```tsx
import { motion, useAnimation } from 'framer-motion-native';

export function PulsingBox() {
  const controls = useAnimation();

  const handlePress = async () => {
    await controls.start({ scale: 1.2, transition: { duration: 0.2 } });
    controls.start({ scale: 1, transition: { duration: 0.2 } });
  };

  return (
    <motion.View
      animate={controls}
      style={{ width: 80, height: 80, backgroundColor: '#6c47ff' }}
      onTouchEnd={handlePress}
    />
  );
}
```

---

### AnimatePresence

Animate components as they are **added to** or **removed from** the React tree:

```tsx
import { useState } from 'react';
import { Button } from 'react-native';
import { motion, AnimatePresence } from 'framer-motion-native';

export function ToggleBox() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <Button title="Toggle" onPress={() => setVisible(v => !v)} />
      <AnimatePresence>
        {visible && (
          <motion.View
            key="box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ width: 100, height: 100, backgroundColor: '#6c47ff' }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
```

---

### Variants

Variants let you define reusable animation states and propagate them through component trees:

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function List({ items }: { items: string[] }) {
  return (
    <motion.View variants={containerVariants} initial="hidden" animate="visible">
      {items.map(item => (
        <motion.Text key={item} variants={itemVariants}>
          {item}
        </motion.Text>
      ))}
    </motion.View>
  );
}
```

---

## Examples

| Example | Description |
|---------|-------------|
| [Fade In](examples/fade-in) | Simple opacity animation |
| [Spring Physics](examples/spring) | Spring-based motion |
| [Drag](examples/drag) | Draggable components |
| [Stagger List](examples/stagger-list) | Staggered list entrance |
| [Page Transitions](examples/page-transitions) | Animated screen transitions |

---

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) before submitting a pull request.

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Commit your changes: `git commit -m "feat: add my feature"`
4. Push to the branch: `git push origin feat/my-feature`
5. Open a pull request

---

## License

[Apache 2.0](LICENSE) © framer-motion-native contributors
