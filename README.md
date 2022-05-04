# BE-QLDAPM
Dự án phát triển website fahasa
### Cách build resources:
```
Bước 1: Cài đặt Visual Studio Code và MySQL Workbench 8.0 CE
Bước 2: Trong MySQL Workbench 8.0 CE 
Bước 2.1: Ở phía bên dưới navigator, trong Shemas click chuột phải và chọn Create Schema, ở trường name nhập tên "db_fahasa" và nhấp Apply ở phía bên dưới
Bước 2.2: Chọn File -> Open SQL Script và chọn tệp db_fahasa.sql. Sau đó nhấn Execute( hình sấm sét)
Bước 3: Trong Visual Studio Code
Bước 3.1: Chọn Open Folder và chọn folder BE-QLDAPM
Bước 3.2: Chọn Terminal-> New terminal,trong cửa sổ terminal nhập đoạn lệnh "npm install"
Bước 3.3: Chuột phải vào folder BE-QLDAPM chọn new file. Nhập tên file là ".env" và cấu hình HOST, PORT, USER, PASSWORD phù hợp với MySQL Workbench
Bước 3.4: Trong cửa sổ terminal nhập đoạn lệnh "npm run dev"
```
