import GlazedButton from "@/elements/button/glazzeButton";
import MobileDeviceElement from "@/elements/device/mobileDeviceElement";

export const Index = () => {
  return (
    <>
      <section className="text-black dark:text-white body-font lg:pt-20 ">
        <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
          <div className="flex flex-col w-full text-left md:text-center justify-center ">
            <h1 className="mb-2 text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-rose-700  dark:text-white lg:text-8xl md:text-4xl">
              <span> Carteira Digital </span>
              <br className="hidden lg:block" />
              Dentro da sua empresa
            </h1>
            <p className="mx-auto text-xl font-medium border-b-2 py-2 leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
              Integre facilmente a{" "}
              <a href="https://developers.google.com/wallet?hl=pt-br#get-started">
                Carteira do Google{" "}
              </a>
              ao seu negócio, permitindo que clientes adicionem cartões de
              fidelidade, ingressos e até chaves digitais. Segura e versátil,
              oferece notificações personalizadas e suporte a uma variedade de
              casos de uso.
            </p>
          </div>
        </div>

        <div className="grid grid-rows-1 grid-cols-1 xl:grid-cols-3 md:grid-cols-3 xl:mx-[20%]   ">
          <MobileDeviceElement />
          <MobileDeviceElement />
          <MobileDeviceElement />
        </div>
      </section>
    </>
  );
};
