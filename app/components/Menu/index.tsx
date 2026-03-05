export function Menu() {
  const options = [
    {
      title: "Femininas",
      items: ["Florais", "Orientais", "Frutados", "Amadeirado", "Ver tudo"],
    },
    {
      title: "Masculinas",
      items: ["Florais", "Orientais", "Frutados", "Amadeirado", "Ver tudo"],
    },
    {
      title: "Unissex",
      items: ["Florais", "Orientais", "Frutados", "Amadeirado", "Ver tudo"],
    },
    {
      title: "Coleções",
      items: ["Exclusivos", "Limitados", "Importados", "Premium", "Ver tudo"],
    },
  ];
  return (
    <nav className="relative w-full bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto flex items-center gap-16 h-24 px-12 text-[#3d2a1d] tracking-wide font-light">
        <button className="transition-colors duration-300 hover:text-[#c58a5c] cursor-pointer">
          Início
        </button>

        <div className="group">
          <button className="flex items-center gap-2 transition-all duration-300 group-hover:text-[#c58a5c] cursor-pointer">
            Fragrâncias
            <svg
              className="w-4 h-4 transition-transform duration-500 group-hover:rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 9l6 6 6-6"
              />
            </svg>
          </button>

          <div className="absolute left-0 top-full w-full bg-[#faf7f4] overflow-hidden max-h-0 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:max-h-[500px] group-hover:opacity-100">
            <div className="max-w-7xl mx-auto py-10 px-10 grid grid-cols-4 gap-16">
              {options.map((column, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 opacity-0 translate-y-6
                         group-hover:opacity-100 group-hover:translate-y-0
                         transition-all duration-700"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-sm uppercase tracking-widest text-[#a07a5a]">
                    {column.title}
                  </h3>

                  {column.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm font-light cursor-pointer transition-all duration-300 hover:text-[#c58a5c] hover:bg-[#f0e5de] px-3 py-1 rounded-md w-fit"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <button className="transition-colors duration-300 hover:text-[#c58a5c] cursor-pointer">
          Contato
        </button>
      </div>
    </nav>
  );
}
