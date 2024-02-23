export const TermsConditions = () => {
    return (
        <>
            <h1 className="border-l-4 border-neutral pl-2 text-xl text-slate-600 font-semibold mb-2">
                Terms and Conditions
            </h1>
            <ol className="list-decimal list-inside list text-sm">
                <li className="mt-2">
                    <span className="font-light">
                        Peserta wajib mendaftar secara online melalui platform
                        yang telah ditentukan. Pendaftaran hanya berlaku bagi
                        mereka yang memenuhi persyaratan umum dan khusus yang
                        telah ditentukan.
                    </span>
                </li>
                <li className="mt-2">
                    <span className="font-light">
                        Peserta harus berusia{' '}
                        <strong className="font-bold">minimal 18 tahun</strong>{' '}
                        atau sesuai dengan ketentuan yang telah ditentukan.
                        Pendaftaran hanya berlaku untuk individu, kecuali
                        ditentukan sebaliknya. Setiap peserta bertanggung jawab
                        atas keakuratan informasi yang diberikan pada saat
                        pendaftaran.
                    </span>
                </li>
                <li className="mt-2">
                    <span className="font-light">
                        Apabila ada biaya pendaftaran, peserta wajib membayar
                        sesuai dengan ketentuan yang telah ditentukan.
                        Pembayaran dapat dilakukan melalui metode pembayaran
                        yang telah disediakan.
                    </span>
                </li>
                <li className="mt-2">
                    <span className="font-light">
                        Pembatalan peserta dapat dilakukan sesuai dengan
                        ketentuan yang telah ditentukan sebelumnya.{' '}
                        <span className="text-red-500">
                            Biaya pendaftaran tidak dapat dikembalikan kecuali
                            ada ketentuan khusus yang mengizinkan.
                        </span>
                    </span>
                </li>
                <li className="mt-2">
                    <span className="font-light">
                        Peserta wajib mematuhi peraturan dan tata tertib yang
                        berlaku selama acara. Panitia berhak mengubah jadwal
                        atau program acara dengan pemberitahuan sebelumnya.
                    </span>
                </li>
                <li className="mt-2">
                    <span className="font-light">
                        Peserta bertanggung jawab atas segala kerusakan atau
                        kehilangan barang pribadi selama acara. Peserta wajib
                        menjaga kebersihan dan ketertiban selama berlangsungnya
                        acara.
                    </span>
                </li>
                <li className="mt-2">
                    <span className="font-light">
                        Panitia berhak menggunakan foto, video, atau materi lain
                        yang dihasilkan selama acara untuk keperluan dokumentasi
                        atau promosi.
                    </span>
                </li>
                <li className="mt-2">
                    <span className="font-light">
                        Panitia berhak{' '}
                        <strong className="font-bold">
                            mengeluarkan peserta
                        </strong>{' '}
                        yang melanggar ketentuan acara{' '}
                        <span className="text-red-500">
                            tanpa memberikan pengembalian biaya pendaftaran.
                        </span>
                    </span>
                </li>
                <li className="mt-2">
                    <span className="font-light">
                        Panitia berhak untuk melakukan perubahan pada syarat dan
                        ketentuan tanpa pemberitahuan sebelumnya.
                    </span>
                </li>
            </ol>
        </>
    );
};
