import { getTarjeta, getFirstForm } from "@/sanity/sanity-utils";

export default async function Home() {
  const tarjeta = await getTarjeta();
  const form = await getFirstForm();
  console.log(form);
  return (
    <main className="w-screen h-screen bg-zinc-200 flex">
      <div className="flex-1  flex-col justify-center items-center bg-zinc-200">
        <h2 className="font-bold text-2xl text-center">Ejemplo con Esquema</h2>
        <form className="flex flex-col items-center justify-center w-full h-full">
          {form.map((field) => {
            return (
              <input
                key={field._key}
                className="w-1/2 h-10 p-2 m-2 bg-zinc-100 border-2 border-zinc-300 rounded-md"
                type={field.fieldType}
                placeholder={field.fieldName}
              />
            );
          })}

          {/* Button */}
          <button
            className="w-1/2 h-10 p-2 m-2 bg-blue-400 border-2 border-blue-500 rounded-md"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
      <div className="flex-1 flex-col justify-center items-center bg-zinc-100">
        <h2>Hey</h2>
      </div>
    </main>
  );
}
