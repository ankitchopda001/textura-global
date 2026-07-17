function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-slate-950 p-8 animate-pulse">

      {/* Header */}
      <div className="h-10 w-80 bg-slate-800 rounded mb-10"></div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-slate-900 rounded-2xl p-6 h-32"
          />
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-8 mb-10">
        <div className="bg-slate-900 rounded-2xl h-80"></div>
        <div className="bg-slate-900 rounded-2xl h-80"></div>
      </div>

      {/* Trend Chart */}
      <div className="bg-slate-900 rounded-2xl h-80 mb-10"></div>

      {/* Search */}
      <div className="h-12 w-80 bg-slate-900 rounded-xl mb-8"></div>

      {/* Table */}
      <div className="bg-slate-900 rounded-2xl p-6">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="h-10 bg-slate-800 rounded mb-4"
          ></div>
        ))}
      </div>

    </div>
  );
}

export default DashboardSkeleton;