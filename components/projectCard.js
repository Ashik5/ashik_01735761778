export default function ProjectCard({ name, img }) {
  return (
    <div className="relative h-[20rem] w-full group cursor-pointer">
      <div className="hidden group-hover:flex absolute z-10 inset-0 h-full w-full bg-gradient-to-t from-black to-transparent rounded-lg">
        <h1 className="absolute bottom-5 left-5 text-white font-bold text-xl px-3 border-l-2 border-blue-500 animate__animated animate__fadeInUp">
          {name}
        </h1>
      </div>
      <img className="object-cover rounded-lg h-full w-full" src={img} />
    </div>
  );
}
