export const Partners = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Trusted by Industry Leaders</h2>
          <p className="text-gray-600">Join thousands of companies transforming their operations with ProBound</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="w-32 h-12 bg-gray-200/50 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 font-medium">Partner {index}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};