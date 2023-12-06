IF EXISTS (SELACT * FROM sys.databases where name linke 'example5')
    DROP DATABASE Example5
GO 
use example5
go
--ddl: create, alter, drop
--dml: insert, update, delete
--ctrl +/
--datatype in sql
--tạo bảng lớp học
create table lophoc(
     malophoc int primary key indentity,
	 teplophoc varchar(10)
)
GO
SELECT * FROM LOPHOC
go
insert into lophoc(tenlophoc) values('T2308M')
select * from lophoc
update lophoc set tenlophoc = 'T2308'
   where malophoc = 1002
delete from lophoc where malophoc = 1002
go
-- sanpham(masp, tesp, gia, loại)

--tạo bảng sinh viên có khoá ngoại là cột malophoc, nối với bảng lophoc
--composite primary key
drop, table sinhvien 
create table sinhvien(
      masv int primary key,
	  tensv navrchar(250),
	  classcode int,
	  constrain fk foreign key (classcode) references lophoc(malophoc)
	  )
	  Go
	  INSERT INTO sinhvien(masv, tensv, classcode) values(1,'minh', 5);
	  INSERT INTO sinhvien(masv, tensv, classcode) values(3,'hoa', 1004);
	  INSERT INTO sinhvien(masv, tensv, classcode) values(14,'minh', 1007),(16,'linh',1006);
	  SELECT * FROM Sinhvien
	  SELECT * FROM Lophoc
	  GO