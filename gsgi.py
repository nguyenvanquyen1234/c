from pymongo import MongoClient

# Kết nối tới MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['quyen02042005']
students_collection = db['bar']

# CRUD một sinh viên
def create_student(student):
    students_collection.insert_one(student)

def read_student(student_id):
    return students_collection.find_one({"student_id": student_id})

def update_student(student_id, update_data):
    students_collection.update_one({"student_id": student_id}, {"$set": update_data})

def delete_student(student_id):
    students_collection.delete_one({"student_id": student_id})

# CRUD nhiều sinh viên
def create_students(students):
    students_collection.insert_many(students)

def read_students(student_ids):
    return list(students_collection.find({"student_id": {"$in": student_ids}}))

def update_students(student_ids, update_data):
    students_collection.update_many({"student_id": {"$in": student_ids}}, {"$set": update_data})

def delete_students(student_ids):
    students_collection.delete_many({"student_id": {"$in": student_ids}})

# Liệt kê tất cả sinh viên của lớp T2308M
def list_students_by_class(class_id):
    return list(students_collection.find({"class.class_id": class_id}))

# Liệt kê những sinh viên đã học môn Java
def list_students_by_subject(subject_name):
    return list(students_collection.find({"subject.name": subject_name}))

# Tính tổng số sinh viên trong từng môn học
def count_students_by_subject():
    pipeline = [
        {"$unwind": "$subject"},
        {"$group": {"_id": "$subject.name", "count": {"$sum": 1}}}
    ]
    return list(students_collection.aggregate(pipeline))

def input_student():
    student_id = input("Nhập mã sinh viên: ")
    student_name = input("Nhập tên sinh viên: ")
    class_id = input("Nhập mã lớp: ")
    class_name = input("Nhập tên lớp: ")
    subjects = input("Nhập các môn học (phân tách bởi dấu phẩy): ").split(',')
    
    student = {
        "student_id": student_id,
        "student_name": student_name,
        "class": {
            "class_id": class_id,
            "class_name": class_name
        },
        "subject": [{"name": subject.strip()} for subject in subjects]
    }
    
    return student

def main():
    while True:
        print("Chọn thao tác:")
        print("1. Thêm một sinh viên")
        print("2. Đọc thông tin một sinh viên")
        print("3. Cập nhật thông tin một sinh viên")
        print("4. Xóa một sinh viên")
        print("5. Liệt kê tất cả sinh viên của lớp T2308M")
        print("6. Liệt kê những sinh viên đã học môn Java")
        print("7. Tính tổng số sinh viên trong từng môn học")
        print("8. Thoát")
        
        choice = input("Lựa chọn: ")
        
        if choice == '1':
            student = input_student()
            create_student(student)
            print("Đã thêm sinh viên.")
        
        elif choice == '2':
            student_id = input("Nhập mã sinh viên: ")
            student = read_student(student_id)
            print(student)
        
        elif choice == '3':
            student_id = input("Nhập mã sinh viên: ")
            update_data = input_student()
            update_student(student_id, update_data)
            print("Đã cập nhật thông tin sinh viên.")
        
        elif choice == '4':
            student_id = input("Nhập mã sinh viên: ")
            delete_student(student_id)
            print("Đã xóa sinh viên.")
        
        elif choice == '5':
            students = list_students_by_class("T2308M")
            for student in students:
                print(student)
        
        elif choice == '6':
            students = list_students_by_subject("Java")
            for student in students:
                print(student)
        
        elif choice == '7':
            counts = count_students_by_subject()
            for count in counts:
                print(f"Môn {count['_id']}: {count['count']} sinh viên")
        
        elif choice == '8':
            break
        
        else:
            print("Lựa chọn không hợp lệ, vui lòng thử lại.")

if __name__ == "__main__":
    main()
