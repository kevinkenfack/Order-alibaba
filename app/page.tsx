"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Printer } from "lucide-react"

export default function OrderSummary() {
  const handlePrint = () => {
    window.print()
  }

  const orderItems = [
    {
      id: 1,
      image: "https://s.alicdn.com/@sc04/kf/Hccb46fcc67964ecf959dd014667f1de7G.jpg_720x720q50.jpg",
      unitPrice: 4.8,
      quantity: 2,
      color: "White & Black",
      size: "43-44",
      link: "https://www.alibaba.com/x/B06BAg?ck=pdp",
    },
    {
      id: 2,
      image: "https://s.alicdn.com/@sc04/kf/Hdf34d31e3cd64fe1858c47dae47c5156E.jpg_720x720q50.jpg",
      unitPrice: 6.8,
      quantity: 2,
      color: "White & Black",
      size: "41-42",
      link: "https://www.alibaba.com/x/B064fS?ck=pdp",
    },
    {
      id: 3,
      image: "https://s.alicdn.com/@sc04/kf/H0bc06f79f1fa415c8b888fc31a32ac8eK.jpg_720x720q50.jpg",
      unitPrice: 4.5,
      quantity: 3,
      color: "Brown",
      size: "39",
      link: "https://www.alibaba.com/x/B063yF?ck=pdp",
    },
    {
      id: 4,
      image: "https://s.alicdn.com/@sc04/kf/H7014ca13483f477294e5145c6c8574c3u.jpg_720x720q50.jpg",
      unitPrice: 4.9,
      quantity: 2,
      color: "White",
      size: "39-40",
      link: "https://www.alibaba.com/x/B064y7?ck=pdp",
    },
    {
      id: 5,
      image: "https://s.alicdn.com/@sc04/kf/Hf36746c3f2de4b10a35029004d0a1925A.jpg_720x720q50.jpg",
      unitPrice: 6.0,
      quantity: 2,
      color: "Grey",
      size: "35-38",
      link: "https://www.alibaba.com/x/B065HI?ck=pdp",
    },
    {
      id: 6,
      image: "https://s.alicdn.com/@sc04/kf/Hd6d9e72812734b84bec4f09c7bc56c11J.jpg_720x720q50.jpg",
      unitPrice: 4.9,
      quantity: 1,
      color: "Red",
      size: "35-38",
      link: "https://www.alibaba.com/x/B065I0?ck=pdp",
    },
    {
      id: 7,
      image: "https://s.alicdn.com/@sc04/kf/Had213a6b6fc24688a758db6ac85023c9h.jpg_720x720q50.jpg",
      unitPrice: 2.9,
      quantity: 2,
      color: "Brown",
      size: "43-44",
      link: "https://www.alibaba.com/x/B064dH?ck=pdp",
    },
    {
      id: 8,
      image: "https://s.alicdn.com/@sc04/kf/Hd69aa8ab8fc14aac8230a2d069e1d477q.png_720x720q50.jpg",
      unitPrice: 1.28,
      quantity: 10,
      color: "Mixed colors",
      size: "40-45",
      link: "https://www.alibaba.com/x/B068op?ck=pdp",
    },
    {
      id: 9,
      image: "https://s.alicdn.com/@sc04/kf/Ha7aaeea667334d70b7f1b8a4886a4953J.png_720x720q50.jpg",
      unitPrice: 0.98,
      quantity: 30,
      color: "Mixed colors",
      size: "37-44",
      link: "https://www.alibaba.com/x/B0698b?ck=pdp",
    },
    {
      id: 10,
      image: "https://s.alicdn.com/@sc04/kf/H6874ef7a3d8243308e96bbdf65eef53cb.jpg_720x720q50.jpg",
      unitPrice: 5.9,
      quantity: 2,
      color: "Black",
      size: "38-39",
      link: "https://www.alibaba.com/x/B066LE?ck=pdp",
    },
    {
      id: 11,
      image: "https://s.alicdn.com/@sc04/kf/Hed8ab469888a424f8e7390497862391cs.jpg_720x720q50.jpg",
      unitPrice: 6.8,
      quantity: 1,
      color: "Any color",
      size: "38",
      link: "https://www.alibaba.com/x/B068sK?ck=pdp",
    },
    {
      id: 12,
      image: "https://s.alicdn.com/@sc04/kf/He35a27981df741f5aca8985ef56dbb7eD.jpg_720x720q50.jpg",
      unitPrice: 6.2,
      quantity: 2,
      color: "White, Red & Black",
      size: "42-43",
      link: "https://www.alibaba.com/x/B067ZT?ck=pdp",
    },
    {
      id: 13,
      image: "https://s.alicdn.com/@sc04/kf/H377f87393cc0488a883bb0fb5263e6afB.jpg_720x720q50.jpg",
      unitPrice: 7.9,
      quantity: 2,
      color: "Black",
      size: "43-44",
      link: "https://www.alibaba.com/x/B066Mp?ck=pdp",
    },
  ].map((item) => ({
    ...item,
    total: item.unitPrice * item.quantity,
  }))

  const totalAmount = orderItems.reduce((sum, item) => sum + item.total, 0)

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-7xl mx-auto bg-white shadow-lg">
        <CardHeader className="border-b border-gray-200 bg-gray-50 rounded-t-lg">
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800">
              <span className="inline-block mr-2">📦</span> Shoes Order Summary
            </CardTitle>
            <Button
              variant="outline"
              onClick={handlePrint}
              className="print:hidden flex items-center gap-2 bg-transparent"
            >
              <Printer className="h-4 w-4" />
              Print
            </Button>
          </div>
          <p className="text-gray-600 mt-2">Hello, Please find below the summary of the shoes order:</p>
        </CardHeader>
        <CardContent className="p-0">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-center">#</th>
                  <th className="px-4 py-3">Product</th>
                  <th className="px-4 py-3">Unit Price</th>
                  <th className="px-4 py-3">Quantity</th>
                  <th className="px-4 py-3">Color</th>
                  <th className="px-4 py-3">Size(s)</th>
                  <th className="px-4 py-3">Total</th>
                  <th className="px-4 py-3">Link</th>
                </tr>
              </thead>
              <tbody>
                {orderItems.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 text-center font-medium">{item.id}</td>
                    <td className="px-4 py-3">
                      <div className="h-24 w-24 relative">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={`Product ${item.id}`}
                          className="object-cover h-full w-full rounded-md border"
                        />
                      </div>
                    </td>
                    <td className="px-4 py-3 font-semibold text-green-600">${item.unitPrice.toFixed(2)}</td>
                    <td className="px-4 py-3 font-medium">{item.quantity}</td>
                    <td className="px-4 py-3">{item.color}</td>
                    <td className="px-4 py-3">{item.size}</td>
                    <td className="px-4 py-3 font-bold text-blue-600">${item.total.toFixed(2)}</td>
                    <td className="px-4 py-3">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-medium hover:bg-blue-700 transition-colors"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3 p-3">
            {orderItems.map((item) => (
              <div key={item.id} className="border rounded-lg p-3 bg-white shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <span className="font-bold text-gray-800 text-lg">#{item.id}</span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-medium hover:bg-blue-700 transition-colors"
                  >
                    View
                  </a>
                </div>

                <div className="flex gap-3 mb-3">
                  <div className="h-20 w-20 flex-shrink-0 relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={`Product ${item.id}`}
                      className="object-cover h-full w-full rounded-md border"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-gray-500 text-sm">Prix unitaire:</span>
                        <span className="font-semibold text-green-600">${item.unitPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 text-sm">Quantité:</span>
                        <span className="font-medium">{item.quantity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 text-sm">Couleur:</span>
                        <span className="font-medium text-sm truncate">{item.color}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 text-sm">Taille:</span>
                        <span className="font-medium">{item.size}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Total:</span>
                    <span className="text-lg font-bold text-blue-600">${item.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 p-4 md:p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-b-lg">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-600">Total des articles: {orderItems.length}</p>
                <p className="text-sm text-gray-600">
                  Quantité totale: {orderItems.reduce((sum, item) => sum + item.quantity, 0)}
                </p>
              </div>
              <div className="text-center sm:text-right">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">💰 Montant Total:</h3>
                <p className="text-2xl md:text-3xl font-bold text-green-600">${totalAmount.toFixed(2)} USD</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
