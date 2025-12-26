// Data stok bahan baku berdasarkan tanggal (dummy data)
const stockData = {
  "2025-10-16": [
    { no: 1, nama: "Kopi Arabica Gayo", satuan: "Kg", stok: 30, kondisi: "Aman" },
    { no: 2, nama: "Kopi Robusta Lampung", satuan: "Kg", stok: 15, kondisi: "Aman" },
    { no: 3, nama: "Susu Cair Full Cream", satuan: "Liter", stok: 5, kondisi: "Perlu Restock" },
    { no: 4, nama: "Gula Pasir", satuan: "Kg", stok: 8, kondisi: "Aman" },
    { no: 5, nama: "Cokelat Bubuk", satuan: "Kg", stok: 2, kondisi: "Perlu Restock" },
    { no: 6, nama: "Syrup Caramel", satuan: "Botol", stok: 6, kondisi: "Aman" },
  ],
  "2025-10-15": [
    { no: 1, nama: "Kopi Arabica Gayo", satuan: "Kg", stok: 31, kondisi: "Aman" },
    { no: 2, nama: "Kopi Robusta Lampung", satuan: "Kg", stok: 18, kondisi: "Aman" },
    { no: 3, nama: "Susu Cair Full Cream", satuan: "Liter", stok: 6, kondisi: "Aman" },
    { no: 4, nama: "Gula Pasir", satuan: "Kg", stok: 10, kondisi: "Aman" },
    { no: 5, nama: "Cokelat Bubuk", satuan: "Kg", stok: 3, kondisi: "Perlu Restock" },
    { no: 6, nama: "Syrup Caramel", satuan: "Botol", stok: 7, kondisi: "Aman" },
  ],
  "2025-10-14": [
    { no: 1, nama: "Kopi Arabica Gayo", satuan: "Kg", stok: 32, kondisi: "Aman" },
    { no: 2, nama: "Kopi Robusta Lampung", satuan: "Kg", stok: 20, kondisi: "Aman" },
    { no: 3, nama: "Susu Cair Full Cream", satuan: "Liter", stok: 6, kondisi: "Aman" },
    { no: 4, nama: "Gula Pasir", satuan: "Kg", stok: 12, kondisi: "Aman" },
    { no: 5, nama: "Cokelat Bubuk", satuan: "Kg", stok: 4, kondisi: "Aman" },
    { no: 6, nama: "Syrup Caramel", satuan: "Botol", stok: 7, kondisi: "Aman" },
  ],
  "2025-10-13": [
    { no: 1, nama: "Kopi Arabica Gayo", satuan: "Kg", stok: 33, kondisi: "Aman" },
    { no: 2, nama: "Kopi Robusta Lampung", satuan: "Kg", stok: 22, kondisi: "Aman" },
    { no: 3, nama: "Susu Cair Full Cream", satuan: "Liter", stok: 7, kondisi: "Aman" },
    { no: 4, nama: "Gula Pasir", satuan: "Kg", stok: 12, kondisi: "Aman" },
    { no: 5, nama: "Cokelat Bubuk", satuan: "Kg", stok: 6, kondisi: "Aman" },
    { no: 6, nama: "Syrup Caramel", satuan: "Botol", stok: 8, kondisi: "Aman" },
  ],
};

// Element HTML
const tbody = document.getElementById("stockBody");
const dateInput = document.getElementById("stockDate");
const title = document.getElementById("stockTitle");
const totalBahan = document.getElementById("totalBahan");
const amanCount = document.getElementById("amanCount");
const restockCount = document.getElementById("restockCount");

// Fungsi render stok bahan
function renderStock(date) {
  const data = stockData[date] || [];
  tbody.innerHTML = "";
  let aman = 0;
  let restock = 0;

  data.forEach((item) => {
    const row = document.createElement("tr");
    const kondisiClass = item.kondisi === "Aman" ? "status aman" : "status restock";

    if (item.kondisi === "Aman") aman++;
    else restock++;

    row.innerHTML = `
      <td>${item.no}</td>
      <td>${item.nama}</td>
      <td>${item.satuan}</td>
      <td>${item.stok}</td>
      <td><span class="${kondisiClass}">${item.kondisi}</span></td>
    `;
    tbody.appendChild(row);
  });

  title.textContent = `Daftar Stock & Bahan Baku Kalcer Coffee (${formatDate(date)})`;
  totalBahan.textContent = `${data.length} Jenis`;
  amanCount.textContent = `${aman} Jenis`;
  restockCount.textContent = `${restock} Jenis`;
}

// Format tanggal ke bahasa Indonesia
function formatDate(date) {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Date(date).toLocaleDateString("id-ID", options);
}

// Event Listener untuk input tanggal
dateInput.addEventListener("change", (e) => renderStock(e.target.value));

// Tombol navigasi tanggal
document.getElementById("prevStockDate").addEventListener("click", () => {
  const current = new Date(dateInput.value);
  current.setDate(current.getDate() - 1);
  dateInput.value = current.toISOString().split("T")[0];
  renderStock(dateInput.value);
});

document.getElementById("nextStockDate").addEventListener("click", () => {
  const current = new Date(dateInput.value);
  current.setDate(current.getDate() + 1);
  dateInput.value = current.toISOString().split("T")[0];
  renderStock(dateInput.value);
});

// Render awal
renderStock(dateInput.value);

document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");
  const logoutPopup = document.getElementById("logoutPopup");
  const confirmLogout = document.getElementById("confirmLogout");
  const cancelLogout = document.getElementById("cancelLogout");

  if (!logoutBtn || !logoutPopup) {
    console.error("Elemen popup logout tidak ditemukan!");
    return;
  }

  logoutBtn.addEventListener("click", () => {
    logoutPopup.style.display = "flex";
  });

  cancelLogout.addEventListener("click", () => {
    logoutPopup.style.display = "none";
  });

  confirmLogout.addEventListener("click", () => {
    window.location.href = "../index.html";
  });
});
