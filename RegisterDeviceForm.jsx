import React from "react";

function RegisterDeviceForm({ onSubmit, studentIdInput, setStudentIdInput }) {
  return (
    <section className="form-section">
      <h2 className="form-title">
        Nhập mã sinh viên để điểm danh <span className="form-note">(Chỉ khi phiên mở)</span>
      </h2>
      <form onSubmit={onSubmit} className="form-register">
        <input
          className="input-modern"
          type="text"
          placeholder="Nhập MSSV của bạn"
          value={studentIdInput}
          onChange={(e) => setStudentIdInput(e.target.value)}
        />
        <button className="button-modern" type="submit">
          Điểm danh
        </button>
      </form>
    </section>
  );
}

export default RegisterDeviceForm;
