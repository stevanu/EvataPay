import React from "react";

const Terms = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Syarat dan Ketentuan
      </h2>

      {/* Scrollable Content */}
      <div className="max-h-80 overflow-y-auto text-gray-700 space-y-4 pr-1">
        <p>
          Dengan menggunakan layanan Dompet Evata, Anda menyetujui bahwa semua
          informasi yang Anda masukkan adalah benar dan dapat
          dipertanggungjawabkan.
        </p>

        <p>
          Anda setuju untuk menjaga kerahasiaan akun Anda dan bertanggung jawab
          atas semua aktivitas yang terjadi pada akun tersebut.
        </p>

        <p>
          Kami berhak memperbarui syarat dan ketentuan sewaktu-waktu untuk
          meningkatkan kualitas layanan.
        </p>
      </div>
    </div>
  );
};

export default Terms;
