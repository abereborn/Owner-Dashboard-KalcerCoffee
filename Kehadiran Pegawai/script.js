// Data dummy kehadiran berdasarkan tanggal
const attendanceData = {
  "2025-10-16": [
    { no: 1, nama: "Rizky Andika", jabatan: "Barista", status: "Hadir", jamMasuk: "07:55", jamKeluar: "16:00" },
    { no: 2, nama: "Sinta Lestari", jabatan: "Kasir", status: "Izin", jamMasuk: "-", jamKeluar: "-" },
    { no: 3, nama: "Agung Pratama", jabatan: "Chef", status: "Hadir", jamMasuk: "08:10", jamKeluar: "16:10" },
    { no: 4, nama: "Rara Wulandari", jabatan: "Waitress", status: "Cuti", jamMasuk: "-", jamKeluar: "-" },
    { no: 5, nama: "Bima Santoso", jabatan: "Barista", status: "Hadir", jamMasuk: "07:58", jamKeluar: "16:05" },
  ],
  "2025-10-15": [
    { no: 1, nama: "Rizky Andika", jabatan: "Barista", status: "Hadir", jamMasuk: "08:00", jamKeluar: "16:10" },
    { no: 2, nama: "Sinta Lestari", jabatan: "Kasir", status: "Hadir", jamMasuk: "08:05", jamKeluar: "16:00" },
    { no: 3, nama: "Agung Pratama", jabatan: "Chef", status: "Hadir", jamMasuk: "08:15", jamKeluar: "16:20" },
    { no: 4, nama: "Rara Wulandari", jabatan: "Waitress", status: "Cuti", jamMasuk: "-", jamKeluar: "-" },
    { no: 5, nama: "Bima Santoso", jabatan: "Barista", status: "Hadir", jamMasuk: "07:50", jamKeluar: "16:00" },
  ],
  "2025-10-14": [
    { no: 1, nama: "Rizky Andika", jabatan: "Barista", status: "Hadir", jamMasuk: "07:55", jamKeluar: "16:00" },
    { no: 2, nama: "Sinta Lestari", jabatan: "Kasir", status: "Hadir", jamMasuk: "07:55", jamKeluar: "16:00" },
    { no: 3, nama: "Agung Pratama", jabatan: "Chef", status: "Hadir", jamMasuk: "08:10", jamKeluar: "16:10" },
    { no: 4, nama: "Rara Wulandari", jabatan: "Waitress", status: "Cuti", jamMasuk: "-", jamKeluar: "-" },
    { no: 5, nama: "Bima Santoso", jabatan: "Barista", status: "Hadir", jamMasuk: "07:58", jamKeluar: "16:05" },
  ],
  "2025-10-13": [
    { no: 1, nama: "Rizky Andika", jabatan: "Barista", status: "Hadir", jamMasuk: "07:55", jamKeluar: "16:00" },
    { no: 2, nama: "Sinta Lestari", jabatan: "Kasir", status: "Hadir", jamMasuk: "07:00", jamKeluar: "15:45" },
    { no: 3, nama: "Agung Pratama", jabatan: "Chef", status: "Hadir", jamMasuk: "08:10", jamKeluar: "16:10" },
    { no: 4, nama: "Rara Wulandari", jabatan: "Waitress", status: "Cuti", jamMasuk: "-", jamKeluar: "-" },
    { no: 5, nama: "Bima Santoso", jabatan: "Barista", status: "Hadir", jamMasuk: "07:58", jamKeluar: "16:05" },
  ],
};

const tbody = document.getElementById("attendanceBody");
const dateInput = document.getElementById("attendanceDate");
const title = document.getElementById("attendanceTitle");
const hadirCount = document.getElementById("hadirCount");
const izinCount = document.getElementById("izinCount");

// Fungsi render tabel
function renderAttendance(date) {
  const data = attendanceData[date] || [];
  tbody.innerHTML = "";
  let hadir = 0,
    izin = 0;

  data.forEach((item) => {
    const row = document.createElement("tr");
    let statusClass = item.status.toLowerCase();

    if (item.status === "Hadir") hadir++;
    if (item.status === "Izin" || item.status === "Cuti") izin++;

    row.innerHTML = `
      <td>${item.no}</td>
      <td>${item.nama}</td>
      <td>${item.jabatan}</td>
      <td><span class="status ${statusClass}">${item.status}</span></td>
      <td>${item.jamMasuk}</td>
      <td>${item.jamKeluar}</td>
    `;
    tbody.appendChild(row);
  });

  title.textContent = `Daftar Kehadiran Pegawai Kalcer Coffee (${formatDate(date)})`;
  hadirCount.textContent = `${hadir} Orang`;
  izinCount.textContent = `${izin} Orang`;
}

// Format tanggal ke format Indonesia
function formatDate(date) {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Date(date).toLocaleDateString("id-ID", options);
}

// Ganti tanggal manual
dateInput.addEventListener("change", (e) => renderAttendance(e.target.value));

// Tombol prev/next
document.getElementById("prevDate").addEventListener("click", () => {
  const current = new Date(dateInput.value);
  current.setDate(current.getDate() - 1);
  dateInput.value = current.toISOString().split("T")[0];
  renderAttendance(dateInput.value);
});

document.getElementById("nextDate").addEventListener("click", () => {
  const current = new Date(dateInput.value);
  current.setDate(current.getDate() + 1);
  dateInput.value = current.toISOString().split("T")[0];
  renderAttendance(dateInput.value);
});

// Render awal
renderAttendance(dateInput.value);

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
