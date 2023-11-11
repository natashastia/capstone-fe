import React, { Component } from "react";
import Navbar from "../components/navbar.jsx";
import Loading from "../components/loading.jsx";

class CoffeeQualityClassifier extends Component {
  constructor() {
    super();
    this.state = {
      selectedFile: null,
      hasilKlasifikasi: null,
      error: null,
      isLoading: false,
      processingTime: null,
      image_data: null, // Menambahkan properti image_data ke state
    };
  }

  handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const hasilKlasifikasi = null;
    const error = null;

    // Jika ada file yang dipilih, buat URL objek dan setel ke state
    if (selectedFile) {
      const imageObjectURL = URL.createObjectURL(selectedFile);
      this.setState({
        selectedFile,
        hasilKlasifikasi,
        error,
        imageObjectURL, // Tambahkan URL objek ke dalam state
      });
    } else {
      this.setState({
        selectedFile,
        hasilKlasifikasi,
        error,
        imageObjectURL: null, // Jika tidak ada file dipilih, atur ke null
      });
    }
  };

  handleSubmit = async () => {
    if (!this.state.selectedFile) {
      this.setState({ error: "Pilih berkas gambar terlebih dahulu" });
      return;
    }

    const formData = new FormData();
    formData.append("file", this.state.selectedFile);

    this.setState({ isLoading: true, processingTime: null });

    const startTime = new Date();

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        // Menyimpan data gambar dalam bentuk data URI
        this.setState({
          hasilKlasifikasi: data.classifications,
          image_data: data.image_data,
        });
        console.log(this.state.hasilKlasifikasi);

        const endTime = new Date();
        const processingTime = (endTime - startTime) / 1000; // Durasi pemrosesan dalam detik
        this.setState({ processingTime });
      } else {
        this.setState({
          error: "Terjadi kesalahan dalam permintaan ke server",
        });
        console.log("Error: Terjadi kesalahan dalam permintaan ke server");
      }
    } catch (error) {
      this.setState({ error: "Terjadi kesalahan dalam permintaan ke server" });
      console.log("Error: Terjadi kesalahan dalam permintaan ke server", error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  calculateTotalDefects = () => {
    const { hasilKlasifikasi } = this.state;

    if (hasilKlasifikasi) {
      const bentukTidakWajarCount = hasilKlasifikasi.filter(
        (result) => result === "Bentuk Tidak Wajar"
      ).length;

      const warnaTidakWajarCount = hasilKlasifikasi.filter(
        (result) => result === "Warna Tidak Wajar"
      ).length;

      const kelainanLainCount = hasilKlasifikasi.filter(
        (result) => result === "Kelainan Lain"
      ).length;

      return bentukTidakWajarCount + warnaTidakWajarCount + kelainanLainCount;
    }

    return 0;
  };

  // Fungsi untuk menghitung persentase
  calculatePercentage = (category) => {
    if (this.state.hasilKlasifikasi) {
      const total = this.state.hasilKlasifikasi.length;
      const count = this.state.hasilKlasifikasi.filter(
        (result) => result === category
      ).length;
      return (count / total) * 100; // Dibulatkan hingga 2 desimal
    }
    return 0;
  };

  render() {
    const {
      imageObjectURL,
      hasilKlasifikasi,
      isLoading,
      error,
      image_data,
      processingTime,
    } = this.state;
    return (
      <div className="text-center max-w-screen mx-auto">
        <Navbar />
        <div className="text-center text-black text-2xl font-bold mt-2">
          Coffee Bean Detection
        </div>
        {hasilKlasifikasi ? (
          // Render elemen hasil klasifikasi
          <div>
            <h2 className="text-center text-black text-2xl font-bold">
              Result
            </h2>
            {/* Menggunakan URL blob untuk menampilkan gambar lokal */}
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <div className="result-image">
                <img
                  src={`data:image/jpeg;base64,${image_data}`} // Menampilkan gambar sebagai data URI
                  alt="Foto yang dipilih"
                  className="w-full h-full object-fit-cover"
                />
              </div>
              <div className="result-statistics">
                <h1 className="text-2xl mb-2 font-bold lg:my-3">Statistic</h1>
                <h2 className="font-base text-base text-center">
                  Total Number of Defects: {this.calculateTotalDefects()}
                  <br />
                  Type of Quality: Mutu 1
                </h2>
                {processingTime !== null && (
                  <p className="text-base m-1">
                    Duration: {processingTime.toFixed(2)}s
                  </p>
                )}
                <ul className="pl-6 list-disc">
                  <li>
                    Bentuk Tidak Wajar:{" "}
                    {this.calculatePercentage("Bentuk Tidak Wajar")}%
                  </li>
                  <li>
                    Warna Tidak Wajar:{" "}
                    {this.calculatePercentage("Warna Tidak Wajar")}%
                  </li>
                  <li>Normal: {this.calculatePercentage("Normal")}%</li>
                  <li>
                    Kelainan Lain: {this.calculatePercentage("Kelainan Lain")}%
                  </li>
                </ul>
                <h1 className="text-2xl mb-2 font-bold lg:my-3">Description</h1>
                <ul className="pl-6 list-disc">
                  <li>Bentuk Tidak Wajar: Biji Pecah</li>
                  <li>
                    Warna Tidak Wajar: Biji Hitam, Biji Cokelat, Biji Muda
                  </li>
                  <li>Normal: Biji Kopi Normal </li>
                  <li>Kelainan Lain: Kopi Gelondong, Kulit Biji Kopi</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          // Render elemen lainnya (form upload dan tombol)
          <div>
            <div className="text-center text-black text-xl mt-2">
              Upload or Take a Photo here!
            </div>
            <div className="w-[375px] h-[375px] lg:w-[500px] lg:h-[500px] mt-4 bg-black mx-auto relative flex items-center justify-center">
              {imageObjectURL ? (
                <img
                  src={imageObjectURL}
                  alt="Foto yang dipilih"
                  className="w-full h-full object-fit-cover"
                />
              ) : (
                <div className="text-[#D3D3D3] text-center">
                  No photos added yet!
                </div>
              )}
            </div>
            <div>
              <label className="text-center inline-flex text-white rounded-lg cursor-pointer mt-5 bg-[#BE7656] px-9 py-2 text-lg hover:bg-[#e8a587] hover:text-black">
                Add Photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={this.handleFileChange}
                  className="hidden" // Menggunakan kelas 'hidden' untuk menyembunyikan input asli
                />
              </label>
            </div>
            <button
              onClick={this.handleSubmit}
              className="text-center inline-flex text-white rounded-lg cursor-pointer m-2 bg-[#BE7656] px-5 py-2 text-lg hover:bg-[#e8a587] hover:text-black"
            >
              Start Detection
            </button>
          </div>
        )}
        {isLoading && <Loading />}
        {error && <p>{error}</p>}
      </div>
    );
  }
}

export default CoffeeQualityClassifier;
