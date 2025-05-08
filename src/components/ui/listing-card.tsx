import Image from "next/image"
import Link from "next/link"

interface ListingCardProps {
  listing: {
    id: string
    title: string
    image: string
  }
}

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 flex flex-col md:flex-row gap-4">
        <div className="md:w-2/3">
          <div className="text-sm font-medium text-gray-500 mb-2">{listing.id}</div>
          <p className="mb-4">{listing.title}</p>
          <Link href={`/contact`}> {/* href={`/listings/${listing.id}`} */}
            <button className="pointer rounded-lg px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-white">Contact</button>
          </Link>
        </div>
        <div className="md:w-1/3">
          <Image
            src={listing.image || "/assets/default-listing.jpg"}
            alt={listing.title}
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}
