export const Index = () => {
  return (
    <>
      <section className="bg-red-200 body-font">
        <div className="bg-gradient-to-r from-orange-300 to-rose-700/50  py-auto ">
          <section
            id="features"
            className="relative block px-6 py-10 md:py-20 md:px-10   "
          >
            <div className="relative mx-auto max-w-5xl text-center">
              <span className="text-white my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                Why choose us
              </span>
              <h2 className="block w-full bg-gradient-to-b from-white to-gray-100 bg-clip-text font-bold text-transparent text-4xl sm:text-4xl">
                <u className="underline"> Carteira Digital versátil</u> :{" "}
                <b>Varejo, Ingressos, Saúde e muito mais...</b>
              </h2>
              <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-bold leading-relaxed tracking-wide text-white">
                Ofereça acesso rápido e seguro aos recursos essenciais do dia a
                dia dos usuários
              </p>
            </div>

            <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-color-swatch"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
                    <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
                    <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                    <line x1="17" y1="17" x2="17" y2="17.01"></line>
                  </svg>
                </div>
                <h3 className="mt-6 text-white">Customizable</h3>
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-white">
                  Tailor your landing page's look and feel, from the color
                  scheme to the font size, to the design of the page.
                </p>
              </div>

              <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-bolt"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
                  </svg>
                </div>
                <h3 className="mt-6 text-white">Fast Performance</h3>
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-white">
                  We build our templates for speed in mind, for super-fast load
                  times so your customers never waver.
                </p>
              </div>

              <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-tools"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                    <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                    <polyline points="12 8 7 3 3 7 8 12"></polyline>
                    <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                    <polyline points="16 12 21 17 17 21 12 16"></polyline>
                    <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
                  </svg>
                </div>
                <h3 className="mt-6 text-white">Fully Featured</h3>
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-white">
                  Everything you need to succeed and launch your landing page,
                  right out of the box. No need to install anything else.
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full "></div>
            <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full"></div>
          </section>
        </div>
      </section>
    </>
  );
};
