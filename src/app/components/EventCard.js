import Link from "next/link";

function EventCard({ id, imageSrc, title, date, location }){
  return (
    <div className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow-md border-b border-gray-100">
      <div className="w-1/4 h-36 mr-6 overflow-hidden rounded-md">
        <img
          src={imageSrc}
          alt={`${title} event`}
          className="w-full h-full"
        />
      </div>

      <div className="flex-grow pr-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">{title}</h2>
        <p className="text-base text-gray-600">{date}</p>
        <p className="text-base text-gray-500">{location}</p>
      </div>

      <Link href={`/courses/${id}`} className="flex items-center justify-center 
                   bg-green-500 text-white font-medium py-2 px-4 rounded-md"
      >
        Explore Event &rarr;
      </Link>
    </div>
  );
};

export default EventCard;