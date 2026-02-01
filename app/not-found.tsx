import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { ROUTES } from "@/constants/routes";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 px-4 text-center">
      <div className="space-y-6">
        <div className="relative">
          <p className="text-[12rem] font-extrabold text-zinc-200 tracking-tighter font-heading leading-none">
            404
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-4xl font-bold text-zinc-900 font-heading">
              Lỗi trang
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-2xl font-semibold text-zinc-800 font-heading">
            Trang không tồn tại
          </p>
          <p className="text-zinc-500 text-lg leading-relaxed">
            Rất tiếc, chúng tôi không thể tìm thấy nội dung bạn đang tìm kiếm.
            <br />
            Vui lòng kiểm tra lại địa chỉ hoặc quay lại trang chính.
          </p>
        </div>

        <div className="pt-4">
          <Button asChild>
            <Link
              href={ROUTES.PUBLIC.HOME}
              className="inline-flex items-center gap-2"
            >
              <Home size={18} />
              Quay về trang chủ
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
