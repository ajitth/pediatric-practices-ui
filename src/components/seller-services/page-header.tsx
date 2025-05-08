import Link from "next/link"

export default function PageHeader() {
  return (
    <div className="seller-page-header-bg py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-100 mb-4">Seller Services</h1>
        <div className="text-sm font-bold text-gray-100">
          <Link href="/" className="hover:text-teal-600">
            Home
          </Link>
          <span className="mx-2">&gt;</span>
          <span>Seller Services</span>
        </div>
      </div>
    </div>
  )
}
