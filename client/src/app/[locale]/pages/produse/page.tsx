// client/src/app/(pages)/produse/page.tsx
async function getProducts() {
  // ATENȚIE: În producție, URL-ul trebuie să fie cel al serverului live.
  const res = await fetch("http://localhost:5000/api/products", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">Produsele Noastre</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product: any) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-lg">
            {/* Aici poți adăuga o imagine pentru produs */}
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.category}</p>
            <p className="mt-2">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
