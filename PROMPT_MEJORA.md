# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto corregido y listo para compilar.

---

```
Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación o descripciones sin código, genera los archivos
correspondientes sin aplicar análisis de compilación
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import { ProductProvider } from './contexts/ProductContext';

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// === ARCHIVO: src/index.tsx ===

import React, { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { useProduct } from '../hooks/useProduct';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const App: React.FC = () => {
  const { products, addProduct, deleteProduct } = useProduct();

  return (
    <div>
      <h1>Product Catalog</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} deleteProduct={deleteProduct} />
    </div>
  );
};

export default App;

// === ARCHIVO: src/pages/App.tsx ===

import React from 'react';
import { Product } from '../types/product';
import { ProductContextType } from '../contexts/ProductContext';

type ProductListProps = {
  products: Product[];
  deleteProduct: (id: string) => void;
};

const ProductList: React.FC<ProductListProps> = ({ products, deleteProduct }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

// === ARCHIVO: src/components/ProductList.tsx ===

import React, { useState } from 'react';
import { Product } from '../types/product';
import { ProductContextType } from '../contexts/ProductContext';

type ProductFormProps = {
  addProduct: (product: Product) => void;
};

const ProductForm: React.FC<ProductFormProps> = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && price >= 0) {
      addProduct({ id: Date.now().toString(), name, price, description, category });
      setName('');
      setPrice(0);
      setDescription('');
      setCategory('');
    } else {
      alert('Invalid product data');
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;

// === ARCHIVO: src/components/ProductForm.tsx ===

import React, { createContext, useContext, useState } from 'react';
import { Product } from '../types/product';

type ProductContextType = {
  products: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const deleteProduct = (id: string) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id!== id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};

// === ARCHIVO: src/contexts/ProductContext.tsx ===

import { Product } from '../types/product';

export const useProduct = (): {
  products: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
} => {
  const [products, setProducts] = React.useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const deleteProduct = (id: string) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id!== id));
  };

  return { products, addProduct, deleteProduct };
};

// === ARCHIVO: src/hooks/useProduct.ts ===

import { Product } from './types/product';

export const addProduct = (product: Product) => {
  // Simulate adding product to a backend
  console.log('Product added:', product);
};

export const deleteProduct = (id: string) => {
  // Simulate deleting product from a backend
  console.log('Product deleted with id:', id);
};

// === ARCHIVO: src/services/productService.ts ===

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
}

// === ARCHIVO: src/types/product.ts ===

import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductList from '../src/components/ProductList';
import { ProductProvider } from '../src/contexts/ProductContext';

describe('ProductList', () => {
  it('renders without crashing', () => {
    render(
      <ProductProvider>
        <ProductList products={[]} deleteProduct={() => {}} />
      </ProductProvider>
    );
  });

  it('displays product list', () => {
    const products = [
      { id: '1', name: 'Product 1', price: 10, description: 'Description 1', category: 'Category 1' },
      { id: '2', name: 'Product 2', price: 20, description: 'Description 2', category: 'Category 2' },
    ];
    render(
      <ProductProvider>
        <ProductList products={products} deleteProduct={() => {}} />
      </ProductProvider>
    );
    products.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    });
  });
});

// === ARCHIVO: tests/ProductList.test.tsx ===

import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductForm from '../src/components/ProductForm';
import { ProductProvider } from '../src/contexts/ProductContext';

describe('ProductForm', () => {
  it('renders without crashing', () => {
    render(
      <ProductProvider>
        <ProductForm addProduct={() => {}} />
      </ProductProvider>
    );
  });

  it('submits form with valid data', () => {
    render(
      <ProductProvider>
        <ProductForm addProduct={(product) => {
          expect(product.name).toBe('Product 1');
          expect(product.price).toBe(10);
        }} />
      </ProductProvider>
    );
    const nameInput = screen.getByLabelText('Name:') as HTMLInputElement;
    const priceInput = screen.getByLabelText('Price:') as HTMLInputElement;
    const submitButton = screen.getByText('Add Product');

    nameInput.value = 'Product 1';
    priceInput.value = '10';
    fireEvent.change(nameInput, { target: { value: 'Product 1' } });
    fireEvent.change(priceInput, { target: { value: '10' } });
    fireEvent.click(submitButton);
  });
});

// === ARCHIVO: tests/ProductForm.test.tsx ===

```
