const ctx = document.getElementById("incomeChart").getContext("2d");

const incomeChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
    datasets: [
      {
        label: "Pemasukan (Rp)",
        data: [9000000, 11000000, 9500000, 12000000, 14000000, 12500000, 16000000, 15500000, 17000000, 18000000, 19000000, 20000000],
        borderColor: "#8b5e3c",
        backgroundColor: "rgba(139, 94, 60, 0.2)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#8b5e3c",
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: function (value) {
            return "Rp " + value.toLocaleString();
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
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
    window.location.href = "../index.html";
  });
});
