
export interface Sanpham {
    id: number;
    userId: number | null;
    thuongHieuId: number;
    loaiHangId: number;
    khuyenMaiId: number | null;
    maSanPham: string;
    tenSanPham: string;
    giaSanPham: number;
    hinhSanPham: string | null;
    ngayTao: string;
    ngayCapNhat: string;
    giamGia: number;
    soLuong: number;
    thongTin: string | null;
    trangThai: boolean | null;
    gia: number;
    // khuyenMai: Khuyenmai | null;
    // thuongHieu: Thuonghieu;
    // user: User | null;
    // hinh: Hinh | null;
    // chitietdonhangs: Chitietdonhang[];
}