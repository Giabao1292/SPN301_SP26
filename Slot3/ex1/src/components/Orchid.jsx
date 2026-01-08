import React from "react";

export default function Orchid({ orchid }) {
  return (
    <div className="max-w-md mx-auto p-4 rounded-2xl shadow-md">
      <img
        src={orchid.image}
        alt={orchid.orchidName}
        className="w-full h-60 object-cover rounded-xl mb-4"
      />

      <h2 className="text-xl font-semibold mb-1">{orchid.orchidName}</h2>

      <p className="text-lg font-bold text-green-600 mb-2">
        {orchid.price.toLocaleString("vi-VN")} ₫
      </p>

      <p className="text-sm text-gray-600 mb-3">{orchid.description}</p>

      <div className="flex justify-between items-center">
        <span className="text-sm font-medium px-3 py-1 bg-gray-100 rounded-full">
          {orchid.category}
        </span>

        {orchid.isSpecial && (
          <span className="text-xs font-semibold px-3 py-1 bg-pink-500 text-white rounded-full">
            Special
          </span>
        )}
      </div>
    </div>
  );
}
