import slugify from "slugify";

export const generateSlug = (title) => {
  return slugify(title, {
    lower: true, // Chuyển về chữ thường
    strict: true, // Loại bỏ ký tự đặc biệt
    trim: true, // Xóa khoảng trắng thừa
  });
};
