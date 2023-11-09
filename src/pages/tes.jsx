import React, { Component } from "react";

class CoffeeQualityClassifier extends Component {
  constructor() {
    super();
    this.state = {
      selectedFile: null,
      hasilKlasifikasi: null,
      error: null,
      isLoading: false,
      processingTime: null,
    };
  }

  handleFileChange = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      hasilKlasifikasi: null,
      error: null,
    });
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
        this.setState({ hasilKlasifikasi: data.classifications });
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
    return (
      <div>
        <h1>Coffee Quality Classifier</h1>
        <input type="file" accept="image/*" onChange={this.handleFileChange} />
        <button onClick={this.handleSubmit}>Kirim Gambar</button>
        {this.state.isLoading && <p>Sedang memproses...</p>}
        {this.state.error && <p>{this.state.error}</p>}
        {this.state.hasilKlasifikasi && (
          <div>
            <h2>Hasil Klasifikasi</h2>
            <img
              src={`http://localhost:5000/uploads/${this.state.hasilKlasifikasi.uploaded_image}`}
              alt="Hasil Klasifikasi"
            />
            <pre>{JSON.stringify(this.state.hasilKlasifikasi, null, 2)}</pre>
            {this.state.processingTime !== null && (
              <p>Total Durasi Pemrosesan: {this.state.processingTime} detik</p>
            )}

            <h2>Statistik Klasifikasi Biji Kopi</h2>
            <ul>
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
          </div>
        )}
      </div>
    );
  }
}

export default CoffeeQualityClassifier;
