import mysql.connector
from datetime import datetime, timedelta

# Kết nối với cơ sở dữ liệu MySQL
def connect_db():
    connection = mysql.connector.connect(
        host="localhost",
        user="root",
        password="benh_nhan",
        database="phong_khám",
    )
    return connection

# Hàm thêm bệnh nhân
def add_patient(connection, full_name, date_of_birth, gender, address, phone, email):
    cursor = connection.cursor()
    query = "INSERT INTO benh_nhan (full_name, ngay_of_sinh, gioi_tinh, dia_chi, so_dien_thoai, email) VALUES (%s, %s, %s, %s, %s, %s)"
    cursor.execute(query, (full_name, date_of_birth, gender, address, phone, email))
    connection.commit()

# Hàm thêm bác sĩ
def add_doctor(connection, full_name, specialization, phone, email, years_experience):
    cursor = connection.cursor()
    query = "INSERT INTO bac_si (full_name, chuyen_mon, so_dien_thoai, email, so_nam_kinh_nghiem) VALUES (%s, %s, %s, %s, %s)"
    cursor.execute(query, (full_name, specialization, phone, email, years_experience))
    connection.commit()

# Hàm thêm cuộc hẹn
def add_appointment(connection, patient_id, doctor_id, appointment_date, reason):
    cursor = connection.cursor()
    query = "INSERT INTO cuoc_hen (benh_nhan_id, doctor_id, cuoc_hen_ngay, ly_do) VALUES (%s, %s, %s, %s)"
    cursor.execute(query, (patient_id, doctor_id, appointment_date, reason))
    connection.commit()

# Hàm hiển thị báo cáo
def display_report(connection):
    cursor = connection.cursor()
    query = """
    SELECT benh_nhan.full_name, benh_nhan.ngay_of_sinh, benh_nhan.gioi_tinh, benh_nhan.dia_chi,
           bac_si.full_name AS ten_bac_si, cuoc_hen.ly_do, cuoc_hen.cuoc_hen_ngay
    FROM cuoc_hen
    JOIN benh_nhan ON cuoc_hen.benh_nhan_id = benh_nhan.benh_nhan_id
    JOIN bac_si ON cuoc_hen.doctor_id = bac_si.doctor_id
    """
    cursor.execute(query)
    rows = cursor.fetchall()
    print("Báo cáo cuộc hẹn:")
    for row in rows:
        print(f"{row[0]}, {row[1]}, {row[2]}, {row[3]}, {row[4]}, {row[5]}, {row[6]}")

# Hàm hiển thị cuộc hẹn hôm nay
def display_today_appointments(connection):
    today = datetime.today().date()
    cursor = connection.cursor()
    query = """
    SELECT benh_nhan.dia_chi, benh_nhan.full_name, benh_nhan.ngay_of_sinh, benh_nhan.gioi_tinh, bac_si.full_name AS ten_bac_si, cuoc_hen.trang_thai
    FROM cuoc_hen
    JOIN benh_nhan ON cuoc_hen.benh_nhan_id = benh_nhan.benh_nhan_id
    JOIN bac_si ON cuoc_hen.doctor_id = bac_si.doctor_id
    WHERE DATE(cuoc_hen.cuoc_hen_ngay) = %s
    """
    cursor.execute(query, (today,))
    rows = cursor.fetchall()
    print("Cuộc hẹn hôm nay:")
    for row in rows:
        print(f"{row[0]}, {row[1]}, {row[2]}, {row[3]}, {row[4]}, {row[5]}")

# Chạy chương trình
if __name__ == "__main__":
    # Kết nối đến cơ sở dữ liệu
    connection = connect_db()

    # Thêm 3 bệnh nhân
    add_patient(connection, "Nguyen A", "2010-01-01", "Nam", "Ha Noi", "0123456789", "nguyena@example.com")
    add_patient(connection, "Nguyen B", "1990-05-15", "Nu", "Ha Noi", "0987654321", "nguyenb@example.com")
    add_patient(connection, "Nguyen C", "1985-12-20", "Nam", "HCM", "0912345678", "nguyenc@example.com")

    # Thêm 5 bác sĩ
    add_doctor(connection, "Nguyen Quyền", "Tim mach", "0963892332", "nguyenquyen@example.com", 10)
    add_doctor(connection, "Tran van Quyết", "Nhi khoa", "0973903948", "tranvanquyet@example.com", 8)
    add_doctor(connection, "Le Khang kiểm", "Da lieu", "0993846135", "lekhangkiem@example.com", 5)
    add_doctor(connection, "Pham Long Thành", "Tai mui hong", "0992750438", "phamlongthanh@example.com", 12)
    add_doctor(connection, "Dang Khoa Hải Đăng", "Noi khoa", "0934563799", "dangkhoahaidang@example.com", 15)

    # Thêm 3 cuộc hẹn cho các bệnh nhân
    add_appointment(connection, 1, 1, datetime.now(), "Kham tong quat")
    add_appointment(connection, 2, 2, datetime.now() + timedelta(days=1), "Kiem tra suc khoe")
    add_appointment(connection, 3, 3, datetime.now() + timedelta(days=2), "Kham da lieu")

    # Hiển thị báo cáo
    display_report(connection)

    # Hiển thị các cuộc hẹn hôm nay
    display_today_appointments(connection)

    # kết nối
    connection.close()
