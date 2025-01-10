export const Partners = () => {
  return (
    <section className="py-12 bg-gray-50/50">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Trusted for overall simplicity</h2>
          <p className="text-gray-600">Based on 4,000+ reviews with customer satisfaction</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <img src="/placeholder.svg" alt="Partner 1" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
          <img src="/placeholder.svg" alt="Partner 2" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
          <img src="/placeholder.svg" alt="Partner 3" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
          <img src="/placeholder.svg" alt="Partner 4" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
          <img src="/placeholder.svg" alt="Partner 5" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </section>
  );
};