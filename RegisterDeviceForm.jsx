// src/components/RegisterDeviceForm.jsx
import React from "react";

function RegisterDeviceForm({ onSubmit, studentIdInput, setStudentIdInput }) {
  return (
    <section
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "32px",
        borderRadius: "12px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        background: "#fff",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "24px", color: "#1976d2" }}>
        Nhập mã sinh viên để điểm danh<br />(Chỉ khi phiên mở)
      </h2>
      <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <input
          type="text"
          placeholder="Nhập MSSV của bạn"
          value={studentIdInput}
          onChange={(e) => setStudentIdInput(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "6px",
            background: "#1976d2",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "background 0.2s",
          }}
        >
          Điểm danh
        </button>
      </form>
    </section>
  );
}

export default RegisterDeviceForm;