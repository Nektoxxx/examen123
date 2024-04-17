export function Title({ text }) {
  return (
    <section className="bg-white py-[70px] dark:bg-white">
      <div className="mx-auto px-4 sm:container">
        <h2 className="mb-2 text-4xl font-semibold text-dark dark:text-black">
          {text}
        </h2>
      </div>
    </section>
  );
}
