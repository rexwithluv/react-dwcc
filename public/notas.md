# Cómo usar imágenes en un proyecto React

Para usar imágenes en un proyecto React desde la carpeta `public`:

```jsx
import Image from 'next/image';

export default function Componenete() {
    return (
        <div>
            <Image src="/image.png" alt="Test image" width={164} height={164} />
        </div>
    );
};
```
