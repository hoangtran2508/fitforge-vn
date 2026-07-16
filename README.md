# FitForge

Website tĩnh tiếng Việt về thư viện bài tập và công cụ tự xây dựng buổi tập. Dự án chạy trực tiếp trên GitHub Pages, không cần cài Node.js, server hay database.

## Chạy thử trên máy

Bạn có thể mở trực tiếp file `index.html`, hoặc chạy một web server đơn giản:

```bash
python -m http.server 8000
```

Sau đó mở `http://localhost:8000`.

## Đưa lên GitHub Pages

1. Tạo một repository mới trên GitHub, ví dụ `fitforge-vn`.
2. Upload toàn bộ nội dung trong thư mục này lên nhánh `main`. File `index.html` phải nằm ở thư mục gốc của repository.
3. Mở `Settings` → `Pages`.
4. Trong `Build and deployment`, chọn `Deploy from a branch`.
5. Chọn nhánh `main`, thư mục `/(root)`, rồi bấm `Save`.
6. Chờ GitHub triển khai. Địa chỉ thường có dạng `https://TEN-TAI-KHOAN.github.io/fitforge-vn/`.

## Tính năng

- Tìm kiếm, lọc và sắp xếp thư viện bài tập.
- Xem hướng dẫn từng bước và lưu ý kỹ thuật.
- Lưu bài yêu thích.
- Tạo buổi tập, chỉnh số hiệp, số lần, thời gian nghỉ và thứ tự.
- Tự thêm bài tập riêng.
- Tự lưu dữ liệu bằng `localStorage` trên trình duyệt.
- Responsive cho máy tính, tablet và điện thoại.

## Cấu trúc

```text
fitforge-github-pages/
├── index.html
├── styles.css
├── app.js
├── .nojekyll
└── README.md
```

Lưu ý: dữ liệu người dùng được lưu riêng trên từng trình duyệt. Vì GitHub Pages là web tĩnh nên dữ liệu không tự đồng bộ giữa các thiết bị.
