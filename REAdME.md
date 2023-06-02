# Dự án Shopee Clone Typescript
 ### Created by
  [DanTD](https://www.facebook.com/duydan272000) 


## Chức năng trong dự án

- Authentication module: Management by JWT

  - Register
  - Log in
  - Log out

- Product listing page:

  - pagination
  - Sort (sort) by each product attribute
  - Advanced filter by each product attribute
  - Search product

- Product detail page:

   - Show detailed information
   - Image displayed by slider + hover zoom effect
   - Description, display rich text WYSIWYG HTML
   - There is a purchase function

- - Cart

  - Order management: Add, edit, delete products
  - Purchase

- Manage customer profiles

  - Update personal information
  - Upload Avatar
  - Change Password
  - View order status

## TECH

- UI / CSS Library: Tailwindcss + HeadlessUI
- State Management: React Query cho async state và React Context cho state thường
- Form Management: React Hook Form
- Router: React Router
- Build tool: Vite
- Multi-language support: react.i18next
- Support SEO with React Helmet
- Modeling components with storybook
- Unit Test


### Bộ ESLint và Prettier trước

> Chúng ta sẽ cài hơi nhiều package 1 tí vì chúng ta setup từ đầu, còn Create React App setup sẵn 1 số thứ về ESLint rồi.

Dưới đây là những depedency mà chúng ta cần cài

- ESLint: linter (bộ kiểm tra lỗi) chính

- Prettier: code formatter chính

- @typescript-eslint/eslint-plugin: ESLint plugin cung cấp các rule cho Typescript

- @typescript-eslint/parser: Parser cho phép ESLint kiểm tra lỗi Typescript.

- eslint-config-prettier: Bộ config ESLint để vô hiệu hóa các rule của ESLint mà xung đột với Prettier.

- eslint-plugin-import: Để ESLint hiểu về cú pháp `import...` trong source code.

- eslint-plugin-jsx-a11y: Kiểm tra các vấn đề liên quan đến accessiblity (Tính thân thiện website, ví dụ cho thiết bị máy đọc sách).

- eslint-plugin-react: Các rule ESLint cho React

- eslint-plugin-prettier: Dùng thêm 1 số rule Prettier cho ESLint

- prettier-plugin-tailwindcss: Sắp xếp class tailwindcss

- eslint-plugin-react-hooks: ESLint cho React hook





