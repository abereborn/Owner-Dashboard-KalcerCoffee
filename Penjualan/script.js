// Data dummy penjualan bulanan
const salesData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
  values: [32000000, 28000000, 36000000, 41000000, 38000000, 44000000, 47000000, 49000000, 46000000, 48750000, 0, 0],
};

// Riwayat transaksi dummy
const transactionHistory = [
  { time: "08:15", menu: "Cappuccino", total: 28000 },
  { time: "09:22", menu: "Caramel Latte", total: 32000 },
  { time: "10:05", menu: "Americano", total: 25000 },
  { time: "11:45", menu: "Espresso", total: 22000 },
  { time: "12:30", menu: "Mocha Latte", total: 31000 },
  { time: "13:05", menu: "Cold Brew", total: 35000 },
  { time: "14:15", menu: "Hazelnut Latte", total: 34000 },
];

// Render chart
const ctx = document.getElementById("salesChart").getContext("2d");
new Chart(ctx, {
  type: "line",
  data: {
    labels: salesData.labels,
    datasets: [
      {
        label: "Total Penjualan (Rp)",
        data: salesData.values,
        borderColor: "#8B5E3C",
        backgroundColor: "rgba(139, 94, 60, 0.2)",
        borderWidth: 2,
        fill: true,
        tension: 0.3,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return "Rp " + value.toLocaleString("id-ID");
          },
        },
      },
    },
  },
});

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
    window.location.href = "/Login Page/index.html";
  });
});
