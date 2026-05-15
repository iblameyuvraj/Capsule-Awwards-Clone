# TypeScript Basics - Quick Reference

Your project uses TypeScript. Here's a quick guide for the most common patterns.

## 🎯 Component with Props

```typescript
// components/Hero/Hero.tsx
'use client';

interface HeroProps {
  title: string;
  subtitle?: string;  // optional
  onClick?: () => void;
}

export default function Hero({ title, subtitle, onClick }: HeroProps) {
  return (
    <section onClick={onClick}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </section>
  );
}
```

## 🔄 Using State

```typescript
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);  // number type inferred
  const [name, setName] = useState('');   // string type inferred
  
  return (
    <button onClick={() => setCount(count + 1)}>
      {name}: {count}
    </button>
  );
}
```

## ⚡ Using Effects

```typescript
'use client';

import { useEffect, useState } from 'react';

export default function DataFetcher() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    // Load data
    setData('loaded');
  }, []); // dependencies array

  return <p>{data}</p>;
}
```

## 🎨 Event Handlers

```typescript
'use client';

export default function Form() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('clicked');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <input onChange={handleChange} />
    </>
  );
}
```

## 📦 Typing Children

```typescript
interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div>{children}</div>;
}
```

## 🔗 Refs

```typescript
'use client';

import { useRef } from 'react';

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const play = () => {
    videoRef.current?.play();
  };

  return (
    <>
      <video ref={videoRef} src="/video.mp4" />
      <button onClick={play}>Play</button>
    </>
  );
}
```

## 📝 Union Types

```typescript
type Theme = 'light' | 'dark';
type Size = 'small' | 'medium' | 'large';

interface ButtonProps {
  theme: Theme;
  size: Size;
}
```

## ✅ Best Practices

- ✅ Use interfaces for object shapes
- ✅ Use type for unions ('light' | 'dark')
- ✅ Let TypeScript infer simple types
- ✅ Explicitly type when unclear
- ✅ Extract types to separate files for reuse

---

**That's it!** TypeScript is already set up. Just use it and it will catch errors as you type. 🚀
