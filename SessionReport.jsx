import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "../styles/form.css";

function SessionReport({ report }) {
  const [filter, setFilter] = useState("");
  const [students, setStudents] = useState(report || []);

  useEffect(() => {
    // Tạo kết nối WebSocket khi component mount
    const socket = io("http://localhost:5000"); // Đổi thành apiUrl nếu cần
    socket.on("sessionReport", (data) => {
      setStudents(data);
    });
    return () => socket.disconnect();
  }, []);

  // Lọc theo MSSV hoặc tên
  const filteredStudents = students.filter(
    (s) =>
      s.student_id.toLowerCase().includes(filter.toLowerCase()) ||
      s.full_name.toLowerCase().includes(filter.toLowerCase())
  );
  const presentStudents = filteredStudents.filter((s) => s.status === "Có mặt");
  const absentStudents = filteredStudents.filter((s) => s.status === "Vắng mặt");

  return (
    <section className="session-report modern-card">
      <h2 className="form-title">Kết quả Điểm danh Cuối cùng</h2>
      <input
        className="input-modern"
        type="text"
        placeholder="Lọc theo MSSV hoặc tên"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginBottom: 18, width: "60%" }}
      />
      <div className="report-flex">
        <div className="report-box present">
          <h4>
            Sinh viên Có mặt <span className="badge">{presentStudents.length}</span>
          </h4>
          <ul>
            {presentStudents.map((student) => (
              <li key={student.student_id}>
                <span className="student-id">{student.student_id}</span> - <span className="student-name">{student.full_name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="report-box absent">
          <h4>
            Sinh viên Vắng mặt <span className="badge">{absentStudents.length}</span>
          </h4>
          <ul>
            {absentStudents.map((student) => (
              <li key={student.student_id}>
                <span className="student-id">{student.student_id}</span> - <span className="student-name">{student.full_name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SessionReport;
